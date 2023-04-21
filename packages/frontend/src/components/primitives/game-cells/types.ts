import type { ChosenSymbol } from '@types';

export interface GameCellsProps {
  buttons: ChosenSymbol[];
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}
