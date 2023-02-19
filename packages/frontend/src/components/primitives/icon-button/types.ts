import type { Interpolation, Theme } from '@emotion/react';
import type { TIconsSVG, TElementSizes } from '@types';

export interface IconButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'> {
  type?: 'button' | 'submit' | 'reset';
  icon: TIconsSVG;
  size?: TElementSizes;
  cssExtension?: Interpolation<Theme>;
}
