import { lazy } from 'react';

export const TermsPage = lazy(() =>
  import('../components/terms').then(({ TermsContent }) => ({
    default: TermsContent,
  })),
);
