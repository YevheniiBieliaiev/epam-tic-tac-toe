import { useEffect } from 'react';
import { PageTitle, AppSpinner } from '@primitives';
import { PageTitles } from '@enums';
import { useAppDispatch, useAppSelector } from '@hooks';
import { getUserProfile } from '@store';
import { profileLoading } from '@selectors';
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
  const profileLoader = useAppSelector(profileLoading);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  if (profileLoader) {
    return <AppSpinner />;
  }

  return (
    <PageTitle title={PageTitles.PROFILE}>
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
    </PageTitle>
  );
};
