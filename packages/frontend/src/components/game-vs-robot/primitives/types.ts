import type { GameResult } from '@types';
import type { ChosenSymbol } from '@types';

export interface RestartProps {
  winner: GameResult;
}

export interface CheckWinProps {
  buttons: ChosenSymbol[];
}
