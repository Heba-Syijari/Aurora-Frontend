import { TextData } from '../../types';

export enum PrivacyPolicyComponentName {
  PRIVACY_POLICY_ONE = 'PRIVACY_POLICY_ONE',
  PRIVACY_POLICY_TWO = 'PRIVACY_POLICY_TWO',
  PRIVACY_POLICY_THREE = 'PRIVACY_POLICY_THREE',
  PRIVACY_POLICY_FOUR = 'PRIVACY_POLICY_FOUR',
}

export type PrivacyPolicyComponentNameType = `${PrivacyPolicyComponentName}`;

export type PrivacyPolicyItemData = {
  title: string;
  description: string;
};

export type PrivacyPolicyConfig = {
  titleTextColor: string;
  descriptionTextColor: string;
  items: PrivacyPolicyItemData[];
};

type PrivacyPolicyData = {
  title: TextData;
  description: TextData;
  config: PrivacyPolicyConfig;
};

export type PrivacyPolicyOneData = PrivacyPolicyData;

export type PrivacyPolicyTwoData = {
  title: TextData;
  parabraph1: TextData;
  subtitle: TextData;
  parabraph2: TextData;
};

export type PrivacyPolicyThreeData = PrivacyPolicyData;

export type PrivacyPolicyFourData = PrivacyPolicyData;
