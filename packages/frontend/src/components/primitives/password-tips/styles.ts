import { css, type Theme } from '@emotion/react';

export const tipWrapper = ({
  fontSizes,
  lineHeights,
  fontWeights,
}: Theme) => css`
  display: flex;
  font-size: ${fontSizes.xxs};
  line-height: ${lineHeights.xs};
  font-weight: ${fontWeights.standart};
`;

export const column = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-top: ${spaces.lg};
  margin-right: ${spaces.xs};
`;

export const tip = ({
  widths,
  heights,
  colors,
  radiuses,
  spaces,
}: Theme) => css`
  position: relative;
  padding-left: ${spaces.xs};

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - ${heights.tipMark} / 2);
    left: 0;
    border-radius: ${radiuses.circle};
    width: ${widths.tipMark};
    height: ${heights.tipMark};
    background-color: ${colors.mainDark};
  }

  &[data-result='error'] {
    color: ${colors.warning};
    &::before {
      background-color: ${colors.warning};
    }
  }

  &[data-result='success'] {
    color: ${colors.accept};
    &::before {
      background-color: ${colors.accept};
    }
  }
`;
