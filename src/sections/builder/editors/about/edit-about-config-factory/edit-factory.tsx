import { Theme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import {
  AboutComponentName,
  AboutFiveConfig,
  AboutSevenConfig,
} from 'src/sections/builder/components/about/types';

// eslint-disable-next-line import/no-cycle
const AboutFiveEditConfig = dynamic(() => import('./edit-about-five-config'), { ssr: false });
const AboutSevenEditConfig = dynamic(() => import('./edit-about-seven-config'), { ssr: false });

export type OptionType = { label: string; value: string };
type AboutComponentMapping = {
  [AboutComponentName.ABOUT_FIVE]: AboutFiveConfig;
  [AboutComponentName.ABOUT_SEVEN]: AboutSevenConfig;
};

type ComponentProps<T extends keyof AboutComponentMapping> = {
  name: AboutComponentName;
  defaultValue: AboutComponentMapping[T];
  onSave: (value: AboutComponentMapping[T]) => void;
  onCloseClicked: () => void;
  theme: Theme;
};

export default function EditFactory<T extends keyof AboutComponentMapping>({
  name,
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: ComponentProps<T>) {
  switch (name) {
    case AboutComponentName.ABOUT_FIVE:
      return (
        <AboutFiveEditConfig
          defaultValue={defaultValue as AboutFiveConfig}
          onSave={onSave as (value: AboutFiveConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
          name={name}
        />
      );
    case AboutComponentName.ABOUT_SEVEN:
      return (
        <AboutSevenEditConfig
          defaultValue={defaultValue as AboutFiveConfig}
          onSave={onSave as (value: AboutSevenConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
          name={name}
        />
      );
    default:
      return (
        <AboutFiveEditConfig
          defaultValue={defaultValue as AboutFiveConfig}
          onSave={onSave as (value: AboutFiveConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
          name={name}
        />
      );
  }
}
