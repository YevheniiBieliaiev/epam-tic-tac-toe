import { useState } from 'react';
import { Avatar } from '@primitives';
import { useAppSelector } from '@hooks';
import { user } from '@selectors';
import { enLocal } from '@locals';
import { EditedField } from './edited-field';

export const ProfileAvatar = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { nickname, avatar } = useAppSelector(user);

  const onSetEditHandler = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <EditedField
      label={enLocal.profile.photo.header}
      isEdit={isEdit}
      onClick={onSetEditHandler}
    >
      <Avatar src={avatar} nickname={nickname} />
    </EditedField>
  );
};
