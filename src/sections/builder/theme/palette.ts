import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    neutral?: string;
  }
}

export type Palette = {
  primary: string;
  secondary: string;
  neutral: string;
  titles: string;
  subTitles: string;
};

export const palette = (paletteInfo: Palette): PaletteOptions => ({
  primary: {
    main: paletteInfo.primary,
    lighter: paletteInfo.primary,
    darker: paletteInfo.primary,
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: paletteInfo.secondary,
    lighter: paletteInfo.secondary,
    darker: paletteInfo.secondary,
    contrastText: '#FFFFFF',
  },
  background: {
    neutral: paletteInfo.neutral,
    secondary: paletteInfo.subTitles,
  },
  common: {
    black: '#000000',
    white: '#FFFFFF',
    neutral: '#F7F8F9',
  },
  text: {
    primary: paletteInfo.titles || '#2A3342',
    secondary: paletteInfo.subTitles || '#8896AB',
  },
});
