import { ButtonData, TextData } from '../../types';

export enum SubscriptionComponentName {
  SUBSCRIPTION_ONE = 'SUBSCRIPTION_ONE',
  SUBSCRIPTION_TWO = 'SUBSCRIPTION_TWO',
  SUBSCRIPTION_THREE = 'SUBSCRIPTION_THREE',
  SUBSCRIPTION_FOUR = 'SUBSCRIPTION_FOUR',
  SUBSCRIPTION_FIVE = 'SUBSCRIPTION_FIVE',
  SUBSCRIPTION_SIX = 'SUBSCRIPTION_SIX',
}

export type SubscriptionItem = {
  title: string;
  price: string;
  period: string;
  features: string[];
  button?: ButtonData;
};

export type BaseSubscriptionConfig = {
  titleTextColor: string;
  priceTextColor: string;
  periodTextColor: string;
  featuresTextColor: string;
};

export type SubscriptionConfig = BaseSubscriptionConfig & {
  subscriptions: SubscriptionItem[];
};

export type SubscriptionData = {
  title: TextData;
  subtitle: TextData;
  config: SubscriptionConfig;
};

export type SubscriptionOneItemData = SubscriptionItem & {
  description: string;
};

export type SubscriptionOneConfig = BaseSubscriptionConfig & {
  descriptionTextColor: string;
  subscriptions: SubscriptionOneItemData[];
};

export type SubscriptionOneData = {
  title: TextData;
  config: SubscriptionOneConfig;
};

export type SubscriptionTwoItemData = SubscriptionItem & {
  icon: string;
};

export type SubscriptionTwoConfig = BaseSubscriptionConfig & {
  iconColor: string;
  subscriptions: SubscriptionTwoItemData[];
};

export type SubscriptionTwoData = {
  title: TextData;
  subtitle: TextData;
  config: SubscriptionTwoConfig;
};

export type SubscriptionThreeData = SubscriptionData;
export type SubscriptionThreeConfig = SubscriptionConfig;
export type SubscriptionThreeItemData = SubscriptionItem;

export type SubscriptionFourItemData = SubscriptionItem & {
  description: string;
  icon: string;
};

export type SubscriptionFourConfig = BaseSubscriptionConfig & {
  descriptionTextColor: string;
  iconColor: string;
  subscriptions: SubscriptionFourItemData[];
};

export type SubscriptionFourData = {
  title: TextData;
  subtitle: TextData;
  config: SubscriptionFourConfig;
};

export type SubscriptionFiveItemData = SubscriptionItem;
export type SubscriptionFiveConfig = BaseSubscriptionConfig & {
  iconColor: string;
  subscriptions: SubscriptionFiveItemData[];
};

export type SubscriptionFiveData = {
  title: TextData;
  subtitle: TextData;
  config: SubscriptionFiveConfig;
};

export type SubscriptionSixItemData = SubscriptionItem & {
  subtitle: string;
  description: string;
};

export type SubscriptionSixConfig = BaseSubscriptionConfig & {
  subtitleTextColor: string;
  descriptionTextColor: string;
  subscriptions: SubscriptionSixItemData[];
};

export type SubscriptionSixData = {
  title: TextData;
  subtitle: TextData;
  description: TextData;
  config: SubscriptionSixConfig;
};

export type GenericSubscriptionConfig =
  | SubscriptionConfig
  | SubscriptionOneConfig
  | SubscriptionTwoConfig
  | SubscriptionFourConfig
  | SubscriptionThreeConfig
  | SubscriptionFiveConfig
  | SubscriptionSixConfig;

export type SubscriptionComponentNameType = `${SubscriptionComponentName}`;
