export type PaletteType = {
  primary: string;
  secondary: string;
  neutral: string;
  titles: string;
  subTitles: string;
};

export interface IPalette {
  name: string;
  colors: PaletteType;
}
