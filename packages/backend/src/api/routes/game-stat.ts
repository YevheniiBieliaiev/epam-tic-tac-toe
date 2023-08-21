import { Router } from 'express';
import type { ApiRoutes, IGameBotStat } from '@tic-tac-toe/shared';
import { GameStatSubRoutes } from '@tic-tac-toe/shared';
import type { InitServices } from '@services';
import { apiPath } from '@helpers';
import { requestWrapper, auth } from '@middlewares';

export const initGameStatRouter = (
  { gameStatServices }: InitServices,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.get(
    apiPath(path, GameStatSubRoutes.BOT_STAT),
    auth,
    requestWrapper(async (req): Promise<IGameBotStat> => {
      const { userId } = req;

      return await gameStatServices.getBotStat({ userId });
    }),
  );

  router.put(
    apiPath(path, GameStatSubRoutes.UPDATE_BOT_STAT),
    auth,
    requestWrapper(async (req): Promise<IGameBotStat> => {
      const { userId } = req;
      const botStat = <IGameBotStat>req.body;

      return await gameStatServices.updateBotScore({ userId, ...botStat });
    }),
  );

  return router;
};
