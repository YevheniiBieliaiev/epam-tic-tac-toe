import type { TElementSizes, TIconsSVG } from '@types';
import type { ClientRoutes } from '@enums';

type Contrast = 'light' | 'dark' | 'secondary';

type ButtonContrast = 'primary';

export interface InternalLinkProps {
  path: ClientRoutes;
  label?: string;
  contrast?: Contrast;
  txtSize?: TElementSizes;
  icon?: TIconsSVG;
  iconSize?: TElementSizes;
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
  path: ClientRoutes;
  label: string;
  type: ButtonContrast;
  icon?: TIconsSVG;
  iconSize?: TElementSizes;
}
