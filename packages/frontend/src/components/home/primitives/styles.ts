import { css, type Theme } from '@emotion/react';

export const square = ({
  widths,
  heights,
  colors,
  radiuses,
  borders,
  minMq,
}: Theme) => css`
  background: ${colors.homeBoardCell};
  border-radius: ${radiuses.xs};
  border-bottom: ${borders.homeBoardCell};
  width: ${widths.square.sm};
  height: ${heights.square.sm};

  ${minMq('lg')} {
    width: ${widths.square.lg};
    height: ${heights.square.lg};
  }
`;
