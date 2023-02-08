import { css, type Theme } from '@emotion/react';

export const scroll = ({ spaces, colors, radiuses, zIndex }: Theme) => css`
  position: fixed;
  z-index: ${zIndex.scrollButton};
  bottom: ${spaces.scrollBottom};
  right: ${spaces.scrollRight};
  border: none;
  border-radius: ${radiuses.xs};
  padding: 0;
  background-color: ${colors.mainDark};
  cursor: pointer;
`;

export const icon = ({ spaces, minMq }: Theme) => css`
  display: block;
  padding: ${spaces.xs} ${spaces.xs};

  ${minMq('lg')} {
    padding: ${spaces.sm} ${spaces.sm};
  }
`;
