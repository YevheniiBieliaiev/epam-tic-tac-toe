import * as iconsSVG from '@svg-icons';
import type { SVGIconProps } from './types';
import * as styles from './styles';

export const SVGIcon = ({ icon, size = 'sm' }: SVGIconProps) => (
  <span css={styles.iconWrapper}>
    <img css={styles.icon} src={iconsSVG[icon]} data-size={size} alt="icon" />
  </span>
);
