// ------ Website Content Type ---------------------------------------------------- //

export enum ContentTypeVariation {
  DIVERSIFIED = 'DIVERSIFIED',
  SPECIALIST = 'SPECIALIST',
}

export type ContentTypeVariationType = `${ContentTypeVariation}`;

export type IWebsiteContentType = {
  type: ContentTypeVariationType;
  categories: number[];
  mainCategoryId?: number;
  subCategories: number[];
};
