import { TextData } from '../../types';

export enum SliderComponentName {
  SLIDER_ONE = 'SLIDER_ONE',
}

export type SliderOneItemData = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export type SilderOneConfig = {
  titleTextColor: string;
  subtitleTextColor: string;
  descriptionTextColor: string;
  slides: SliderOneItemData[];
};

export type SliderOneData = { title: TextData; config: SilderOneConfig };
export type GenericSliderConfig = SilderOneConfig;
export type SliderComponentNameType = `${SliderComponentName}`;
