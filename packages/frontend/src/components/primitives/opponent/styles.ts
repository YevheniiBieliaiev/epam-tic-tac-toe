import { css, type Theme } from '@emotion/react';

export const user = ({ radiuses, colors, minMq, spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spaces.lg};
  border-radius: ${radiuses.xs};
  background: ${colors.grey};

  ${minMq('md')} {
    flex: 0;
    margin-bottom: 0;
  }
`;

export const wrapper = ({ spaces }: Theme) => css`
  padding: ${spaces.xs};
`;

export const info = () => css`
  display: flex;
`;

export const textInfo = ({ fontSizes, lineHeights, fontWeights }: Theme) => css`
  display: flex;
  flex-direction: column;
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body1};
  font-weight: ${fontWeights.body2};
`;
