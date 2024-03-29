import { css, type Theme } from '@emotion/react';

export const statistic = ({
  fontSizes,
  lineHeights,
  spaces,
  minMq,
  colors,
  radiuses,
}: Theme) => css`
  display: flex;
  flex-direction: row;
  margin-bottom: ${spaces.lg};
  border-radius: ${radiuses.xs};
  background: ${colors.grey};
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.body1};

  ${minMq('md')} {
    flex-direction: column;
    margin-bottom: ${spaces.xs};
  }
`;

export const statisticInner = ({
  spaces,
  minMq,
  fontSizes,
  lineHeights,
}: Theme) => css`
  display: flex;
  flex-direction: row;
  padding: ${spaces.xs};

  ${minMq('md')} {
    flex-direction: column;
  }

  &[data-opponent] {
    flex-direction: column;
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body1};

    ${minMq('md')} {
    }
  }
`;

export const row = ({ minMq, spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-right: ${spaces.md};

  ${minMq('md')} {
    flex-direction: row;
  }

  &[data-opponent] {
    flex-direction: row;
  }
`;
