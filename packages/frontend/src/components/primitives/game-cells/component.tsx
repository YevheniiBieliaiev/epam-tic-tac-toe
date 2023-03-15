import { Square } from '@primitives';
import type { GameCellsProps } from './types';
import * as styles from './styles';

export const GameCells = ({ buttons, onClick }: GameCellsProps) => (
  <div css={styles.gameBoard}>
    {buttons.map((value, id) => (
      <Square key={'bg' + id} id={'bg' + id} value={value} onClick={onClick} />
    ))}
  </div>
);
