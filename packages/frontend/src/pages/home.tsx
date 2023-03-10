import { MainLayout } from '@components/layout';
import { HomeContent } from '@components/home';

const Home = () => <HomeContent />;

export const HomePage = () => (
  <MainLayout>
    <Home />
  </MainLayout>
);
