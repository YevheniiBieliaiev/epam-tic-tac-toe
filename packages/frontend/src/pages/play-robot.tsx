import { lazy } from 'react';

export const PlayRobotPage = lazy(() =>
  import('../components/game-vs-robot').then(({ GameVsBot }) => ({
    default: GameVsBot,
  })),
);
