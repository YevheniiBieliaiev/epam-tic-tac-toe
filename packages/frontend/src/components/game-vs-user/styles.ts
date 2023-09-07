import { css, type Theme } from '@emotion/react';

export const gameWrapper = ({ spaces, minMq }: Theme) => css`
  margin-bottom: ${spaces.lg};

  ${minMq('md')} {
    margin-bottom: ${spaces.xxl};
  }
`;

export const linkButton = ({ spaces, minMq }: Theme) => css`
  margin-bottom: ${spaces.md};

  ${minMq('md')} {
    margin-bottom: ${spaces.xl};
  }
`;
