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

export const game = ({ minMq }: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${minMq('md')} {
    flex-direction: row;
  }
`;

export const infoFrame = ({ spaces, minMq }: Theme) => css`
  margin-right: 0;
  margin-bottom: ${spaces.lg};

  ${minMq('md')} {
    margin-right: ${spaces.sm};
    margin-bottom: 0;
  }
`;

export const optionsWrapper = ({ minMq }: Theme) => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${minMq('md')} {
    flex-direction: column;
  }
`;

export const startBar = ({ minMq, spaces }: Theme) => css`
  display: flex;
  flex-direction: row;
  margin-top: ${spaces.md};
  margin-left: 0;

  ${minMq('md')} {
    flex-direction: column;
    margin-top: 0;
    margin-left: ${spaces.sm};
  }
`;
