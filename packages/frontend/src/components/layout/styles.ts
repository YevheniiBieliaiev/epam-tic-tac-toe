import { css, type Theme } from '@emotion/react';

//calculation of height: height(100vh) - height of header - height of footer
//main layout
export const main = ({ widths, spaces, minMq }: Theme) => css`
  position: relative;
  margin: auto;
  max-width: ${widths.mainLayout};
  min-height: calc(100vh - 104px - 140px);
  padding: 0 ${spaces.sm};

  ${minMq('lg')} {
    min-height: calc(100vh - 114px - 140px);
  }
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

//board-layout
export const boardLayout = ({ spaces, minMq }: Theme) => css`
  margin-bottom: ${spaces.lg};

  ${minMq('lg')} {
    margin-bottom: ${spaces.xl};
  }
`;

export const communication = ({ borders, spaces, minMq }: Theme) => css`
  border-top: ${borders.lightDivider};
  border-bottom: ${borders.lightDivider};
  margin-bottom: ${spaces.lg};

  ${minMq('lg')} {
    margin-bottom: ${spaces.xs};
  }
`;

export const communicationInner = ({ spaces, minMq }: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 1s ease-in-out;
  padding: ${spaces.lg} 0 ${spaces.xl};

  ${minMq('sm')} {
    flex-direction: row;
    padding: ${spaces.xs} 0 ${spaces.sm};
  }
`;

export const action = ({ minMq, spaces, borders }: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 0;

  &:nth-of-type(n) {
    border-bottom: ${borders.lightDivider};
    padding: ${spaces.lg} 0 ${spaces.lg};
  }

  &:first-of-type {
    padding: 0 0 ${spaces.lg};
  }

  &:last-of-type {
    border: none;
    padding: ${spaces.lg} 0 0;
  }

  ${minMq('sm')} {
    margin-right: ${spaces.xl4};
    width: unset;

    &:nth-of-type(n) {
      border: none;
      padding: 0;
    }
  }
`;

export const actionHeader = ({
  spaces,
  fontSizes,
  lineHeights,
  fontWeights,
}: Theme) => css`
  margin-bottom: ${spaces.xs};
  font-size: ${fontSizes.headingLg};
  line-height: ${lineHeights.headingLg};
  font-weight: ${fontWeights.body3};
`;

export const actionMotion = ({ spaces, fontSizes, lineHeights }: Theme) => css`
  margin-bottom: ${spaces.xs};
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body1};
`;

export const linkButton = ({ minMq }: Theme) => css`
  ${minMq('md')} {
  }
`;

export const rules = ({ fontSizes, lineHeights }: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body1};
  text-align: justify;
`;

export const rulesHeader = ({
  fontSizes,
  lineHeights,
  fontWeights,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.xs};
  font-size: ${fontSizes.headingLg};
  line-height: ${lineHeights.headingLg};
  font-weight: ${fontWeights.body3};
`;
