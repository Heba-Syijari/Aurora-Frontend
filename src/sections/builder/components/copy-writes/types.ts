import { TextData } from '../../types';

export enum CopyWriteComponentName {
  COPY_WRITE_ONE = 'COPY_WRITE_ONE',
  COPY_WRITE_TWO = 'COPY_WRITE_TWO',
  COPY_WRITE_THREE = 'COPY_WRITE_THREE',
  COPY_WRITE_FOUR = 'COPY_WRITE_FOUR',
}

export type copyWriteComponentNameType = `${CopyWriteComponentName}`;

export type CopyWriteItemData = {
  title: string;
  description: string;
};

export type CopyWriteConfig = {
  titleTextColor: string;
  descriptionTextColor: string;
  items: CopyWriteItemData[];
};

type CopyWriteData = {
  title: TextData;
  description: TextData;
  config: CopyWriteConfig;
};

export type CopyWriteOneData = CopyWriteData;

export type CopyWriteTwoData = {
  title: TextData;
  parabraph1: TextData;
  subtitle: TextData;
  parabraph2: TextData;
};

export type CopyWriteThreeData = CopyWriteData;

export type CopyWriteFourData = CopyWriteData;
