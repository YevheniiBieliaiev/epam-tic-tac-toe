import type { ReactNode } from 'react';

type Contrast = 'primary' | 'dark';

export interface PageHeadingProps {
  children: ReactNode;
}

export interface SecondaryHeadingProps {
  children: ReactNode;
  contrast?: Contrast;
}
