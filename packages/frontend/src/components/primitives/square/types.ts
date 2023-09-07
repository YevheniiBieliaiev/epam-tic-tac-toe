import type { BoardSymbols } from '@tic-tac-toe/shared';

export interface SquareProps {
  id: string;
  value: BoardSymbols;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}
