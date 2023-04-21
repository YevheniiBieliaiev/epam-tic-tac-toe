import { SVGIcon } from '@primitives';
import type { SquareProps } from './types';
import * as styles from './styles';

export const Square = ({ id, value, onClick }: SquareProps) => (
  <button
    css={styles.square}
    type="button"
    id={id}
    value={value}
    onClick={onClick}
  >
    {value === 'X' ? (
      <SVGIcon icon="gameSymbol_X" size="xl" cssExtension={styles.gameSymbol} />
    ) : value === 'O' ? (
      <SVGIcon icon="gameSymbol_O" size="xl" cssExtension={styles.gameSymbol} />
    ) : (
      value
    )}
  </button>
);
