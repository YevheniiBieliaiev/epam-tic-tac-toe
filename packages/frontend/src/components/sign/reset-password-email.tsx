import { useForm, type SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import type { ISendEmail } from '@tic-tac-toe/shared';
import { useAppDispatch, useAppSelector } from '@hooks';
import { changePaswordEmail } from '@store';
import { authLoader, userAccessToken, userEmail } from '@selectors';
import { InputText, Button, Spinner, InternalLink } from '@primitives';
import { userResetEmailSchema } from '@validation';
import { ClientRoutes } from '@enums';
import { enLocal } from '@locals';
import * as styles from './styles';

export const ResetPasswordEmail = () => {
  const loading = useAppSelector(authLoader);
  const accessToken = useAppSelector(userAccessToken);
  const email = useAppSelector(userEmail);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISendEmail>({
    defaultValues: {
      email: email ?? '',
    },
    resolver: joiResolver(userResetEmailSchema),
  });

  const sendEmailHandler: SubmitHandler<ISendEmail> = (data) => {
    dispatch(changePaswordEmail(data));
  };

  return (
    <div css={styles.formWrapper}>
      <form onSubmit={handleSubmit(sendEmailHandler)}>
        <div css={styles.row}>
          <InputText
            {...register('email')}
            id="resetPasswordEmail"
            label={enLocal.forms.resetPassword.email.label}
            placeholder={enLocal.forms.resetPassword.email.placeholder}
            error={errors.email?.message}
            autoComplete="off"
          />
        </div>

        <div css={styles.row}>
          <Button type="submit" variant="form" disabled={loading}>
            {loading ? <Spinner /> : enLocal.forms.resetPassword.submit}
          </Button>
        </div>

        {!accessToken && (
          <div css={styles.row}>
            <InternalLink
              path={`${ClientRoutes.SIGN}/${ClientRoutes.SIGNIN}`}
              label={enLocal.forms.resetPassword.signinLink}
              contrast="secondary"
              txtSize="md"
            />
          </div>
        )}
      </form>
    </div>
  );
};
