import { lazy } from 'react';

export const SignInPage = lazy(() =>
  import('../components/sign').then(({ SignIn }) => ({ default: SignIn })),
);

export const SignUpPage = lazy(() =>
  import('../components/sign').then(({ SignUp }) => ({ default: SignUp })),
);

export const ResetPasswordEmailPage = lazy(() =>
  import('../components/sign').then(({ ResetPasswordEmail }) => ({
    default: ResetPasswordEmail,
  })),
);
