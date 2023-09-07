import { css, type Theme } from '@emotion/react';

export const game = ({ minMq }: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${minMq('md')} {
    flex-direction: row;
    align-items: normal;
  }
`;

export const userInfo = ({ widths, spaces, minMq }: Theme) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spaces.xxs};

  &[data-opponent='opponent'] {
    order: 3;
  }

  &[data-opponent='own'] {
    order: 2;

    ${minMq('md')} {
      order: 1;
    }
  }

  div {
    width: ${widths.opponetInfo.sm};
  }

  ${minMq('md')} {
    flex-direction: column;
    gap: ${spaces.squareGap};
    div {
      width: ${widths.opponetInfo.md};
    }
  }
`;

export const board = ({ minMq, spaces }: Theme) => css`
  order: 1;
  margin-bottom: ${spaces.lg};

  ${minMq('md')} {
    order: 2;
    margin-bottom: 0;
  }
`;
