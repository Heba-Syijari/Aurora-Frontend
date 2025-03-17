import { IMenu } from 'src/types/menu';

export function getMenuTargetURL(menu: IMenu): string {
  if (menu.pageSlug) return `/${menu.pageSlug}`;

  if (menu.link) return menu.link;

  return '#';
}
