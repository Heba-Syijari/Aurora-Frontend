import { ITheme } from 'src/types/project';

export function getPageImageURL(title: string): string {
  return `https://placehold.co/140x180/white/1E4156?text=${title.replace(/ /g, '+')}`;
}

export function getThemeImage(themes: ITheme[], themeId: number): string | undefined {
  return themes.find((theme) => theme.id === themeId)?.thumbnail;
}
