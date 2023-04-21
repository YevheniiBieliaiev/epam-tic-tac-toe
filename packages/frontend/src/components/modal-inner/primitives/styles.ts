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

export const tipSign = ({ widths }: Theme) => css`
  width: ${widths.tooltip};
`;

export const tipInner = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  padding: ${spaces.xs};
`;

export const description = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spaces.sm};
  text-align: center;
`;

export const header = ({
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
}: Theme) => css`
  font-size: ${fontSizes.headingLg};
  line-height: ${lineHeights.headingLg};
  font-weight: ${fontWeights.body3};
  color: ${colors.mainDark};
`;

export const text = ({ fontSizes, lineHeights, colors }: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body1};
  color: ${colors.mainDark};
`;

export const links = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
