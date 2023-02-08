import type { Interpolation } from '@emotion/react';
import { type Theme } from '@emotion/react';
import type { ReactNode } from 'react';

export interface ContainserProps {
  children: ReactNode;
  cssExtention?: Interpolation<Theme>;
}
