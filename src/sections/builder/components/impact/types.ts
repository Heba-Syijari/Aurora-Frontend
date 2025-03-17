import { ImageData, TextData } from '../../types';

export enum ImpactComponentName {
  IMPACT_ONE = 'IMPACT_ONE',
  IMPACT_TWO = 'IMPACT_TWO',
  IMPACT_THREE = 'IMPACT_THREE',
  IMPACT_FOUR = 'IMPACT_FOUR',
}

export type ImpactComponentNameType = `${ImpactComponentName}`;

export type ImpactItemData = {
  title: string;
  description: string;
};

export type ImpactConfig = {
  titleTextColor: string;
  descriptionTextColor: string;
  impacts: ImpactItemData[];
};

export type ImpactData = {
  title: TextData;
  description: TextData;
  image: ImageData;
  config: ImpactConfig;
};

export type ImpactOneData = ImpactData;

export type ImpactTwoData = ImpactData;

export type ImpactThreeData = Omit<ImpactData, 'image'>;

export type ImpactFourData = ImpactData;
