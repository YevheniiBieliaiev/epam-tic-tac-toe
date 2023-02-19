import { MainLayout } from '@components/layout';
import { ProveEmail } from '@components/confirm-email';

const ConfirmEmail = () => <ProveEmail />;

export const ConfirmEmailPage = () => (
  <MainLayout>
    <ConfirmEmail />
  </MainLayout>
);
