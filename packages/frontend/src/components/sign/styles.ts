import { css, type Theme } from '@emotion/react';

export const formWrapper = ({ widths }: Theme) => css`
  width: ${widths.form};
`;

export const row = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.lg};
`;

export const checkbox = css`
  display: flex;
  align-items: center;
`;

export const resetLink = ({ spaces }: Theme) => css`
  display: flex;
  justify-content: flex-end;
  margin-top: ${spaces.xs};
`;
