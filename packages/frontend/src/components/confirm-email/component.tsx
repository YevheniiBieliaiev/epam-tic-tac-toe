import { useForm, type SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useLocation } from 'react-router-dom';
import type { IConfirmEmail } from '@tic-tac-toe/shared';
import { InputText, InputGroup, Button, Spinner, Container } from '@primitives';
import { enLocal } from '@locals';
import { userConfirmEmailSchema } from '@validation';
import { useAppSelector, useAppDispatch } from '@hooks';
import { proveEmail } from '@store';
import * as styles from './styles';

export const ProveEmail = () => {
  const loading = useAppSelector((state) => state.auth.loading);
  const dispatch = useAppDispatch();
  const { state } = useLocation();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<IConfirmEmail>({
    defaultValues: {
      email: state ? state : '',
      tokenEmail: '',
    },
    resolver: joiResolver(userConfirmEmailSchema),
  });

  const onConfirmHandle: SubmitHandler<IConfirmEmail> = (data) => {
    dispatch(proveEmail(data));
  };

  return (
    <Container type="centered">
      <div css={styles.confirm}>
        <div css={styles.instructionWrapper}>
          <h1 css={styles.header}>
            {enLocal.forms.confirmEmail.textContent.header}
          </h1>
          <span css={styles.instructionHeader}>
            {enLocal.forms.confirmEmail.textContent.instructionHeader}
          </span>
          <span css={styles.instruction}>
            {enLocal.forms.confirmEmail.textContent.instruction}
          </span>
        </div>

        <form onSubmit={handleSubmit(onConfirmHandle)}>
          <div css={styles.row}>
            <InputText
              {...register('email')}
              id="confirmEmail"
              label={enLocal.forms.confirmEmail.email.label}
              placeholder={enLocal.forms.confirmEmail.email.placeholder}
              autoComplete="off"
              error={errors.email?.message}
            />
          </div>

          <div css={styles.row}>
            <InputGroup
              size={6}
              label={enLocal.forms.confirmEmail.code}
              setValue={setValue}
              clearErrors={clearErrors}
              keyValue="tokenEmail"
              error={errors.tokenEmail?.message}
            />
          </div>

          <div css={styles.row}>
            <Button type="submit" variant="form" disabled={loading}>
              {loading ? <Spinner /> : enLocal.forms.confirmEmail.submit}
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};
