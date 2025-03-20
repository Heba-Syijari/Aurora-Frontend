import { IPalette } from 'src/types/palette';

export class PaletteMapper {
  static fromApi(palette: any, index: number): IPalette {
    return {
      name: `Palette ${index + 1}`,
      colors: {
        primary: palette.primary,
        secondary: palette.secondary,
        neutral: palette.neutral,
        titles: palette.titles,
        subTitles: palette.subTitles,
      },
    };
  }
}
