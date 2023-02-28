import { css, type Theme } from '@emotion/react';

export const profileWrapper = () => css``;

export const row = ({ spaces, minMq }: Theme) => css`
  margin-bottom: ${spaces.lg};

  ${minMq('lg')} {
    margin-bottom: ${spaces.xl};
  }
`;
