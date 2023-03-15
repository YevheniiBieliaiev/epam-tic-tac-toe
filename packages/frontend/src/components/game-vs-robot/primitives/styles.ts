import { css, type Theme } from '@emotion/react';

export const options = ({ colors, radiuses, spaces, minMq }: Theme) => css`
  flex-grow: 1;
  border-radius: ${radiuses.xs};
  background: ${colors.grey};

  &:first-of-type {
    margin-right: ${spaces.sm};
  }

  ${minMq('md')} {
    flex-grow: unset;
    margin-bottom: ${spaces.xs};

    &:first-of-type {
      margin-right: 0;
    }
  }
`;

export const optionsInner = ({ spaces }: Theme) => css`
  padding: ${spaces.xs};
`;

export const optionsHeader = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xs};
`;

export const settings = ({ spaces }: Theme) => css`
  padding-left: ${spaces.xxs};
`;

export const startBarButton = ({ minMq, spaces }: Theme) => css`
  &:first-of-type {
    margin-right: ${spaces.md};
    margin-bottom: 0;
  }

  ${minMq('md')} {
    &:first-of-type {
      margin-right: 0;
      margin-bottom: ${spaces.md};
    }
  }
`;
