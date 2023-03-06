import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useAppDispatch, useAppSelector } from '@hooks';
import { changePassword } from '@store';
import { authLoader } from '@selectors';
import type { IResetPassword } from '@interfaces';
import { userResetPasswordSchema } from '@validation';
import {
  InputText,
  Button,
  PasswordTips,
  Spinner,
  Container,
} from '@components/primitives';
import { checkPassword } from '@helpers';
import { enLocal } from '@locals';
import * as styles from './styles';

export const ResetPassword = () => {
  const { token } = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputFocusedRef = useRef<boolean>(false);
  const loading = useAppSelector(authLoader);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IResetPassword>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: joiResolver(userResetPasswordSchema),
  });

  const password = watch('password');

  const onFocuse = () => (inputFocusedRef.current = true);

  const onCutHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    return false;
  };
  const onCopyHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    return false;
  };
  const onPastHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    return false;
  };

  const resetPasswordHandler: SubmitHandler<IResetPassword> = ({
    password,
  }) => {
    dispatch(
      changePassword({
        data: { password, passwordUpdatedAt: new Date() },
        token,
        navigate,
      }),
    );
  };

  return (
    <Container type="centered" cssExtention={styles.resetContainer}>
      <h1 css={styles.header}>{enLocal.forms.resetPassword.changeHeader}</h1>

      <form
        css={styles.formWrapper}
        onSubmit={handleSubmit(resetPasswordHandler)}
      >
        <div css={styles.row}>
          <InputText
            {...register('password')}
            id="resetPassword"
            label={enLocal.forms.resetPassword.password.label}
            placeholder={enLocal.forms.resetPassword.password.placeholder}
            isPassword={true}
            error={errors.password?.message}
            autoComplete="new-password"
            onFocus={onFocuse}
            onCut={onCutHandler}
            onCopy={onCopyHandler}
            onPaste={onPastHandler}
          />
        </div>

        <div css={styles.row}>
          <InputText
            {...register('confirmPassword')}
            id="confirmResetPassword"
            label={enLocal.forms.resetPassword.confirmPassword.label}
            placeholder={
              enLocal.forms.resetPassword.confirmPassword.placeholder
            }
            isPassword={true}
            error={errors.confirmPassword?.message}
            autoComplete="new-password"
            onCut={onCutHandler}
            onCopy={onCopyHandler}
            onPaste={onPastHandler}
          />

          <PasswordTips
            ref={inputFocusedRef}
            result={checkPassword(password)}
          />
        </div>

        <div css={styles.row}>
          <Button type="submit" variant="form" disabled={loading}>
            {loading ? <Spinner /> : enLocal.forms.resetPassword.changeSubmit}
          </Button>
        </div>
      </form>
    </Container>
  );
};
