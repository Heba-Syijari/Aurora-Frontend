import { ButtonData, ImageData, TextData } from '../../types';
import { Socials } from '../common/socials/types';

export enum AboutComponentName {
  ABOUT_ONE = 'ABOUT_ONE',
  ABOUT_TWO = 'ABOUT_TWO',
  ABOUT_THREE = 'ABOUT_THREE',
  ABOUT_FOUR = 'ABOUT_FOUR',
  ABOUT_FIVE = 'ABOUT_FIVE',
  ABOUT_SIX = 'ABOUT_SIX',
  ABOUT_SEVEN = 'ABOUT_SEVEN',
}

export type AboutComponentNameType = `${AboutComponentName}`;

export type BaseAboutDataType = {
  title: TextData;
  subtitle: TextData;
  description: TextData;
  button: ButtonData;
};

export type AboutItemData = {
  title: TextData;
  description: TextData;
  image: ImageData;
};

export type AboutThreeItemData = AboutItemData & {
  button: ButtonData;
};

export type AboutOneData = BaseAboutDataType;

export type AboutTwoData = BaseAboutDataType & {
  image: ImageData;
  socialsConfig: { socials: Socials; socialIconsColor: string };
};

export type AboutThreeData = Omit<BaseAboutDataType, 'subtitle'> & {
  image: ImageData;
};

export type AboutFourData = Omit<BaseAboutDataType, 'button'> & {
  image: ImageData;
  cardOneImage: ImageData;
  cardTwoImage: ImageData;
  // -----
  cardOneTitle: TextData,
  cardTwoTitle: TextData,
  // -----
  cardOneDescription: TextData
  cardTwoDescription: TextData
};


export type AboutFiveItemData = {
  text: string
};
export type AboutSevenItemData = {
  text: string
};

export type AboutFiveConfig = {
  textColor: string;
  items: AboutFiveItemData[];
};

export type AboutSevenConfig = {
  textColor: string;
  items: AboutSevenItemData[];
};

export type AboutFiveData = {
  image: ImageData;
  title: TextData,
  postTitle: TextData,
  config: AboutFiveConfig;
};

export type AboutSixData = {
  image: ImageData;
  descriptionOne: TextData;
  descriptionTwo: TextData;
  descriptionThree: TextData;
};

export type AboutSevenData = {
  image: ImageData;
  description: TextData,
  config: AboutSevenConfig;
};

export type GenericAboutConfig =
  | AboutFiveConfig
  | AboutSevenConfig

  // | OurSolutionTwoConfig