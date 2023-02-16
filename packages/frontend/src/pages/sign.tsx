import { Outlet } from 'react-router-dom';
import { Container } from '@primitives';
import { MainLayout, SignLayout } from '@components/layout';

const Sign = () => (
  <Container type="centered">
    <SignLayout>
      <Outlet />
    </SignLayout>
  </Container>
);

export const SignPage = () => (
  <MainLayout title="Sign">
    <Sign />
  </MainLayout>
);
