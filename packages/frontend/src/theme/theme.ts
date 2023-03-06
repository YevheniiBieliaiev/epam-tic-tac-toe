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
  lightSpinner: '#D6D6DD',
  disabledLight: '#DFDFDF',
  disabledPrimary: '#707190',
  inactiveBorder: '#CECED5',
  bkgAvatar: '#BAB7B7',
  lightGrey: '#EBE0D2',
  gold: '#FFD700',
};

const borders = {
  boardCell: `2px solid ${colors.boardCellBorder}`,
  darkButton: `3px solid ${colors.darkButtonBorder}`,
  lightButton: `2px solid ${colors.mainDark}`,
  input: `1px solid ${colors.mainDark}`,
  checkbox: `1.5px solid ${colors.mainDark}`,
  checkboxMark: `2px solid ${colors.mainDark}`,
  header: `2px solid ${colors.mainDark}`,
  toast: '2px solid transparent',
  code: `2px solid ${colors.mainDark}`,
  lightDivider: `1px solid ${colors.lightGrey}`,
  o: `15px solid ${colors.gold}`,
};

const spaces = {
  xxs: '5px',
  xs: '10px',
  sm: '15px',
  md: '20px',
  lg: '25px',
  xl: '30px',
  xxl: '40px',
  xl3: '50px',
  xl4: '70px',
  footerPaddingTB: '32px',
  playLinks: '45px',
  buttonXs: '8px',
  buttonSm: '12px',
  scrollBottom: '25%',
  scrollRight: '15%',
  input: {
    x: '12px',
    y: '9px',
  },
  button: {
    x: {
      standart: '12px',
      small: '8px',
    },
    y: '8px',
  },
  checkboxMark: {
    top: '-5px',
    left: '2px',
  },
};

const widths = {
  tipMark: '4px',
  markCircle: '6px',
  xxsIcon: '11px',
  xsIcon: '16px',
  smIcon: '20px',
  mdIcon: '32px',
  lgIcon: '50px',
  logoXs: '33px',
  logoSm: '40px',
  smAvatar: '27px',
  mdAvatar: '50px',
  boardCell: '96px',
  bkgFrameXl: '20%',
  bkgFrameLg: '12%',
  bkgFrameMd: '6%',
  form: '350px',
  profileInput: '240px',
  formMin: '330px',
  toast: '200px',
  pageContent: '710px',
  mainLayout: '740px',
  modalInnerMax: '300px',
  modalInnerMin: '250px',
  checkbox: '12px',
  checkboxMark: '9px',
  codeInput: '45px',
  spinner: {
    xs: '10px',
    sm: '20px',
  },
  appSpinner: '270px',
  spinnerElem: {
    x: '15px',
    o: '80px',
  },
};

const heights = {
  boardCell: '96px',
  xxsIcon: '11px',
  xsIcon: '16px',
  smIcon: '20px',
  mdIcon: '32px',
  lgIcon: '50px',
  logoSm: '20px',
  logoXs: '17px',
  smAvatar: '27px',
  mdAvatar: '50px',
  tipMark: '4px',
  markCircle: '6px',
  checkbox: '12px',
  checkboxMark: '13px',
  button: {
    form: '41px',
  },
  spinner: {
    xs: '10px',
    sm: '20px',
  },
  appSpinner: '300px',
  spinnerElem: {
    x: '80px',
    o: '80px',
  },
};

const fontFamily = {
  Nunito: 'Nunito, sans-serif',
};

const fontSizes = {
  xxs: '8px',
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
  xs: '10px',
  headingXl: '33px',
  headingLg: '27px',
  headingSm: '22px',
  body1: '22px',
  body2: '18px',
  body3: '14px',
  body4: '12px',
};

const fontWeights = {
  standart: 400,
  body1: 500,
  body2: 700,
  body3: 800,
};

const zIndex = {
  scrollButton: 50,
  toast: 150,
};

const radiuses = {
  xxs: '2px',
  xs: '4px',
  sm: '8px',
  circle: '50%',
};

const backdropFilters = {
  mainModal: '3px',
};

const shadows = {
  input: '0 0 5px rgba(0, 0, 0, 0.4)',
  toast: '0 0 6px rgba(0, 0, 0, 0.7)',
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
  shadows,
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
  backdropFilters,
};

export { lightTheme };
