import { lazy } from 'react';

export const ProfilePage = lazy(() =>
  import('../components/profile').then(({ UserInfo }) => ({
    default: UserInfo,
  })),
);
