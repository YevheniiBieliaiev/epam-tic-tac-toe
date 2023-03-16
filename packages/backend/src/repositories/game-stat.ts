import type { PrismaClient } from '@prisma/client';
import type { IGameBotStat, IGameUserStat } from '@tic-tac-toe/shared';
import type { IUpdGameBotStat, IUpdGameUserStat } from '@interfaces';

export class GameStatRepository {
  private _dbClient: PrismaClient;

  constructor({ prismaClient }: { prismaClient: PrismaClient }) {
    this._dbClient = prismaClient;
  }

  public getBotStat({ userId }: { userId: string }): Promise<IGameBotStat> {
    return this._dbClient.gameBotStat.findUnique({
      where: {
        userId,
      },
      select: {
        won: true,
        draw: true,
        robotWon: true,
      },
    });
  }

  public getUserStat({ userId }: { userId: string }): Promise<IGameUserStat> {
    return this._dbClient.gameUserStat.findUnique({
      where: {
        userId,
      },
      select: {
        won: true,
        draw: true,
        lose: true,
      },
    });
  }

  public updateBotScore({
    userId,
    won,
    draw,
    robotWon,
  }: IUpdGameBotStat): Promise<IGameBotStat> {
    return this._dbClient.gameBotStat.update({
      where: { userId },
      data: { won, draw, robotWon },
      select: { won: true, draw: true, robotWon: true },
    });
  }

  public updateUserScore({
    userId,
    won,
    draw,
    lose,
  }: IUpdGameUserStat): Promise<IGameUserStat> {
    return this._dbClient.gameUserStat.update({
      where: { userId },
      data: { won, draw, lose },
      select: { won: true, draw: true, lose: true },
    });
  }
}
