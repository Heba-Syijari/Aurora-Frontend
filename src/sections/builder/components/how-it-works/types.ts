import { TextData } from '../../types';

export enum HowItWorksComponentName {
  HOW_IT_WORKS_ONE = 'HOW_IT_WORKS_ONE',
}

export type HowItWorksOneItemData = {
  title: TextData;
  description: TextData;
};

export type HowItWorksOneData = { title: TextData; stages: HowItWorksOneItemData[] };

export type HowItWorksComponentNameType = `${HowItWorksComponentName}`;
