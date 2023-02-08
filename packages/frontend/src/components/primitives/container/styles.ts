import { css, type Theme } from '@emotion/react';

export const container = ({ widths }: Theme) => css`
  max-width: ${widths.pageContent};
`;
