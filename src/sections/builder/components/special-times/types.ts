import { ImageData, TextData } from '../../types';

export enum SpecialTimesComponentName {
  SPECIAL_TIMES_ONE = 'SPECIAL_TIMES_ONE',
  SPECIAL_TIMES_TWO = 'SPECIAL_TIMES_TWO',
  SPECIAL_TIMES_THREE = 'SPECIAL_TIMES_THREE',
}

export type SpecialTimesComponentNameType = `${SpecialTimesComponentName}`;

export type SpecialTimesData = {
  topic: TextData;
  title: TextData;
  description: TextData;
};

export type SpecialTimesOneData = SpecialTimesData;

export type SpecialTimesTwoData = SpecialTimesData;

export type SpecialTimesThreeData = SpecialTimesData & {
  image: ImageData;
};
