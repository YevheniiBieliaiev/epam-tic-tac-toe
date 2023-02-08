import type { ContainserProps } from './types';
import * as styles from './styles';

export const Container = ({ children, cssExtention }: ContainserProps) => (
  <div css={[styles.container, cssExtention]}>{children}</div>
);
