export interface GameCellsProps {
  buttons: string[];
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}
