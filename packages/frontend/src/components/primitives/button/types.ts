import type { Interpolation, Theme } from '@emotion/react';
import type { TElementSizes } from '@types';

type ButtonContrast = 'primary' | 'light' | 'secondary';
type ButtonVariant = 'form' | 'standart' | 'secondary';

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'> {
  type?: 'button' | 'submit' | 'reset';
  contrast?: ButtonContrast;
  variant?: ButtonVariant;
  size?: TElementSizes;
  cssExtension?: Interpolation<Theme>;
}
