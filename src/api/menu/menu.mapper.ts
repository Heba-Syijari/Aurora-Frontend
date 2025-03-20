import { IMenu } from 'src/types/menu';

export class MenuMapper {
  static fromApi(menu: any): IMenu {
    return {
      id: menu.id,
      label: menu.label,
      projectId: menu.projectId,
      pageId: menu.pageId,
      parentId: menu.parentId,
      link: menu.link,
      children: (menu.children || []).map(MenuMapper.fromApi),
      pageSlug: menu.pageSlug,
      place: menu?.place,
      section: menu?.section,
    };
  }
}
