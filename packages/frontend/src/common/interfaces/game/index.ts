import type { Levels, ChosenSymbol, GameResult } from '@types';

export interface BotGameState {
  level: Levels;
  userSymbol: ChosenSymbol;
  botSymbol: 'X' | 'O';
  buttons: ChosenSymbol[];
  disabled: boolean;
  turn: boolean;
  winner: GameResult;
}

export interface ModeResult {
  buttons: ChosenSymbol[];
  userTurn: boolean;
}
