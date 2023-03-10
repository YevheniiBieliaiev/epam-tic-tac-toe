import { Link } from 'react-router-dom';
import { SVGIcon } from '@primitives';
import type { ButtonInternalProps } from './types';
import * as styles from './styles';

export const ButtonInternal = ({
  path,
  label,
  type,
  txtSize = 'md',
  icon,
  iconSize,
  cssExtension,
}: ButtonInternalProps) => (
  <Link
    css={[styles.buttonLink, cssExtension]}
    to={path}
    data-type={type}
    data-size={txtSize}
  >
    {icon && <SVGIcon icon={icon} size={iconSize} />}
    {label && <span>{label}</span>}
  </Link>
);
