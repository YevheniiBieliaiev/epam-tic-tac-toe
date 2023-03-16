import type { IGameBotStat, IGameUserStat } from '@tic-tac-toe/shared';
import type { GameStatRepository } from '@repositories';
import type { IUpdGameBotStat, IUpdGameUserStat } from '@interfaces';

export class GameStatServices {
  private _gameStatRepository: GameStatRepository;

  constructor({
    gameStatRepository,
  }: {
    gameStatRepository: GameStatRepository;
  }) {
    this._gameStatRepository = gameStatRepository;
  }

  public getBotStat({ userId }: { userId: string }): Promise<IGameBotStat> {
    return this._gameStatRepository.getBotStat({ userId });
  }

  public getUserStat({ userId }: { userId: string }): Promise<IGameUserStat> {
    return this._gameStatRepository.getUserStat({ userId });
  }

  public updateBotScore({
    userId,
    won,
    drow,
    robotWon,
  }: IUpdGameBotStat): Promise<IGameBotStat> {
    return this._gameStatRepository.updateBotScore({
      userId,
      won,
      drow,
      robotWon,
    });
  }

  public updateUserScore({
    userId,
    won,
    drow,
    lose,
  }: IUpdGameUserStat): Promise<IGameUserStat> {
    return this._gameStatRepository.updateUserScore({
      userId,
      won,
      drow,
      lose,
    });
  }
}
