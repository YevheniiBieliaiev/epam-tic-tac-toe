import { css, type Theme } from '@emotion/react';

export const logo = ({ widths, heights }: Theme) => css`
  display: block;

  &[data-size='xs'] {
    width: ${widths.logoXs};
    height: ${heights.logoXs};
  }

  &[data-size='sm'] {
    width: ${widths.logoSm};
    height: ${heights.logoSm};
  }
`;
