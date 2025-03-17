import { TextData } from '../../types';

export enum TermsAndServicesComponentName {
  TERMS_AND_SERVICES_ONE = 'TERMS_AND_SERVICES_ONE',
  TERMS_AND_SERVICES_TWO = 'TERMS_AND_SERVICES_TWO',
  TERMS_AND_SERVICES_THREE = 'TERMS_AND_SERVICES_THREE',
  TERMS_AND_SERVICES_FOUR = 'TERMS_AND_SERVICES_FOUR',
  TERMS_AND_SERVICES_FIVE = 'TERMS_AND_SERVICES_FIVE',
}

export type TermsAndServicesComponentNameType = `${TermsAndServicesComponentName}`;

export type TermsAndServicesItemData = {
  title: string;
  description: string;
};

export type TermsAndServicesConfig = {
  titleTextColor: string;
  descriptionTextColor: string;
  items: TermsAndServicesItemData[];
};

type TermsAndServicesData = {
  title: TextData;
  description: TextData;
  config: TermsAndServicesConfig;
};

export type TermsAndServicesOneData = TermsAndServicesData;

export type TermsAndServicesTwoData = {
  title: TextData;
  parabraph1: TextData;
  subtitle: TextData;
  parabraph2: TextData;
};

export type TermsAndServicesThreeData = TermsAndServicesData;

export type TermsAndServicesFourData = TermsAndServicesData;

export type TermsAndServicesFiveData = {
  config: TermsAndServicesConfig;
};