import type { ChosenSymbol } from '@types';

export interface SquareProps {
  id: string;
  value: ChosenSymbol;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}
