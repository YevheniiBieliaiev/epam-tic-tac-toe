import { css, keyframes, type Theme } from '@emotion/react';

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const spinner = ({ colors, radiuses, widths, heights }: Theme) => css`
  border: 2px solid transparent;
  border-radius: ${radiuses.circle};
  animation: ${animation} 1.2s linear infinite;

  &[data-size='xs'] {
    width: ${widths.spinner.xs};
    height: ${heights.spinner.xs};
  }

  &[data-size='sm'] {
    width: ${widths.spinner.sm};
    height: ${heights.spinner.sm};
  }

  &[data-contrast='primary'] {
    border-top-color: ${colors.mainDark};
    border-right-color: ${colors.mainDark};
    border-bottom-color: ${colors.mainDark};
  }

  &[data-contrast='light'] {
    border-top-color: ${colors.lightSpinner};
    border-right-color: ${colors.lightSpinner};
    border-bottom-color: ${colors.lightSpinner};
  }
`;
