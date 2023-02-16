import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const label = ({ fontSizes, lineHeights, colors }: Theme) => css`
  font-size: ${fontSizes.body3};
  line-height: ${lineHeights.body2};

  &[data-error='error'] {
    color: ${colors.warning};
  }
`;

export const inputInner = css`
  position: relative;
`;

export const input = ({
  radiuses,
  borders,
  colors,
  fontSizes,
  lineHeights,
  shadows,
  spaces,
}: Theme) => css`
  border: ${borders.input};
  border-radius: ${radiuses.xs};
  width: 100%;
  padding: ${spaces.input.y} ${spaces.input.x};
  background-color: ${colors.input};
  font-family: inherit;
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body1};
  color: ${colors.mainDark};

  &::placeholder {
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

export const show = ({ heights, spaces }: Theme) => css`
  position: absolute;
  top: calc(50% - ${heights.xsIcon} / 2);
  right: ${spaces.buttonSm};
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const eye = css`
  margin: 0;
`;

export const error = ({ colors, fontSizes, spaces }: Theme) => css`
  position: absolute;
  bottom: -${spaces.md};
  left: 0;
  font-size: ${fontSizes.xs};
  color: ${colors.warning};
`;
