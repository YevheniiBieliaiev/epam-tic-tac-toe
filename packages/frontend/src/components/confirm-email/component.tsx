import { useForm, type SubmitHandler, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useLocation } from 'react-router-dom';
import type { IConfirmEmail } from '@tic-tac-toe/shared';
import {
  PageTitle,
  InputText,
  InputGroup,
  Button,
  Spinner,
  Container,
} from '@primitives';
import { PageTitles } from '@enums';
import { enLocal } from '@locals';
import { userConfirmEmailSchema } from '@validation';
import { useAppSelector, useAppDispatch } from '@hooks';
import { proveEmail } from '@store';
import { authLoader } from '@selectors';
import * as styles from './styles';

export const ProveEmail = () => {
  const loading = useAppSelector(authLoader);
  const dispatch = useAppDispatch();
  const { state } = useLocation();

  const methods = useForm<IConfirmEmail>({
    defaultValues: {
      email: state ? state : '',
      tokenEmail: '',
    },
    resolver: joiResolver(userConfirmEmailSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onConfirmHandle: SubmitHandler<IConfirmEmail> = (data) => {
    dispatch(proveEmail(data));
  };

  return (
    <PageTitle title={PageTitles.CONFIRM_EMAIL}>
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
          <FormProvider {...methods}>
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
                  keyValue="tokenEmail"
                />
              </div>

              <div css={styles.row}>
                <Button type="submit" variant="form" disabled={loading}>
                  {loading ? <Spinner /> : enLocal.forms.confirmEmail.submit}
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </Container>
    </PageTitle>
  );
};
