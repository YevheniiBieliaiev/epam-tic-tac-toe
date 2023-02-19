import { css, type Theme } from '@emotion/react';

export const group = ({ widths }: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${widths.form};
`;

export const label = ({ fontSizes, lineHeights, colors }: Theme) => css`
  font-size: ${fontSizes.body3};
  line-height: ${lineHeights.body2};

  &[data-error='error'] {
    color: ${colors.warning};
  }
`;

export const inputs = ({ spaces }: Theme) => css`
  display: flex;
  gap: 0 ${spaces.xs};
`;

export const input = ({
  radiuses,
  borders,
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  shadows,
  spaces,
  widths,
}: Theme) => css`
  border: ${borders.code};
  border-radius: ${radiuses.xs};
  width: ${widths.codeInput};
  padding: ${spaces.input.y} 0;
  background-color: ${colors.input};
  font-family: inherit;
  font-weight: ${fontWeights.body3};
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body1};
  text-align: center;
  color: ${colors.mainDark};

  &::placeholder {
    text-align: center;
    color: ${colors.sideText};
  }

  &:focus {
    box-shadow: ${shadows.input};
    outline: none;
  }

  &[data-error='error'] {
    border-color: ${colors.warning};
  }
`;

export const error = ({ colors, fontSizes, spaces }: Theme) => css`
  position: absolute;
  bottom: -${spaces.sm};
  left: 0;
  font-size: ${fontSizes.xs};
  color: ${colors.warning};
`;
