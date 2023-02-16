import type { ContainserProps } from './types';
import * as styles from './styles';

export const Container = ({
  children,
  cssExtention,
  type,
}: ContainserProps) => (
  <div css={[styles.container, cssExtention]} data-type={type}>
    {children}
  </div>
);
