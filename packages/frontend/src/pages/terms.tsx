import { TermsContent } from '@components/terms';
import { MainLayout } from '@components/layout';

const Terms = () => <TermsContent />;

export const TermsPage = () => (
  <MainLayout title="Terms">
    <Terms />
  </MainLayout>
);
