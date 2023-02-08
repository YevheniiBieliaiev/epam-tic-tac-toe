import { css, type Theme } from '@emotion/react';

export const terms = ({ fontSizes, lineHeights, minMq }: Theme) => css`
  font-size: ${fontSizes.body3};
  line-height: ${lineHeights.body2};
  text-align: justify;

  ${minMq('lg')} {
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body1};
  }
`;

export const pageHeader = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.lg};
`;

export const chapter = ({ spaces, minMq }: Theme) => css`
  margin-bottom: ${spaces.lg};

  ${minMq('lg')} {
    margin-bottom: ${spaces.xl};
  }

  & * {
    margin-bottom: ${spaces.xs};
  }
`;

export const chapterHeading = ({ spaces, minMq }: Theme) => css`
  margin-bottom: ${spaces.xs};

  ${minMq('lg')} {
    margin-bottom: ${spaces.sm};
  }
`;
