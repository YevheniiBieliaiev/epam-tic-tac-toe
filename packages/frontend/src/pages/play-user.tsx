import { lazy } from 'react';

export const PlayUserPage = lazy(() =>
  import('../components/game-vs-user').then(({ GameVsUser }) => ({
    default: GameVsUser,
  })),
);
