import { css, type Theme } from '@emotion/react';

export const ulList = ({
  spaces,
  widths,
  heights,
  radiuses,
  colors,
}: Theme) => css`
  position: relative;
  padding-left: ${spaces.md};

  &[data-mark='filled circle'] {
    &::before {
      content: '';
      position: absolute;
      top: calc(50% - ${heights.markCircle} / 2);
      left: calc(${spaces.md} / 2 - ${widths.markCircle} / 2);
      width: ${widths.markCircle};
      height: ${heights.markCircle};
      border-radius: ${radiuses.circle};
      background-color: ${colors.mainDark};
    }
  }
`;

export const ol = ({ spaces }: Theme) => css`
  padding-left: ${spaces.sm};
`;

export const olList = () => css`
  list-style-type: decimal;
`;
