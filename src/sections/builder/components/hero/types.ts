import { ButtonData, ImageData, TextData } from '../../types';

export enum HeroComponentName {
  HERO_ONE = 'HERO_ONE',
  HERO_TWO = 'HERO_TWO',
  HERO_THREE = 'HERO_THREE',
  HERO_FOUR = 'HERO_FOUR',
  HERO_FIVE = 'HERO_FIVE',
  // hsn edits : add HERO_SIX & HERO_SEVEN & HERO_EIGHT
  HERO_SIX = 'HERO_SIX',
  HERO_SEVEN = 'HERO_SEVEN',
  HERO_EIGHT = 'HERO_EIGHT',
  HERO_NINE = 'HERO_NINE',
  HERO_TEN = 'HERO_TEN',
  HERO_ELEVEN = 'HERO_ELEVEN',
}

export type HeroComponentNameType = `${HeroComponentName}`;

export type BaseHeroType = {
  title: TextData;
  description: TextData;
  image: ImageData;
  button: ButtonData;
};

export type HeroOneData = BaseHeroType;

export type HeroTwoData = BaseHeroType;

export type HeroThreeData = Omit<BaseHeroType, 'image'>;

export type HeroFourData = BaseHeroType;

export type HeroFiveData = BaseHeroType & {
  image: ImageData;
  tagline: TextData;
};

// hsn edited : adding 6+7+8 section types
export type HeroSixData = {
  title: TextData;
  description: TextData;
  button: ButtonData;
  image: ImageData;
};
export type HeroSevenData = {
  tagline: TextData;
  title: TextData;
  description: TextData;
  button: ButtonData;
  backGroundImage: ImageData;
  mainImage: ImageData;
  images: ImageData[];
};
export type HeroEightData = {
  title: TextData;
  description: TextData;
  button: ButtonData;
  image: ImageData;
};

export type HeroNineData = Omit<BaseHeroType, 'button'> & { buttons: ButtonData[] };

export type HeroTenData = {
  tagline: TextData;
  title: TextData;
  image: ImageData;
};
export type HeroElevenData = {
  title: TextData;
  image: ImageData;
  backgroundImage: ImageData;
};
