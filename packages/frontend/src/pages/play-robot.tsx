import { MainLayout } from '@components/layout';
import { GameVsBot } from '@components/game-vs-robot';

export const PlayRobotPage = () => (
  <MainLayout title="Game">
    <GameVsBot />
  </MainLayout>
);
