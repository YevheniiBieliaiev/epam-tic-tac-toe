import type { SquareProps } from './types';
import * as styles from './styles';

export const Square = ({ id, value, onClick }: SquareProps) => (
  <button
    css={styles.square}
    type="button"
    id={id}
    value={value}
    onClick={onClick}
  ></button>
);
