import { css, type Theme } from '@emotion/react';

//calculation of height: height(100vh) - height of header - height of footer
//main layout
export const main = ({ widths, spaces }: Theme) => css`
  position: relative;
  margin: auto;
  max-width: ${widths.mainLayout};
  min-height: calc(100vh - 104px - 140px);
  padding: 0 ${spaces.sm};
`;

//sign layout
export const sign = ({ widths, spaces, minMq }: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${spaces.xs};
  width: ${widths.formMin};

  ${minMq('lg')} {
    width: ${widths.form};
  }
`;

export const linksGroup = ({ spaces }: Theme) => css`
  display: flex;
  margin-bottom: ${spaces.lg};
`;

export const tab = ({ colors }: Theme) => css`
  display: flex;
  flex: 1;
  justify-content: center;
  border-bottom: 2px solid ${colors.mainDark};

  &[data-location='inactive'] {
    border-bottom-color: ${colors.inactiveBorder};
  }
`;

export const tabInner = ({ spaces }: Theme) => css`
  padding: ${spaces.xxs};
`;
