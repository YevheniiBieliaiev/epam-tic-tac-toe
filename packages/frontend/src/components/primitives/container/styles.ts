import { css, type Theme } from '@emotion/react';

export const container = ({ widths }: Theme) => css`
  max-width: ${widths.pageContent};

  &[data-type='centered'] {
    display: flex;
    justify-content: center;
  }
`;
