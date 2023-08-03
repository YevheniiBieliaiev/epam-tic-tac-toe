import type { ReactNode } from 'react';

export interface MainLayoutProps {
  withHeader?: boolean;
  withFooter?: boolean;
}

export interface DefineLocation {
  signin: boolean;
  signup: boolean;
  resetEmail: boolean;
}

export interface BoardLayoutProps {
  children: ReactNode;
}
