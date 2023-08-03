import { useState, useEffect, useRef } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import type { INewPassword } from '@interfaces';
import {
  Button,
  InputText,
  PasswordTips,
  Spinner,
  InternalLink,
} from '@primitives';
import { profilePasswordSchema } from '@validation';
import { enLocal } from '@locals';
import { ClientRoutes } from '@enums';
import { useAppDispatch, useAppSelector } from '@hooks';
import { setNewPassword } from '@store';
import { loader, passwordUpdDate } from '@selectors';
import { checkPassword } from '@helpers';
import { EditedField } from './edited-field';
import * as styles from './styles';

export const ProfilePassword = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const inputFocusedRef = useRef<boolean>(false);
  const loading = useAppSelector(loader);
  const passwordUpdatedAt = useAppSelector(passwordUpdDate);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<INewPassword>({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    resolver: joiResolver(profilePasswordSchema),
  });

  const password = watch('newPassword');

  const onSetEditHandler = () => {
    setIsEdit((prev) => !prev);
    reset();
  };

  useEffect(() => {
    setIsEdit((prev) => !prev);
    reset();
  }, [passwordUpdatedAt, reset]);

  const onSubmitHandler: SubmitHandler<INewPassword> = (data) => {
    dispatch(
      setNewPassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
        passwordUpdatedAt: new Date(),
      }),
    );
  };

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

  return (
    <EditedField
      label={enLocal.profile.password.header}
      isEdit={isEdit}
      onClick={onSetEditHandler}
    >
      {isEdit ? (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div css={[styles.inputRow, styles.inputPassword]}>
            <InputText
              {...register('currentPassword')}
              id="currentPassword"
              label={enLocal.profile.password.currentPassword.label}
              placeholder={enLocal.profile.password.currentPassword.placeholder}
              error={errors.currentPassword?.message}
              isPassword={true}
              autoComplete="off"
              onCut={onCutHandler}
              onCopy={onCopyHandler}
              onPaste={onPastHandler}
            />

            <div css={styles.resetLink}>
              <InternalLink
                path={ClientRoutes.RESET_PASSWORD_EMAIL}
                label={enLocal.forms.signin.resetPassword}
                contrast="secondary"
                txtSize="md"
              />
            </div>
          </div>

          <div css={[styles.inputRow, styles.inputPassword]}>
            <InputText
              {...register('newPassword')}
              id="newPassword"
              label={enLocal.profile.password.newPassword.label}
              placeholder={enLocal.profile.password.newPassword.placeholder}
              error={errors.newPassword?.message}
              isPassword={true}
              autoComplete="new-password"
              onFocus={onFocuse}
              onCut={onCutHandler}
              onCopy={onCopyHandler}
              onPaste={onPastHandler}
            />
          </div>

          <div css={[styles.inputRow, styles.inputPassword]}>
            <InputText
              {...register('confirmPassword')}
              id="confirmNewPassword"
              label={enLocal.profile.password.confirmPassword.label}
              placeholder={enLocal.profile.password.confirmPassword.placeholder}
              error={errors.confirmPassword?.message}
              isPassword={true}
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

          <div css={styles.submitRow}>
            <div css={styles.submitInner}>
              <Button type="submit" disabled={loading}>
                {loading ? <Spinner /> : enLocal.profile.submit}
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <span css={styles.updatingDate}>{passwordUpdatedAt}</span>
      )}
    </EditedField>
  );
};
