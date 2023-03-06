import { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button, SVGIcon, InputText, Spinner } from '@primitives';
import type { INewNickname } from '@interfaces';
import { profileNicknameSchema } from '@validation';
import { enLocal } from '@locals';
import { useAppDispatch, useAppSelector } from '@hooks';
import { changeNickname } from '@store';
import { userNickname, loader } from '@selectors';
import * as styles from './styles';

export const ProfileNickname = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const nickname = useAppSelector(userNickname);
  const loading = useAppSelector(loader);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewNickname>({
    defaultValues: {
      nickname,
    },
    resolver: joiResolver(profileNicknameSchema),
  });

  useEffect(() => {
    setIsEdit((prev) => !prev);
  }, [nickname]);

  const onSetEditHandler = () => {
    setIsEdit((prev) => !prev);
  };

  const onSubmitHandler: SubmitHandler<INewNickname> = (data) => {
    dispatch(changeNickname(data));
  };

  return (
    <div css={styles.block}>
      <div css={styles.blockInner}>
        <div css={styles.blockHeader}>
          <span css={styles.header}>{enLocal.profile.nickname.header}</span>

          <Button
            type="button"
            contrast="secondary"
            size="xxs"
            onClick={onSetEditHandler}
          >
            <span css={styles.edit}>
              {isEdit
                ? enLocal.profile.editButton.cancel
                : enLocal.profile.editButton.edit}
            </span>

            <SVGIcon
              icon={isEdit ? 'xCloseSecondary' : 'pencil'}
              size="xxs"
              cssExtension={styles.editIcon}
            />
          </Button>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div css={styles.inputRow}>
              <InputText
                {...register('nickname')}
                id="profileNickname"
                placeholder={enLocal.forms.signup.nickname.placeholder}
                error={errors.nickname?.message}
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
        </div>
      </div>
    </div>
  );
};
