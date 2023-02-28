import { css, type Theme } from '@emotion/react';

export const avatarWrapper = ({ spaces }: Theme) => css`
  margin-right: ${spaces.xs};
`;

export const defaultAvatar = ({
  widths,
  heights,
  colors,
  radiuses,
  fontSizes,
  lineHeights,
}: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${radiuses.circle};
  background-color: ${colors.bkgAvatar};

  &[data-size='sm'] {
    width: ${widths.smAvatar};
    height: ${heights.smAvatar};
    font-size: ${fontSizes.body1};
    line-height: ${lineHeights.body2};
  }

  &[data-size='md'] {
    width: ${widths.mdAvatar};
    height: ${heights.mdAvatar};
    font-size: ${fontSizes.headingLg};
    line-height: ${lineHeights.headingSm};
  }
`;

export const avatar = ({ widths, heights, radiuses }: Theme) => css`
  display: block;
  border-radius: ${radiuses.circle};

  &[data-size='sm'] {
    width: ${widths.smAvatar};
    height: ${heights.smAvatar};
  }

  &[data-size='md'] {
    width: ${widths.mdAvatar};
    height: ${heights.mdAvatar};
  }
`;
