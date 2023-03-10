import { css, type Theme } from '@emotion/react';

export const homeBoard = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const homeHeader = ({
  fontSizes,
  lineHeights,
  fontWeights,
  minMq,
  spaces,
}: Theme) =>
  css`
    margin-bottom: ${spaces.lg};
    font-size: ${fontSizes.headingXl};
    line-height: ${lineHeights.headingXl};
    font-weight: ${fontWeights.body3};

    ${minMq('lg')} {
      margin-bottom: ${spaces.xl};
    }
  `;

export const gameBoard = ({
  widths,
  heights,
  colors,
  minMq,
  radiuses,
  spaces,
}: Theme) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${radiuses.sm};
  background: ${colors.backdrop};
  margin-bottom: ${spaces.lg};
  width: ${widths.gameBoard.sm};
  height: ${heights.gameBoard.sm};

  ${minMq('lg')} {
    margin-bottom: ${spaces.xxl};
    width: ${widths.gameBoard.lg};
    height: ${heights.gameBoard.lg};
  }
`;

export const squares = ({ spaces, minMq }: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${spaces.squareGap};
  padding: ${spaces.sm};

  ${minMq('lg')} {
    padding: ${spaces.xl};
  }
`;

export const buttonGroup = ({ spaces }: Theme) => css`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-of-type(n) :not(:last-of-type) {
    margin-bottom: ${spaces.lg};
  }
`;
