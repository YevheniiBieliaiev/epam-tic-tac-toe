import { css, type Theme } from '@emotion/react';

export const toastStack = ({ zIndex, spaces }: Theme) => css`
  position: absolute;
  top: -${spaces.md};
  right: ${spaces.sm};
  z-index: ${zIndex.toast};
`;

export const toast = ({
  colors,
  spaces,
  radiuses,
  borders,
  shadows,
  widths,
}: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spaces.xxs};
  box-shadow: ${shadows.toast};
  border: ${borders.toast};
  border-radius: ${radiuses.xs};
  width: ${widths.toast};
  padding: ${spaces.xs};
  background-color: ${colors.bkgMain};

  &[data-variant='error'] {
    border-color: ${colors.error};
    color: ${colors.error};
  }

  &[data-variant='success'] {
    border-color: ${colors.success};
    color: ${colors.success};
  }
`;

export const level = ({ fontSizes, lineHeights, spaces }: Theme) => css`
  margin-bottom: ${spaces.xxs};
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.body2};
`;

export const description = ({ fontSizes, lineHeights }: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
`;
