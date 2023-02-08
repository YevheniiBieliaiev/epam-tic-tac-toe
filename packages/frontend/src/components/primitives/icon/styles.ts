import { css, type Theme } from '@emotion/react';

export const iconWrapper = ({ spaces }: Theme) => css`
  margin-right: ${spaces.xs};
`;

export const icon = ({ widths, heights }: Theme) => css`
  display: block;

  &[data-size='xs'] {
    height: ${heights.xsIcon};
    width: ${widths.xsIcon};
  }

  &[data-size='sm'] {
    height: ${heights.smIcon};
    width: ${widths.smIcon};
  }

  &[data-size='md'] {
    height: ${heights.mdIcon};
    width: ${widths.mdIcon};
  }
`;
