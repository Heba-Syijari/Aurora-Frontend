import { ImageData, TextData } from '../../types';

export enum GalleryComponentName {
  GALLERY_ONE = 'GALLERY_ONE',
  GALLERY_TWO = 'GALLERY_TWO',
  GALLERY_THREE = 'GALLERY_THREE',
  GALLERY_FOUR = 'GALLERY_FOUR',
  GALLERY_FIVE = 'GALLERY_FIVE',
  GALLERY_SIX = 'GALLERY_SIX',
  GALLERY_SEVEN = 'GALLERY_SEVEN',
}
export type GalleryComponentNameType = `${GalleryComponentName}`;

export type GalleryItemData = { image: ImageData };
export type GalleryData = {
  title: TextData;
  images: ImageData[];
};

export type GalleryOneData = GalleryData & { subtitle: TextData };

export type GalleryTwoData = GalleryData & { description: TextData };

export type GalleryThreeData = GalleryData & { description: TextData };
export type GalleryFourData = GalleryData;
export type GalleryFiveData = GalleryData;
export type GallerySixData = GalleryData;

export type GallerySevenItemData = {
  title: string;
  image: string;
};
export type GallerySevenConfig = {
  titleTextColor: string;
  slides: GallerySevenItemData[];
};

export type GallerySevenData = {
  image: ImageData;
  title: TextData;
  config: GallerySevenConfig
}

export type GenericGalleryConfig = GallerySevenConfig;
