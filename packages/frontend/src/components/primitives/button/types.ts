import type { TElementSizes } from '@types';

type ButtonContrast = 'primary' | 'light';
type ButtonVariant = 'form' | 'standart';

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'> {
  type?: 'button' | 'submit' | 'reset';
  contrast?: ButtonContrast;
  variant?: ButtonVariant;
  size?: TElementSizes;
}
