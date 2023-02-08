import { css, type Theme } from '@emotion/react';

export const toastWrapper = ({ colors }: Theme) => css`
  background-color: ${colors.links};
`;

export const toastLevel = ({ colors }: Theme) => css`
  color: ${colors.success};
`;

export const toastDescription = ({ colors }: Theme) => css`
  color: ${colors.error};
`;
