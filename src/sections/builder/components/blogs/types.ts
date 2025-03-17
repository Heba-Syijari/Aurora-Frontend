export enum BlogsComponentName {
  BLOGS_ONE = 'BLOGS_ONE',
  BLOGS_TWO = 'BLOGS_TWO',
}

export type BlogsComponentNameType = `${BlogsComponentName}`;

export interface IPostConfig {
  titleTextColor: string;
  descriptionTextColor: string;
  itemsCount: number;
  itemsPerRowCount: number;
}
