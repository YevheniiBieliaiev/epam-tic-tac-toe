import { css, type Theme } from '@emotion/react';

export const footerWrapper = ({ colors }: Theme) => css`
  width: 100%;
  background-color: ${colors.mainDark};
`;

export const footerContent = ({ spaces }: Theme) => css`
  display: flex;
  justify-content: center;
  margin: auto;
  padding: ${spaces.footerPaddingTB} ${spaces.sm};
`;

export const copyrightBlock = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-right: ${spaces.xxxl};
`;

export const links = ({ spaces }: Theme) => css`
  display: flex;
  margin-bottom: ${spaces.md};
`;

export const logo = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
`;

export const copyright = ({ fontSizes, lineHeights, colors }: Theme) => css`
  display: flex;
  flex-direction: column;
  font-size: ${fontSizes.xs};
  line-height: ${lineHeights.body3};
  color: ${colors.textGreyContrast};
`;
