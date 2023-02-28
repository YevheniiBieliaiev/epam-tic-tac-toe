import { useForm, type SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useNavigate } from 'react-router-dom';
import type { ISignInForm } from '@interfaces';
import { ClientRoutes } from '@enums';
import { enLocal } from '@locals';
import { userSignInSchema } from '@validation';
import { Button, InputText, InternalLink, Spinner } from '@primitives';
import { useAppDispatch, useAppSelector } from '@hooks';
import { userSignin } from '@store';
import * as styles from './styles';

export const SignIn = () => {
  const loading = useAppSelector((state) => state.auth.loading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: joiResolver(userSignInSchema),
  });

  const signinHandler: SubmitHandler<ISignInForm> = (data) => {
    dispatch(userSignin({ data, navigate }));
  };

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

  return (
    <div css={styles.formWrapper}>
      <form onSubmit={handleSubmit(signinHandler)}>
        <div css={styles.row}>
          <InputText
            {...register('email')}
            id="signinEmail"
            label={enLocal.forms.signin.email.label}
            placeholder={enLocal.forms.signin.email.placeholder}
            autoComplete="off"
            error={errors.email?.message}
          />
        </div>

        <div css={styles.row}>
          <InputText
            {...register('password')}
            id="signinPassword"
            label={enLocal.forms.signin.password.label}
            placeholder={enLocal.forms.signin.password.placeholder}
            isPassword={true}
            autoComplete="off"
            error={errors.password?.message}
            onCut={onCutHandler}
            onCopy={onCopyHandler}
            onPaste={onPastHandler}
          />

          <div css={styles.resetLink}>
            <InternalLink
              path={`${ClientRoutes.SIGN}/${ClientRoutes.RESET_PASSWORD_EMAIL}`}
              label={enLocal.forms.signin.resetPassword}
              contrast="secondary"
              txtSize="md"
            />
          </div>
        </div>

        <div css={styles.row}>
          <Button type="submit" variant="form" disabled={loading}>
            {loading ? <Spinner /> : enLocal.forms.signin.submit}
          </Button>
        </div>
      </form>
    </div>
  );
};
