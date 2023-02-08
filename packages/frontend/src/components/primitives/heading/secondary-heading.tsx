import type { SecondaryHeadingProps } from './types';
import * as styles from './styles';

export const SecondaryHeading = ({
  children,
  contrast = 'primary',
}: SecondaryHeadingProps) => (
  <h2 css={styles.secondaryHeading} data-color={contrast}>
    {children}
  </h2>
);
