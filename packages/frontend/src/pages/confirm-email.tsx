import { lazy } from 'react';

export const ConfirmEmailPage = lazy(() =>
  import('../components/confirm-email').then(({ ProveEmail }) => ({
    default: ProveEmail,
  })),
);
