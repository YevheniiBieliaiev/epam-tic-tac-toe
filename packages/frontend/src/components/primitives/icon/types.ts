import type { Interpolation, Theme } from '@emotion/react';
import type { TIconsSVG, TElementSizes } from '@types';

export interface SVGIconProps {
  icon: TIconsSVG;
  size?: TElementSizes;
  cssExtension?: Interpolation<Theme>;
}
