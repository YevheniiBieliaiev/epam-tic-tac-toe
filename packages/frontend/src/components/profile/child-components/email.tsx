import { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button, InputText, Spinner } from '@primitives';
import type { INewEmail } from '@interfaces';
import { profileEmailSchema } from '@validation';
import { enLocal } from '@locals';
import { useAppDispatch, useAppSelector } from '@hooks';
import { changeEmail } from '@store';
import { profileEmail } from '@selectors';
import { EditedField } from './edited-field';
import { EmailToken } from './sub-component';
import * as styles from './styles';

export const ProfileEmail = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { loading, email, isActive } = useAppSelector(profileEmail);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewEmail>({
    defaultValues: {
      email,
    },
    resolver: joiResolver(profileEmailSchema),
  });

  useEffect(() => {
    setIsEdit((prev) => !prev);
  }, [email]);

  const onSetEditHandler = () => {
    setIsEdit((prev) => !prev);
  };

  const onSubmitHandler: SubmitHandler<INewEmail> = (data) => {
    dispatch(changeEmail(data));
  };

  return (
    <EditedField
      label={enLocal.profile.emailAddress.header}
      isEdit={isEdit}
      onClick={onSetEditHandler}
    >
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div css={styles.inputRow}>
          <InputText
            {...register('email')}
            id="profileEmail"
            placeholder={enLocal.forms.signup.email.placeholder}
            error={errors.email?.message}
            disabled={!isEdit}
          />
        </div>

        {isEdit && (
          <div css={styles.submitRow}>
            <div css={styles.submitInner}>
              <Button type="submit" disabled={loading}>
                {loading ? <Spinner /> : enLocal.profile.submit}
              </Button>
            </div>
          </div>
        )}
      </form>
      {!isActive && <EmailToken />}
    </EditedField>
  );
};
