import { SVGIcon } from '@primitives';
import type { IconButtonProps } from './types';
import * as styles from './styles';

export const IconButton = ({
  icon,
  type = 'button',
  size = 'sm',
  cssExtension,
  ...props
}: IconButtonProps) => (
  <button css={[styles.iconButton, cssExtension]} type={type} {...props}>
    <SVGIcon icon={icon} size={size} cssExtension={styles.icon} />
  </button>
);
