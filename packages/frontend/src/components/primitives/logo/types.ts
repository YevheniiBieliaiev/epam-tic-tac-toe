import type { TElementSizes } from '@types';

export type Contrast = 'dark' | 'light';

export interface LogoProps {
  size?: TElementSizes;
  contrast?: Contrast;
}
