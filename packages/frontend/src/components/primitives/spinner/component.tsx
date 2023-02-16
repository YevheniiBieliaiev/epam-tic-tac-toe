import type { SpinnerProps } from './types';
import * as styles from './styles';

export const Spinner = ({ size = 'sm', contrast = 'light' }: SpinnerProps) => (
  <div css={styles.spinner} data-size={size} data-contrast={contrast}></div>
);
