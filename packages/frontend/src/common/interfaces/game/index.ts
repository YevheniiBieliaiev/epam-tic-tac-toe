import type { Levels, GameResult } from '@types';
import type { OpponentSymbol, BoardSymbols } from '@tic-tac-toe/shared';

export interface BotGameState {
  level: Levels;
  userSymbol: OpponentSymbol;
  botSymbol: OpponentSymbol;
  buttons: BoardSymbols[];
  disabled: boolean;
  turn: boolean;
  winner: GameResult;
}

export interface ModeResult {
  buttons: BoardSymbols[];
  userTurn: boolean;
}
