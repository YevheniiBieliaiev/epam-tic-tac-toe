import * as iconSVG from '@svg-icons';
import type { Contrast } from './types';

export const setLogoColor = (contrast: Contrast): string =>
  contrast === 'dark' ? iconSVG.logoPrimary : iconSVG.logoLight;
