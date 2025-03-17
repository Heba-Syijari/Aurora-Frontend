export type PaletteType = {
  primary: string;
  secondary: string;
  neutral: string;
  titles: string;
  subTitles: string;
};

export type modeType = {
  name: string;
  label: string;
};
export type PaletteOptionType = {
  name: string;
  colors: PaletteType;
};

export const paletteOptions: PaletteOptionType[] = [
  {
    name: 'Palette 1',
    colors: {
      primary: '#0047BA',
      secondary: '#2A3342',
      neutral: '#F7F8F9',
      titles: '#2A3342',
      subTitles: '#8896AB',
    },
  },
  {
    name: 'Palette 2',
    colors: {
      primary: '#8E7AB5',
      secondary: '#070F2B',
      neutral: '#FFE1ED',
      titles: '#2A3342',
      subTitles: '#8896AB',
    },
  },
  {
    name: 'Palette 3',
    colors: {
      primary: '#006E90',
      secondary: '#001015',
      neutral: '#ADCAD6',
      titles: '#2A3342',
      subTitles: '#8896AB',
    },
  },
  {
    name: 'Palette 4',
    colors: {
      primary: '#17B890',
      secondary: '#082D0F',
      // neutral: '#DEE5E5',
      neutral: '#FFFF',
      titles: '#2A3342',
      subTitles: '#8896AB',
    },
  },
  {
    name: 'Palette 5', // Nova 
    colors: {
      primary: '#865EFF',
      secondary: '#3565FB',
      neutral: '#F2EEFF',
      titles: '#111111',
      subTitles: '#595859',
    },
  },
  {
    name: 'Palette 6', // Kawn
    colors: {
      primary: '#FDC6BB',
      secondary: '#E4A4F3',
      neutral: '#ffff ', // BackGround
      titles: '#111111',
      subTitles: '#FBFBFB', // BackGround 2
    },
  },
  {
    name: 'Palette 7', // Oplus
    colors: {
      primary: '#6CC8D9',
      secondary: '#5E68AD',
      neutral: '#0C121E', // BackGround
      titles: '#111111',
      subTitles: '#242A34',
    },
  },
  {
    name: 'Palette 8', // IORB
    colors: {
      primary: '#FFA216',
      secondary: '#86909B',
      neutral: '#141519', // BackGround
      titles: '#111111',
      subTitles: '#303135',
    },
  },
];

export type FontFamilyOptionType = {
  name: string;
  variable: string;
};

export const fontFamilyOptions: FontFamilyOptionType[] = [
  {
    name: 'Arial',
    variable: 'arial',
  },
  {
    name: 'Poppins',
    variable: 'var(--font-poppins)',
  },
  {
    name: 'Raleway',
    variable: '"Raleway", sans-serif',
  },
  {
    name: 'Barlow',
    variable: '"Barlow", sans-serif',
  },
  {
    name: 'Roboto',
    variable: 'var(--font-roboto)',
  },
  {
    name: 'Space Grotesk',
    variable: 'var(--font-space-grotesk)',
  },
  {
    name: 'Public Sans',
    variable: 'var(--font-public-sans)',
  },
  {
    name: 'Cursive',
    variable: 'cursive',
  },
  {
    name: 'Fantasy',
    variable: 'fantasy',
  },
  {
    name: 'Monospace',
    variable: 'monospace',
  },
];

export type LogoOptionType = {
  name: string;
  title: string;
};

export const logoOptions: LogoOptionType[] = [
  {
    name: 'text',
    title: 'Text',
  },
  {
    name: 'image',
    title: 'Image',
  },
];

export const modeOptions: modeType[] = [
  {
    label: 'Light',
    name: 'light',
  },
  { label: 'Dark', name: 'dark' },
];
