import { css, type Theme } from '@emotion/react';

export const pageHeading = ({
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
  minMq,
}: Theme) => css`
  font-size: ${fontSizes.headingLg};
  line-height: ${lineHeights.headingLg};
  font-weight: ${fontWeights.body3};
  color: ${colors.textDarkContrast};

  ${minMq('lg')} {
    font-size: ${fontSizes.headingXl};
    line-height: ${lineHeights.headingXl};
  }
`;

export const secondaryHeading = ({
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
  minMq,
}: Theme) => css`
  font-size: ${fontSizes.headingSm};
  line-height: ${lineHeights.headingSm};
  font-weight: ${fontWeights.body3};

  ${minMq('lg')} {
    font-size: ${fontSizes.headingLg};
    line-height: ${lineHeights.headingLg};
  }

  &[data-color='primary'] {
    color: ${colors.textDarkContrast};
  }

  &[data-color='dark'] {
    color: ${colors.textBlack};
  }
`;
