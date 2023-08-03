import { lazy } from 'react';

export const HomePage = lazy(() =>
  import('../components/home').then(({ HomeContent }) => ({
    default: HomeContent,
  })),
);
