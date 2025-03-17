import { LogoType } from 'src/sections/generator/view/types';
import { ButtonData, ImageData, TextData } from '../../types';
import { SocialData } from '../common/socials/types';

export enum FooterComponentName {
  FOOTER_ONE = 'FOOTER_ONE',
  FOOTER_TWO = 'FOOTER_TWO',
  FOOTER_THREE = 'FOOTER_THREE',
  FOOTER_FOUR = 'FOOTER_FOUR',
  FOOTER_FIVE = 'FOOTER_FIVE',
  FOOTER_SIX = 'FOOTER_SIX',
  FOOTER_SEVEN = 'FOOTER_SEVEN',
  FOOTER_EIGHT = 'FOOTER_EIGHT',
  FOOTER_NINE = 'FOOTER_NINE',
  FOOTER_TEN = 'FOOTER_TEN',
  FOOTER_ELEVEN = 'FOOTER_ELEVEN',
  FOOTER_TWELEV = 'FOOTER_TWELVE',
  FOOTER_THIRTEEN = 'FOOTER_THIRTEEN',
  FOOTER_FOURTEEN = 'FOOTER_FOURTEEN',
}

export type FooterComponentNameType = `${FooterComponentName}`;

export type FooterData = {
  logoType: LogoType;
  logoValue: string;
  projectName: string;
  backgroundColor: string;
  textColor: string;
};

export type FooterConfig = {
  backgroundColor: string;
  textColor: string;
};

export type MenusConfig = {
  headingColor: string;
  childrenColor: string;
};

export type FooterOneData = {
  projectDescription: TextData;
  socialsConfig: SocialData;
  copyRights: TextData;
  menusCongig: MenusConfig;
};

export type FooterTwoData = {
  socialsConfig: SocialData;
  copyRights: TextData;
  menusCongig: MenusConfig;
};

export type FooterThreeData = {
  socialsConfig: SocialData;
  copyRights: TextData;
  email: TextData;
  number: TextData;
  address: TextData;
  menusCongig: MenusConfig;
};

export type FooterFourData = {
  socialsConfig: SocialData;
  copyRights: TextData;
  email: TextData;
  number: TextData;
  address: TextData;
  latestNews: { image: ImageData; description: TextData }[];
  images: ImageData[];
  menusCongig: MenusConfig;
};

export type FooterFiveData = {
  socialsConfig: SocialData;
  copyRights: TextData;
  title: TextData;
  button: ButtonData;
  subtitle: TextData;
  menusCongig: MenusConfig;
};

export type FooterSixData = {
  copyRights: TextData;
  projectName: TextData;
  menusCongig: MenusConfig;
};

export type FooterSevenData = {
  socialsConfig: SocialData;
  copyRights: TextData;
  menusCongig: MenusConfig;
  projectName: TextData;
  projectDescription: TextData;
  button: ButtonData;
};

export type FooterEightData = {
  socialsConfig: SocialData;
  copyRights: TextData;
  menusCongig: MenusConfig;
  projectName: TextData;
};

export type FooterNineData = {
  socialsConfig: SocialData;
  copyRights: TextData;
  menusCongig: MenusConfig;
  projectDescription: TextData;
};

export type FooterTenData = {
  projectDescription: TextData;
  image: ImageData;
  button: ButtonData;
};

export type FooterElevenData = {
  subtitle: TextData;
  title: TextData;
  button: ButtonData;
  socialsConfig: SocialData;
  copyRights: TextData;
  menusCongig: MenusConfig;
};

export type FooterTwelveData = {
  subtitle: TextData;
  title: TextData;
  button: ButtonData;
  socialsConfig: SocialData;
  copyRights: TextData;
  menusCongig: MenusConfig;
};

export type FooterFourteenData = {
  socialsConfig: SocialData;
  copyRights: TextData;
  menusCongig: MenusConfig;
};


export type FooterThirteenData = Omit<FooterElevenData, 'button'>;
