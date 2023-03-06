import { css, keyframes, type Theme } from '@emotion/react';

export const spinnerRoot = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const appSpinner = ({ widths, heights }: Theme) => css`
  position: relative;
  width: ${widths.appSpinner};
  height: ${heights.appSpinner};
`;

export const symbolsGroup = ({ heights, widths }: Theme) => css`
  position: absolute;
  top: calc(50% - ${heights.spinnerElem.x} / 2);
  width: ${widths.appSpinner};
  height: ${heights.spinnerElem.x};
  &:nth-of-type(1) {
    transform: rotate(55deg);
  }
  &:nth-of-type(2) {
    transform: rotate(-55deg);
  }
  &:nth-of-type(3) {
    transform: rotate(-180deg);
  }
`;

export const x = ({ spaces }: Theme) => css`
  position: absolute;
  left: 80px;
  transform-origin: ${spaces.sm} ${spaces.sm};
  animation: 2s infinite linear ${moveElements};
`;

export const xLine = ({ widths, heights, colors }: Theme) => css`
  position: absolute;
  background-color: ${colors.mainDark};
  width: ${widths.spinnerElem.x};
  height: ${heights.spinnerElem.x};
`;

export const xHorizontal = css`
  transform: rotate(90deg);
`;

export const o = ({ widths, heights, borders, radiuses, spaces }: Theme) => css`
  position: absolute;
  right: 0;
  transform-origin: -${spaces.lg} ${spaces.xl3};
  animation: 3s infinite linear ${moveElements};
  border: ${borders.o};
  border-radius: ${radiuses.circle};
  width: ${widths.spinnerElem.o};
  height: ${heights.spinnerElem.o};
`;

const moveElements = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
