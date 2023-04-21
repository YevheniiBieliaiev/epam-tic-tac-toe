import type { Interpolation, Theme } from '@emotion/react';
import type { TElementSizes, TIconsSVG } from '@types';

type Contrast = 'light' | 'dark' | 'secondary';

export interface InternalLinkProps {
  path: string;
  label?: string;
  contrast?: Contrast;
  txtSize?: TElementSizes;
  icon?: TIconsSVG;
  iconSize?: TElementSizes;
  isInactive?: boolean;
  cssExtension?: Interpolation<Theme>;
}

export interface ExternalLinkProps {
  href: string;
  label?: string;
  contrast?: Contrast;
  txtSize?: TElementSizes;
  icon?: TIconsSVG;
  iconSize?: TElementSizes;
}

export interface ButtonInternalProps {
  path: string;
  label: string;
  type: Contrast;
  txtSize?: TElementSizes;
  icon?: TIconsSVG;
  iconSize?: TElementSizes;
  cssExtension?: Interpolation<Theme>;
}
