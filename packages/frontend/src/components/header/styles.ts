import { css, type Theme } from '@emotion/react';

export const headerWrapper = ({ spaces, minMq }: Theme) => css`
  margin-bottom: ${spaces.xl};
  padding: 0 ${spaces.sm};

  ${minMq('lg')} {
    margin-bottom: ${spaces.xxl};
  }
`;

export const headerContent = ({ spaces, borders }: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border-bottom: ${borders.header};
  padding: ${spaces.md} 0;
`;

export const play = css`
  display: flex;
`;

export const links = ({ spaces }: Theme) => css`
  margin-right: ${spaces.xl};
`;

export const playLink = ({ spaces, minMq }: Theme) => css`
  margin-right: ${spaces.sm};
  ${minMq('lg')} {
    margin-right: ${spaces.playLinks};
  }
`;
