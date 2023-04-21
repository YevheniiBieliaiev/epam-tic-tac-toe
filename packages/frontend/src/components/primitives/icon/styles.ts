import { css, type Theme } from '@emotion/react';

export const iconWrapper = ({ spaces }: Theme) => css`
  margin-right: ${spaces.xs};
`;

export const icon = ({ widths, heights }: Theme) => css`
  display: block;

  &[data-size='xxs'] {
    height: ${heights.xxsIcon};
    width: ${widths.xxsIcon};
  }

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

  &[data-size='lg'] {
    height: ${heights.lgIcon};
    width: ${widths.lgIcon};
  }

  &[data-size='xl'] {
    height: ${heights.xlIcon};
    width: ${widths.xlIcon};
  }
`;
