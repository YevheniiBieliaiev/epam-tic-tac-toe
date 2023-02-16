import { css, type Theme } from '@emotion/react';

export const checkboxWrapper = ({ spaces }: Theme) => css`
  position: relative;
  margin-right: ${spaces.xxs};
`;

export const label = ({ colors, fontSizes, lineHeights }: Theme) => css`
  display: flex;
  align-items: center;
  font-size: ${fontSizes.body3};
  line-height: ${lineHeights.body2};
  cursor: pointer;

  &[data-error='error'] {
    color: ${colors.warning};
  }
`;

export const checkbox = ({
  widths,
  heights,
  colors,
  borders,
  radiuses,
  shadows,
  spaces,
}: Theme) => css`
  position: relative;
  appearance: none;
  margin: 0;
  margin-right: ${spaces.xxs};
  border: ${borders.checkbox};
  border-radius: ${radiuses.xxs};
  width: ${widths.checkbox};
  height: ${heights.checkbox};
  outline: none;
  cursor: pointer;

  &:checked {
    box-shadow: ${shadows.input};
    &::after {
      content: '';
      position: absolute;
      top: ${spaces.checkboxMark.top};
      left: ${spaces.checkboxMark.left};
      transform: rotate(45deg);
      border-right: ${borders.checkboxMark};
      border-bottom: ${borders.checkboxMark};
      width: ${widths.checkboxMark};
      height: ${heights.checkboxMark};
    }
  }

  &[data-error='error'] {
    border-color: ${colors.warning};
  }
`;

export const error = ({ spaces, colors, fontSizes, widths }: Theme) => css`
  position: absolute;
  bottom: -${spaces.sm};
  font-size: ${fontSizes.xs};
  color: ${colors.warning};
  width: ${widths.form};
`;
