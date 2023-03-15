import { css, type Theme } from '@emotion/react';

export const inputRadio = ({ fontSizes, lineHeights }: Theme) => css`
  display: flex;
  align-items: center;
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.body1};
`;

export const radio = ({
  spaces,
  widths,
  heights,
  borders,
  radiuses,
  colors,
}: Theme) => css`
  appearance: none;
  position: relative;
  border: ${borders.input};
  border-radius: ${radiuses.circle};
  margin: 0;
  width: ${widths.radio};
  height: ${heights.radio};
  margin-right: ${spaces.xxs};
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: calc(50% - ${heights.radioMark} / 2);
    left: calc(50% - ${widths.radioMark} / 2);
    display: none;
    border-radius: ${radiuses.circle};
    background: ${colors.mainDark};
    width: ${widths.radioMark};
    height: ${heights.radioMark};
  }

  &:checked {
    &::after {
      display: block;
    }
  }

  &:hover {
    border-color: ${colors.radioBorder};
  }
`;

export const label = css`
  cursor: pointer;
`;
