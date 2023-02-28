import { css, type Theme } from '@emotion/react';

export const block = ({ colors, radiuses }: Theme) => css`
  border-radius: ${radiuses.xs};
  background-color: ${colors.input};
`;

export const blockInner = ({ spaces }: Theme) => css`
  padding: ${spaces.xs};
`;

export const blockHeader = ({ spaces }: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spaces.xs};
`;

export const header = ({
  fontSizes,
  lineHeights,
  fontWeights,
  minMq,
}: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body1};

  ${minMq('lg')} {
    font-size: ${fontSizes.headingLg};
    line-height: ${lineHeights.headingLg};
    font-weight: ${fontWeights.body3};
  }
`;

export const edit = ({ spaces }: Theme) => css`
  margin-right: ${spaces.xxs};
`;

export const editIcon = css`
  margin-right: 0;
`;

export const inputRow = ({ widths, spaces }: Theme) => css`
  margin-bottom: ${spaces.xs};
  width: ${widths.profileInput};
`;

export const inputPassword = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
`;

export const submitRow = ({ borders }: Theme) => css`
  display: flex;
  justify-content: flex-end;
  border-top: ${borders.lightDivider};
`;

export const submitInner = ({ spaces }: Theme) => css`
  margin-top: ${spaces.xs};
`;

export const updatingDate = ({ fontSizes, lineHeights }: Theme) => css`
  font-size: ${fontSizes.body3};
  line-height: ${lineHeights.body2};
`;

export const resetLink = ({ spaces }: Theme) => css`
  display: flex;
  justify-content: flex-start;
  margin-top: ${spaces.md};
`;
