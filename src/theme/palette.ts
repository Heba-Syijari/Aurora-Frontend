import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
  }
  interface TypeText {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface TypeObject {
    border: {
      default: string;
      primary: string;
    };
  }
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
  900: '#A9B2BC',
};

const PRIMARY = {
  lighter: alpha('#8B5FBF', 0.24),
  light: alpha('#8B5FBF', 0.12),
  main: '#8B5FBF',
  dark: '#8B5FBF',
  darker: '#61398F',
  contrastText: '#FFFFFF',
};

const SECONDARY = {
  lighter: '#D6C6E1',
  light: '#D6C6E1',
  main: '#D6C6E1',
  dark: '#D6C6E1',
  darker: '#D6C6E1',
  contrastText: '#FFFFFF',
};

const INFO = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

const SUCCESS = {
  lighter: alpha('#00A76F', 0.12),
  light: '#00A76F',
  main: '#00C069',
  dark: alpha('#00C069', 0.12),
  darker: alpha('#00C069', 0.24),
  contrastText: '#FFFFFF',
};

const WARNING = {
  lighter: '#FFF9E9',
  light: '#FFAB00',
  main: '#FFC72C',
  dark: alpha('#FFC72C', 0.12),
  darker: alpha('#FFC72C', 0.24),
  contrastText: '#000000',
};

const ERROR = {
  lighter: alpha('#FF5630', 0.5),
  light: '#FF5630',
  main: '#EB5757',
  dark: '#e94b4b',
  darker: '#e94b4b',
  contrastText: '#FFFFFF',
};

const BORDER = {
  default: '#E9ECEE',
  primary: '#F1D6B7',
};

const COMMON = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  border: BORDER,
  divider: BORDER.default,
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export function palette(mode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: '#895896',
      secondary: '#4B6778',
      tertiary: '#68808E',
      disabled: '#B0BCC4',
    },
    background: {
      paper: '#FFFFFF',
      default: '#f4f5fa',
      neutral: '#F7F7F7',
      primary: alpha('#895896', 0.12),
      secondary: '#E9E4ED',
      success: '#E2F2EE',
      warning: '#FCF6E3',
      error: '#FEEBEF',
    },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.12),
      primary: alpha('#FCF7F0', 0.24),
      secondary: alpha('#F4F7FB', 0.24),
      success: alpha('#E2F2EE', 0.24),
      warning: alpha('#FCF6E3', 0.24),
      error: alpha('#FEEBEF', 0.24),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return mode === 'light' ? light : dark;
}
