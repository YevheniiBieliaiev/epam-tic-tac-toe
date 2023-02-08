import type { ReactNode } from 'react';

export interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  withHeader?: boolean;
  withFooter?: boolean;
}
