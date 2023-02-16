import type { TElementSizes } from '@types';

type Contrast = 'primary' | 'light';

export interface SpinnerProps {
  size?: TElementSizes;
  contrast?: Contrast;
}
