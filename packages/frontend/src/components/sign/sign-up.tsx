import { useRef } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useNavigate } from 'react-router-dom';
import type { ISignUpForm } from '@interfaces';
import { userSignUpSchema } from '@validation';
import { ClientRoutes } from '@enums';
import { enLocal } from '@locals';
import {
  InputText,
  Checkbox,
  Button,
  InternalLink,
  Spinner,
  PasswordTips,
} from '@primitives';
import { useAppDispatch, useAppSelector } from '@hooks';
import { userSignup } from '@store';
import { checkPassword } from '@helpers';
import { SignUpDTO } from './utils';
import * as styles from './styles';

export const SignUp = () => {
  const loading = useAppSelector((state) => state.auth.loading);
  const dispatch = useAppDispatch();
  const inputFocusedRef = useRef<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    resolver: joiResolver(userSignUpSchema),
  });

  const password = watch('password');

  const onFocuse = () => (inputFocusedRef.current = true);

  const signupHandler: SubmitHandler<ISignUpForm> = (data) => {
    const candidate = new SignUpDTO(data);
    dispatch(userSignup({ data: candidate, navigate }));
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
      <form onSubmit={handleSubmit(signupHandler)}>
        <div css={styles.row}>
          <InputText
            {...register('nickname')}
            id="signupNickname"
            label={enLocal.forms.signup.nickname.label}
            placeholder={enLocal.forms.signup.nickname.label}
            error={errors.nickname?.message}
            autoComplete="off"
          />
        </div>

        <div css={styles.row}>
          <InputText
            {...register('email')}
            id="signupEmail"
            label={enLocal.forms.signup.email.label}
            placeholder={enLocal.forms.signup.email.placeholder}
            error={errors.email?.message}
            autoComplete="off"
          />
        </div>

        <div css={styles.row}>
          <InputText
            {...register('password')}
            id="signupPassword"
            label={enLocal.forms.signup.password.label}
            placeholder={enLocal.forms.signup.password.placeholder}
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
            id="signupConfirmPassword"
            label={enLocal.forms.signup.confirmPassword.label}
            placeholder={enLocal.forms.signup.confirmPassword.placeholder}
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

        <div css={[styles.row, styles.checkbox]}>
          <Checkbox
            {...register('terms')}
            id="signupCheckbox"
            label={enLocal.forms.signup.acceptTerms.label}
            error={errors.terms?.message}
          />
          <InternalLink
            path={ClientRoutes.TERMS}
            label={enLocal.common.clientLinks.terms}
            txtSize="sm"
            contrast="secondary"
          />
        </div>

        <div css={styles.row}>
          <Button type="submit" variant="form" disabled={loading}>
            {loading ? <Spinner /> : enLocal.forms.signup.submit}
          </Button>
        </div>
      </form>
    </div>
  );
};
