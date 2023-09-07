import type { BoardSymbols } from '@tic-tac-toe/shared';

export interface GameCellsProps {
  buttons: BoardSymbols[];
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}
