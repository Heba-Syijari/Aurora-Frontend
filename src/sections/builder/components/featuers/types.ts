import { ButtonData, ImageData, TextData } from '../../types';

export enum FeatureComponentName {
  FEATURE_ONE = 'FEATURE_ONE',
  FEATURE_TWO = 'FEATURE_TWO',
  FEATURE_THREE = 'FEATURE_THREE',
  FEATURE_FOUR = 'FEATURE_FOUR',
  FEATURE_FIVE = 'FEATURE_FIVE',
  FEATURE_SIX = 'FEATURE_SIX',
  FEATURE_SEVEN = 'FEATURE_SEVEN',
  FEATURE_EIGHT = 'FEATURE_EIGHT',
  FEATURE_NINE = 'FEATURE_NINE',
  FEATURE_TEN = 'FEATURE_TEN',
  FEATURE_THIRTEEN = 'FEATURE_THIRTEEN',
  // add the 11th and 12th Layout
  FEATURE_ELEVEN = 'FEATURE_ELEVEN',
  FEATURE_TWELVE = 'FEATURE_TWELVE',
}

export type FeatureConfig = {
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
  features: FeatureItemData[];
};

export type FeatureItemData = {
  title: string;
  description: string;
  icon: string;
};
export type FeatureData = {
  title: TextData;
  postTitle?: TextData;
  config: FeatureConfig;
};

export type Services = {
  servicesTitle: TextData;
  button: ButtonData;
  servicesCongig: ServicesConfig;
};
export type ServicesConfig = {
  servicesColor: string;
  services: string[];
};
export type FeaureOneData = FeatureData;
export type FeaureOneItemData = FeatureItemData;

export type FeaureTwoData = FeatureData & Services;
export type FeaureTwoItemData = FeatureItemData;

export type FeatureThreeItemData = FeatureItemData & { image: string };
export type FeatureThreeConfig = {
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
  features: FeatureThreeItemData[];
};
export type FeatureThreeData = {
  title: TextData;
  subTitle?: TextData;
  config: FeatureThreeConfig;
};

export type FeaureFourData = FeatureData & {
  images: [ImageData, ImageData];
};
export type FeaureFourItemData = FeatureItemData;

export type FeaureFiveData = FeatureData;
export type FeaureFiveItemData = FeatureItemData;

export type FeaureSixData = FeatureData;
export type FeaureSixItemData = FeatureItemData;

export type FeatureSevenConfig = {
  lightTextColor: string;
  darkTextColor: string;
  lightBackgroundColor: string;
  darkbackgroundColor: string;
  features: FeatureItemData[];
};

export type FeaureSevenData = {
  title: TextData;
  config: FeatureSevenConfig;
};
export type FeaureSevenItemData = FeatureItemData;

export type FeaureEightData = FeatureData;
export type FeaureEightItemData = FeatureItemData;

export type FeatureNineConfig = {
  lightColor: string;
  darkColor: string;
  features: FeatureItemData[];
};

export type FeaureNineData = {
  title: TextData;
  config: FeatureNineConfig;
};
export type FeaureNineItemData = FeatureItemData;

export type FeatureTenConfig = {
  lightTextColor: string;
  darkTextColor: string;
  lightBackgroundColor: string;
  darkbackgroundColor: string;
  features: FeatureItemData[];
};


export type FeaureTenData = {
  title: TextData;
  image: ImageData;
  config: FeatureTenConfig;
};
export type FeaureTenItemData = FeatureItemData;
export type FeaureThirteenItemData = FeatureItemData;

export type FeaureThirteenData = {
  title: TextData;
  subtitle: TextData;
  description: TextData;
  config: FeatureConfig;
};

// Add 11  Layout data
export type FeatureElevenData = FeatureData;

export type FeatureElevenItemData = FeatureItemData;

// Add 12 Layout data
export type FeatureTwelveData = FeatureData & { postTitle: TextData };

export type FeatureTwelveItemData = FeatureItemData;

export type GenericFeatureConfig =
  | FeatureSevenConfig
  | FeatureConfig
  | FeatureThreeConfig
  | FeatureNineConfig;
export type FeatureComponentNameType = `${FeatureComponentName}`;
