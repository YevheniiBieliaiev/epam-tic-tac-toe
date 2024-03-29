import { Link } from 'react-router-dom';
import { SVGIcon } from '@primitives';
import type { InternalLinkProps } from './types';
import * as styles from './styles';

export const InternalLink = ({
  path,
  label,
  contrast = 'dark',
  txtSize = 'lg',
  icon,
  iconSize,
  isInactive = false,
  cssExtension,
}: InternalLinkProps) => (
  <Link css={styles.link} to={path}>
    {icon && <SVGIcon icon={icon} size={iconSize} />}
    {label && (
      <span
        css={[styles.linkLabel, cssExtension]}
        data-color={contrast}
        data-size={txtSize}
        data-active={isInactive && 'inactive'}
      >
        {label}
      </span>
    )}
  </Link>
);
