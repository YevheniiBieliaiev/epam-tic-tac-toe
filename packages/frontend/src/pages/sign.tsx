import { Link } from 'react-router-dom';
import { MainLayout } from '@components/layout';

const Sign = () => (
  <div>
    Sign Page
    <Link to="/terms">Terms</Link>
  </div>
);

export const SignPage = () => (
  <MainLayout>
    <Sign />
  </MainLayout>
);
