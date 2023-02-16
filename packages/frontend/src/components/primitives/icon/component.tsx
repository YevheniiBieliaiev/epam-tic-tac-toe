import * as iconsSVG from '@svg-icons';
import type { SVGIconProps } from './types';
import * as styles from './styles';

export const SVGIcon = ({ icon, size = 'sm', cssExtension }: SVGIconProps) => (
  <span css={[styles.iconWrapper, cssExtension]}>
    <img css={styles.icon} src={iconsSVG[icon]} data-size={size} alt="icon" />
  </span>
);
