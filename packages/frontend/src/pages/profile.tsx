import { MainLayout } from '@components/layout';
import { UserInfo } from '@components/profile';

const Profile = () => <UserInfo />;

export const ProfilePage = () => (
  <MainLayout title="Profile">
    <Profile />
  </MainLayout>
);
