import bkgFrame from '../images/frame/bkg-frame.svg';

const colors = {
  error: '#EB4242',
  success: '#5EB346',
  accept: '#71B157',
  warning: '#D22626',
  mainDark: '#313253',
  textBlack: '#000000',
  textMainContrast: '#FFFFFF',
  textDarkContrast: '#313253',
  textGreyContrast: '#D6D6DD',
  sideText: '#9293A3',
  backdrop: 'rgba(49, 50, 83, 0.5)',
  boardCell: '#DCC9B5',
  boardCellBorder: '#967552',
  darkButtonBorder: '#08091A',
  links: '#3396BB',
  input: '#F5F1E7',
  bkgMain: '#FAF8F0',
};

const borders = {
  boardCell: `2px solid ${colors.boardCellBorder}`,
  darkButton: `3px solid ${colors.darkButtonBorder}`,
  input: `1px solid ${colors.mainDark}`,
  header: `2px solid ${colors.mainDark}`,
};

const spaces = {
  xxs: '5px',
  xs: '10px',
  sm: '15px',
  md: '20px',
  lg: '25px',
  xl: '30px',
  xxl: '40px',
  xxxl: '70px',
  footerPaddingTB: '32px',
  playLinks: '45px',
  buttonXs: '8px',
  buttonSm: '12px',
  scrollBottom: '25%',
  scrollRight: '15%',
};

const widths = {
  boardCell: '96px',
  xsIcon: '16px',
  smIcon: '20px',
  mdIcon: '32px',
  logoSm: '40px',
  logoXs: '33px',
  bkgFrameXl: '20%',
  bkgFrameLg: '12%',
  bkgFrameMd: '6%',
  pageContent: '710px',
  mainLayout: '740px',
  markCircle: '6px',
};

const heights = {
  boardCell: '96px',
  xsIcon: '16px',
  smIcon: '20px',
  mdIcon: '32px',
  logoSm: '20px',
  logoXs: '17px',
  markCircle: '6px',
};

const fontFamily = {
  Nunito: 'Nunito, sans-serif',
};

const fontSizes = {
  xs: '10px',
  headingXl: '24px',
  headingLg: '20px',
  headingSm: '16px',
  body1: '16px',
  body2: '14px',
  body3: '12px',
  body4: '10px',
};

const lineHeights = {
  headingXl: '33px',
  headingLg: '27px',
  headingSm: '22px',
  body1: '22px',
  body2: '18px',
  body3: '14px',
  body4: '12px',
};

const fontWeights = {
  body1: 500,
  body2: 700,
  body3: 800,
};

const zIndex = {
  scrollButton: 50,
};

const radiuses = {
  xs: '4px',
  circle: '50%',
};

const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const frames = {
  bkgFrame,
};

type Breakpoints = keyof typeof breakpoints;

const minMq = (bp: Breakpoints) => `@media (min-width: ${breakpoints[bp]}px)`;

const maxMq = (bp: Breakpoints) => `@media (max-width: ${breakpoints[bp]}px)`;

const lightTheme = {
  colors,
  borders,
  spaces,
  widths,
  heights,
  fontFamily,
  fontSizes,
  fontWeights,
  lineHeights,
  zIndex,
  radiuses,
  minMq,
  maxMq,
  frames,
};

export { lightTheme };
