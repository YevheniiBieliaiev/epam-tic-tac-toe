import { lazy } from 'react';

export const ResetPasswordPage = lazy(() =>
  import('../components/reset-password').then(({ ResetPassword }) => ({
    default: ResetPassword,
  })),
);
