import type { BoardSymbols } from '@tic-tac-toe/shared';
import type { GameResult } from '@types';

export interface RestartProps {
  winner: GameResult;
}

export interface CheckWinProps {
  buttons: BoardSymbols[];
}
