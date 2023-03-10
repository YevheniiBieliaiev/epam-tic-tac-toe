import { css, type Theme } from '@emotion/react';

export const link = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

export const linkLabel = ({
  colors,
  fontSizes,
  lineHeights,
  minMq,
}: Theme) => css`
  &[data-size='xs'] {
    font-size: ${fontSizes.body4};
    line-height: ${lineHeights.body4};
  }

  &[data-size='sm'] {
    font-size: ${fontSizes.body3};
    line-height: ${lineHeights.body2};
  }

  &[data-size='md'] {
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body1};
  }

  &[data-size='lg'] {
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body3};
    ${minMq('lg')} {
      font-size: ${fontSizes.body1};
      line-height: ${lineHeights.body1};
    }
  }

  &[data-color='dark'] {
    color: ${colors.mainDark};
  }

  &[data-color='light'] {
    color: ${colors.textGreyContrast};
  }

  &[data-color='secondary'] {
    color: ${colors.links};
  }

  &[data-active='inactive'] {
    color: ${colors.sideText};
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const buttonLink = ({
  fontSizes,
  lineHeights,
  colors,
  spaces,
  radiuses,
  borders,
  minMq,
}: Theme) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${radiuses.xs};
  text-decoration: none;

  &[data-size='sm'] {
    padding: ${spaces.buttonXs};
    font-size: ${fontSizes.body3};
    line-height: ${lineHeights.body2};
  }

  &[data-size='md'] {
    padding: ${spaces.buttonXs} ${spaces.buttonXs};
    font-size: ${fontSizes.body3};
    line-height: ${lineHeights.body2};

    ${minMq('lg')} {
      padding: ${spaces.buttonXs} ${spaces.buttonSm};
      font-size: ${fontSizes.body2};
      line-height: ${lineHeights.body1};
    }
  }

  &[data-type='dark'] {
    border-bottom: ${borders.darkButton};
    background-color: ${colors.mainDark};
    color: ${colors.textMainContrast};
  }

  &[data-type='light'] {
    border: ${borders.input};
    border-bottom: ${borders.lightButton};
    background: ${colors.textMainContrast};
    color: ${colors.textDarkContrast};
  }

  &:hover {
    background-color: ${colors.links};
  }
`;
