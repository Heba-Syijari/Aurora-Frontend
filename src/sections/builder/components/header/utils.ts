import { IMenu } from 'src/types/menu';
import { ComponentVariation, IPage } from 'src/types/project';

export function getMenuTargetURL(menu: IMenu): string {
  if (menu.pageSlug) return `/${menu.pageSlug}`;

  if (menu.link) return menu.link;
  if (menu.section) return `#${menu.section}`;
  return '#';
}

export function filterHeaderMenu({
  menus,
  pageId,
  pages,
}: {
  pageId: number;
  pages: IPage[];
  menus: IMenu[];
}) {
  const currentPage = pages.find((page) => page.id === pageId);
  if (!currentPage) return [];

  const currentPageComponents = currentPage.components.map((comp) => comp.component.type);

  return menus.filter(
    ({ parentId, place, section }) =>
      !parentId &&
      place === 'header' &&
      currentPageComponents.includes(section as ComponentVariation)
  );
}
