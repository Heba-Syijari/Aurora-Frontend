import { ImageData, TextData } from '../../types';

export enum ImportanceComponentName {
  IMPORTANCE_ONE = 'IMPORTANCE_ONE',
  IMPORTANCE_TWO = 'IMPORTANCE_TWO',
}

export type ImportanceComponentNameType = `${ImportanceComponentName}`;

export type ImportanceItemData = {
  title: TextData;
  description: TextData;
  image: ImageData;
};

export type ImportanceData = {
  topic: TextData;
  title: TextData;
  items: ImportanceItemData[];
};

export type ImportanceOneData = ImportanceData;

export type ImportanceTwoData = ImportanceData;
