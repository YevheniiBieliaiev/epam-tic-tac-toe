import { css, type Theme } from '@emotion/react';

export const button = ({
  colors,
  spaces,
  borders,
  fontSizes,
  lineHeights,
  fontWeights,
  radiuses,
  shadows,
  heights,
}: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${radiuses.xs};
  background-color: transparent;
  font-family: inherit;
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body1};
  font-weight: ${fontWeights.body2};
  cursor: pointer;

  &[data-contrast='primary'] {
    border-bottom: ${borders.darkButton};
    background-color: ${colors.mainDark};
    color: ${colors.textMainContrast};

    &:hover {
      background-color: ${colors.links};
      box-shadow: ${shadows.input};
    }

    &:disabled {
      background-color: ${colors.disabledPrimary};
      pointer-events: none;
    }
  }

  &[data-contrast='light'] {
    border: ${borders.input};
    border-bottom: ${borders.lightButton};
    background-color: ${colors.textMainContrast};
    color: ${colors.mainDark};

    &:disabled {
      background-color: ${colors.disabledLight};
      pointer-events: none;
    }
  }

  &[data-contrast='secondary'] {
    color: ${colors.links};
  }

  &[data-variant='form'] {
    height: ${heights.button.form};
    width: 100%;
  }

  &[data-size='xxs'] {
    padding: 0;
  }

  &[data-size='xs'] {
    padding: ${spaces.button.y} ${spaces.button.x.small};
  }

  &[data-size='sm'] {
    padding: ${spaces.button.y} ${spaces.button.x.standart};
  }
`;
