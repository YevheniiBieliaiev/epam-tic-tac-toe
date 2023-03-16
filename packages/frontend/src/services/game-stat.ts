import type { IGameBotStat } from '@tic-tac-toe/shared';
import { ApiRoutes, GameStatSubRoutes } from '@tic-tac-toe/shared';
import { http } from '@helpers';

export const getBotStat = (): Promise<IGameBotStat> =>
  http.get({
    url: `${ApiRoutes.GAME_STAT}${GameStatSubRoutes.BOT_STAT}`,
    headers: {
      needAuth: true,
    },
  });

export const updateBotStat = (data: IGameBotStat): Promise<IGameBotStat> =>
  http.put({
    url: `${ApiRoutes.GAME_STAT}${GameStatSubRoutes.UPDATE_BOT_STAT}`,
    body: { ...data },
    headers: {
      needAuth: true,
    },
  });
