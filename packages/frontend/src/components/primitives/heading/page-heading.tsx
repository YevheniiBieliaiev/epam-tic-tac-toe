import type { PageHeadingProps } from './types';
import * as styles from './styles';

export const PageHeading = ({ children }: PageHeadingProps) => (
  <h1 css={styles.pageHeading}>{children}</h1>
);
