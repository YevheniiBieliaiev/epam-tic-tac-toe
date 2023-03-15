export interface SquareProps {
  id: string;
  value: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}
