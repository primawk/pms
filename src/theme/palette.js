import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8)
};

const MAIN = {
  main: '#AA3E89'
};

const PRIMARY = {
  lighter: '#FADAE4',
  light: '#E58EB9',
  main: '#3F48C0',
  dark: '#000f66',
  darker: '#091A7A',
  contrastText: '#fff'
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff'
};
const INFO = {
  lighter: '#D2E6FD',
  light: '#79ACF8',
  main: '#2365EA',
  dark: '#1139A8',
  darker: '#061B70',
  contrastText: '#fff'
};
const SUCCESS = {
  lighter: '#E2FAD5',
  light: '#90E27D',
  main: '#2BA029',
  dark: '#147323',
  darker: '#074C1E',
  contrastText: '#fff'
};
const WARNING = {
  lighter: '#FDECCE',
  light: '#F4B46B',
  main: '#DD650F',
  dark: '#9F3507',
  darker: '#6A1602',
  contrastText: '#fff'
};
const ERROR = {
  lighter: '#FDD7D4',
  light: '#F37E8C',
  main: '#D82B62',
  dark: '#9B155A',
  darker: '#67084C',
  contrastText: '#fff'
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main)
};

const palette = {
  common: { black: '#000', white: '#fff', main: '#AA3E89' },
  main: { ...MAIN },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

export default palette;
