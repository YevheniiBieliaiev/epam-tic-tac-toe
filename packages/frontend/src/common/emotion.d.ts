import type { lightTheme } from '../theme';

declare module '@emotion/react' {
  type GlobalTheme = typeof lightTheme;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends GlobalTheme {}
  export const useTheme: () => Theme;
}
