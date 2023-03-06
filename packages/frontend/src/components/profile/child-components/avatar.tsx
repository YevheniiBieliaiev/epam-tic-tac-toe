import { useState } from 'react';
import { Button, SVGIcon, Avatar } from '@primitives';
import { useAppSelector } from '@hooks';
import { user } from '@selectors';
import { enLocal } from '@locals';
import * as styles from './styles';

export const ProfileAvatar = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { nickname, avatar } = useAppSelector(user);

  const onSetEditHandler = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <div css={styles.block}>
      <div css={styles.blockInner}>
        <div css={styles.blockHeader}>
          <span css={styles.header}>{enLocal.profile.photo.header}</span>

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
          <Avatar src={avatar} nickname={nickname} />
        </div>
      </div>
    </div>
  );
};
