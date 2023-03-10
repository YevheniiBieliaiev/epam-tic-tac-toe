import type { ReactNode } from 'react';

export interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  withHeader?: boolean;
  withFooter?: boolean;
}

export interface SignLayoutProps {
  children: ReactNode;
}

export interface DefineLocation {
  signin: boolean;
  signup: boolean;
  resetEmail: boolean;
}

export interface BoardLayoutProps {
  children: ReactNode;
}
