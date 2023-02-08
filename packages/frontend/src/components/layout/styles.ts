import { css, type Theme } from '@emotion/react';

//calculation of height: height(100vh) - height of header - height of footer

export const main = ({ widths, spaces }: Theme) => css`
  position: relative;
  margin: auto;
  max-width: ${widths.mainLayout};
  min-height: calc(100vh - 104px - 140px);
  padding: 0 ${spaces.sm};
`;
