import { css, type Theme } from '@emotion/react';

export const gameBoard = ({ widths, minMq, spaces }: Theme) => css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spaces.squareGap};
  width: calc((${widths.square.sm} * 3) + (${spaces.squareGap} * 3));

  ${minMq('md')} {
    width: calc((${widths.square.lg} * 3) + (${spaces.squareGap} * 3));
  }
`;
