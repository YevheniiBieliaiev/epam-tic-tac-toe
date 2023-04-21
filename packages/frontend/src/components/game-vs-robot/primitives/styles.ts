import { css, type Theme } from '@emotion/react';

export const options = ({ colors, radiuses, spaces, minMq }: Theme) => css`
  flex-grow: 1;
  border-radius: ${radiuses.xs};
  background: ${colors.grey};

  &:first-of-type {
    margin-right: ${spaces.sm};
  }

  ${minMq('md')} {
    flex-grow: unset;
    margin-bottom: ${spaces.xs};

    &:first-of-type {
      margin-right: 0;
    }
  }
`;

export const optionsInner = ({ spaces }: Theme) => css`
  padding: ${spaces.xs};
`;

export const optionsHeader = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xs};
`;

export const settings = ({ spaces }: Theme) => css`
  padding-left: ${spaces.xxs};
`;

export const startBarButton = ({ minMq, spaces }: Theme) => css`
  &:nth-of-type(n) {
    margin-right: ${spaces.md};
    margin-bottom: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }

  ${minMq('md')} {
    &:nth-of-type(n) {
      margin-right: 0;
      margin-bottom: ${spaces.md};
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const saveScore = ({ lineHeights }: Theme) => css`
  display: flex;
  justify-content: center;
  width: 77px;
  height: ${lineHeights.body1};
`;

export const board = css`
  position: relative;
`;

export const restart = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  radiuses,
  widths,
  minMq,
}: Theme) => css`
  position: absolute;
  top: 0;
  left: calc(50% - ${widths.gameRestart.sm} / 2);
  border-radius: ${radiuses.sm};
  width: ${widths.gameRestart.sm};
  height: 100%;
  background: ${colors.boardBackdrop};
  font-size: ${fontSizes.headingXl};
  line-height: ${lineHeights.headingXl};
  font-weight: ${fontWeights.body3};
  color: ${colors.textMainContrast};

  ${minMq('md')} {
    left: calc(50% - ${widths.gameRestart.md} / 2);
    width: ${widths.gameRestart.md};
    height: 100%;
  }
`;

export const restartInner = ({ spaces }: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: ${spaces.md};
`;
