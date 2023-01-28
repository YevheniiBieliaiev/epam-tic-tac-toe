import { type ReactNode, useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';

import { lightTheme, globalStyles } from '@theme';

interface IThemeProvider {
  children: ReactNode;
}

const colorSchema = {
  light: lightTheme,
};

export const AppThemeProvider = ({
  children,
}: IThemeProvider): EmotionJSX.Element => {
  const [theme] = useState(colorSchema['light']);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};
