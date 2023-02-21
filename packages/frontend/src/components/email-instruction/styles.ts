import { css, type Theme } from '@emotion/react';

export const infoWrapper = () => css`
  flex-direction: column;
  align-items: center;
  text-align: center;
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

export const instruction = ({ fontSizes, lineHeights, spaces }: Theme) => css`
  margin-bottom: ${spaces.lg};
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body1};
`;
