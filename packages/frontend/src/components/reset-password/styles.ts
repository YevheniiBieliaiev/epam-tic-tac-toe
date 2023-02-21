import { css, type Theme } from '@emotion/react';

export const resetContainer = css`
  flex-direction: column;
  align-items: center;
`;

export const formWrapper = ({ widths, minMq }: Theme) => css`
  width: ${widths.formMin};

  ${minMq('lg')} {
    width: ${widths.form};
  }
`;

export const header = ({
  fontSizes,
  lineHeights,
  fontWeights,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.xl};
  font-size: ${fontSizes.headingXl};
  line-height: ${lineHeights.headingXl};
  font-weight: ${fontWeights.body3};
`;

export const row = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.lg};
`;
