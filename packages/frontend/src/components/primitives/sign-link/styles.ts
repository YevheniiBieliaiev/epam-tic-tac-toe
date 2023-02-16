import { css, type Theme } from '@emotion/react';

export const linkWrapper = ({ spaces }: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${spaces.lg};
`;

export const label = ({ fontSizes, lineHeights, spaces }: Theme) => css`
  margin-right: ${spaces.sm};
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body1};
`;
