import { useForm, type SubmitHandler, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import type { IEmailVerification } from '@tic-tac-toe/shared';
import { InputGroup, Button, Spinner } from '@primitives';
import { useAppDispatch, useAppSelector } from '@hooks';
import { confirmEmail } from '@store';
import { loader } from '@selectors';
import { enLocal } from '@locals';
import { profileEmailTokenSchema } from '@validation';
import * as styles from '../styles';

export const EmailToken = () => {
  const loading = useAppSelector(loader);
  const dispatch = useAppDispatch();

  const methods = useForm<IEmailVerification>({
    defaultValues: {
      tokenEmail: '',
    },
    resolver: joiResolver(profileEmailTokenSchema),
  });

  const { handleSubmit } = methods;

  const onSubmitHandler: SubmitHandler<IEmailVerification> = (data) => {
    dispatch(confirmEmail(data));
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div css={styles.inputRow}>
            <InputGroup
              size={6}
              label={enLocal.forms.confirmEmail.code}
              keyValue="tokenEmail"
            />
          </div>

          <div css={styles.submitRow}>
            <div css={styles.submitInner}>
              <Button type="submit" disabled={loading}>
                {loading ? <Spinner /> : enLocal.profile.confirmEmail}
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
