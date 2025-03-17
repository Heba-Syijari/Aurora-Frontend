export interface IMenu {
  id: number;
  label: string;
  projectId: string;
  link?: string;
  parentId?: number;
  pageId?: number;
  pageSlug?: string;
  place: string;
  section?: string;
  children: IMenu[];
}
