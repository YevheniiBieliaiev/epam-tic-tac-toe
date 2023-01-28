import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const input = ({ colors }: Theme) => css`
  background-color: ${colors.dark};
  height: 200px;
  width: 200px;
`;
