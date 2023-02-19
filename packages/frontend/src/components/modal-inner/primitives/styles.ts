import { css, type Theme } from '@emotion/react';

export const result = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.sm};
`;

export const resultIcon = css`
  margin-right: 0;
`;

export const modalContent = ({ widths, minMq }: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${widths.modalInnerMin};
  text-align: center;

  ${minMq('lg')} {
    width: ${widths.modalInnerMax};
  }
`;

export const resultText = ({ fontSizes, lineHeights }: Theme) => css`
  font-size: ${fontSizes.headingLg};
  line-height: ${lineHeights.headingLg};
`;

export const instruction = ({ fontSizes, lineHeights }: Theme) => css`
  display: flex;
  align-items: center;
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body1};
`;
