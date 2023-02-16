import type { ButtonProps } from './types';
import * as styles from './styles';

export const Button = ({
  type = 'button',
  contrast = 'primary',
  variant = 'standart',
  size = 'sm',
  onClick,
  children,
  ...props
}: ButtonProps) => (
  <button
    css={styles.button}
    type={type}
    data-contrast={contrast}
    data-variant={variant}
    data-size={size}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);
