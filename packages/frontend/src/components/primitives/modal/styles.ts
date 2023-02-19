import { css, type Theme } from '@emotion/react';

export const modal = ({ colors, backdropFilters }: Theme) => css`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backdrop};
  backdrop-filter: blur(${backdropFilters.mainModal});
`;

export const modalInner = ({ colors, radiuses, spaces }: Theme) => css`
  position: relative;
  border-radius: ${radiuses.sm};
  background-color: ${colors.bkgMain};
  padding: ${spaces.sm} ${spaces.xl3};
`;

export const modalClose = ({ spaces }: Theme) => css`
  position: absolute;
  top: 0;
  right: -${spaces.xl};
`;
