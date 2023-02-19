import { css, type Theme } from '@emotion/react';

export const confirm = ({ widths, spaces, minMq }: Theme) => css`
  margin-bottom: ${spaces.md};
  width: ${widths.formMin};

  ${minMq('lg')} {
    width: ${widths.form};
  }
`;

export const instructionWrapper = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spaces.sm};
`;

export const header = ({
  fontSizes,
  lineHeights,
  fontWeights,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.xxs};
  font-size: ${fontSizes.headingXl};
  line-height: ${lineHeights.headingXl};
  font-weight: ${fontWeights.body3};
`;

export const instructionHeader = ({
  fontSizes,
  lineHeights,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.xxs};
  font-size: ${fontSizes.headingLg};
  line-height: ${lineHeights.headingLg};
`;

export const instruction = ({ fontSizes, lineHeights }: Theme) => css`
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.body1};
`;

export const row = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.lg};
`;
