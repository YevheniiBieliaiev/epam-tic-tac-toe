import { Link } from 'react-router-dom';
import { SVGIcon } from '@primitives';
import type { ButtonInternalProps } from './types';
import * as styles from './styles';

export const ButtonInternal = ({
  path,
  label,
  type,
  icon,
  iconSize,
}: ButtonInternalProps) => (
  <Link css={styles.buttonLink} to={path} data-type={type}>
    {icon && <SVGIcon icon={icon} size={iconSize} />}
    {label && <span>{label}</span>}
  </Link>
);
