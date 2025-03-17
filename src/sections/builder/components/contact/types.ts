// eslint-disable-next-line import/no-extraneous-dependencies
import { Point } from 'pigeon-maps';
import { ButtonData, ImageData, TextData } from '../../types';
import { Socials } from '../common/socials/types';

export enum ContactComponentName {
  CONTACT_ONE = 'CONTACT_ONE',
  CONTACT_TWO = 'CONTACT_TWO',
  CONTACT_THREE = 'CONTACT_THREE',
  CONTACT_FOUR = 'CONTACT_FOUR',
  // edits by hsn
  CONTACT_FIVE = 'CONTACT_FIVE',
  CONTACT_SIX = 'CONTACT_SIX',
  CONTACT_SEVEN = 'CONTACT_SEVEN',
}

export type ContactComponentNameType = `${ContactComponentName}`;

export type ConatctInfo = {
  address: {
    city: TextData;
    streetAddress: TextData;
  };
  number: TextData;
  email: TextData;
};

export type Shift = { days: TextData; hours: TextData };
export type OpeningHours = {
  workTimes: Shift;
  firstHoliday: Shift;
  secondHoliday: Shift;
};

export type MapConfig = {
  markerColor: string;
  markerPosition: Point;
};

export type ContactData = {
  title: TextData;
  socialsConfig: { socials: Socials; socialIconsColor: string };
  button: ButtonData;
  openingHours: OpeningHours;
  mapConfig: MapConfig;
} & ConatctInfo;

export type ContactTwoData = Omit<ContactData, 'openingHours' | 'markerPosition'>;
export type ContactOneData = Omit<ContactData, 'button'>;
export type ContactThreeData = {
  number: TextData;
  email: TextData;
  backgroundColor: string;
  socialsConfig: { socials: Socials; socialIconsColor: string };
};
export type ContactFourData = {
  socialsConfig: { socials: Socials; socialIconsColor: string };
} & ConatctInfo;

// add five , six and seven data
export type ContactFiveData = {
  title: TextData;
  number: TextData;
  email: TextData;
  button: ButtonData;
  titleCardOne: TextData,
  titleCardTwo: TextData
};
export type ContactSixData = {
  title: TextData;
  subtitle: TextData;
  number: TextData;
  WhatsApp: TextData;
  telegram: TextData;
  email: TextData;
  button: ButtonData;
};
export type ContactSevenData = {
  title: TextData;
  imageTitle: TextData;
  imageSubTitle: TextData;
  backGroundImage: ImageData;
  number: TextData;
  WhatsApp: TextData;
  email: TextData;
  description: TextData;
  button: ButtonData;
};
