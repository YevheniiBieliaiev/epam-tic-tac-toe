import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks';
import { getUserProfile } from '@store';
import { enLocal } from '@locals';
import {
  ProfileAvatar,
  ProfileNickname,
  ProfileEmail,
  ProfilePassword,
  Logout,
} from './child-components';
import * as styles from './styles';

export const UserInfo = () => {
  const dispatch = useAppDispatch();
  const profileLoader = useAppSelector((state) => state.profile.profileLoader);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  //!TODO: App Spinner
  if (profileLoader) {
    return <div style={{ fontSize: '42px', fontWeight: 800 }}>Loading...</div>;
  }

  return (
    <div>
      <div>
        <span>{enLocal.profile.rating.header}</span>
      </div>

      <div css={styles.row}>
        <ProfileAvatar />
      </div>

      <div css={styles.row}>
        <ProfileNickname />
      </div>

      <div css={styles.row}>
        <ProfileEmail />
      </div>

      <div css={styles.row}>
        <ProfilePassword />
      </div>

      <div css={styles.row}>
        <Logout />
      </div>
    </div>
  );
};
