import { Theme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import {
  FeatureComponentName,
  FeatureConfig,
  FeatureNineConfig,
  FeatureSevenConfig,
  FeatureThreeConfig,
} from 'src/sections/builder/components/featuers/types';

// eslint-disable-next-line import/no-cycle
const FeatureEditConfig = dynamic(() => import('./edit-feature-config'), { ssr: false });
// eslint-disable-next-line import/no-cycle
const EditFeatureThreeConfig = dynamic(() => import('./edit-feature-three-config'), { ssr: false });
// eslint-disable-next-line import/no-cycle
const EditFeatureSevenConfig = dynamic(() => import('./edit-feature-seven-config'), { ssr: false });
// eslint-disable-next-line import/no-cycle
const EditFeatureNineConfig = dynamic(() => import('./edit-feature-nine-config'), { ssr: false });

export type OptionType = { label: string; value: string };
type FeatureComponentMapping = {
  [FeatureComponentName.FEATURE_ONE]: FeatureConfig;
  [FeatureComponentName.FEATURE_TWO]: FeatureConfig;
  [FeatureComponentName.FEATURE_THREE]: FeatureThreeConfig;
  [FeatureComponentName.FEATURE_FOUR]: FeatureConfig;
  [FeatureComponentName.FEATURE_FIVE]: FeatureConfig;
  [FeatureComponentName.FEATURE_SIX]: FeatureConfig;
  [FeatureComponentName.FEATURE_SEVEN]: FeatureSevenConfig;
  [FeatureComponentName.FEATURE_EIGHT]: FeatureConfig;
  [FeatureComponentName.FEATURE_NINE]: FeatureNineConfig;
  [FeatureComponentName.FEATURE_ELEVEN]: FeatureConfig;
};

type ComponentProps<T extends keyof FeatureComponentMapping> = {
  name: FeatureComponentName;
  defaultValue: FeatureComponentMapping[T];
  onSave: (value: FeatureComponentMapping[T]) => void;
  onCloseClicked: () => void;
  theme: Theme;
};

export default function EditFactory<T extends keyof FeatureComponentMapping>({
  name,
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: ComponentProps<T>) {
  switch (name) {
    case FeatureComponentName.FEATURE_THREE:
      return (
        <EditFeatureThreeConfig
          defaultValue={defaultValue as FeatureThreeConfig}
          onSave={onSave as (value: FeatureThreeConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    case FeatureComponentName.FEATURE_SEVEN:
      return (
        <EditFeatureSevenConfig
          defaultValue={defaultValue as FeatureSevenConfig}
          onSave={onSave as (value: FeatureSevenConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    case FeatureComponentName.FEATURE_NINE:
      return (
        <EditFeatureNineConfig
          defaultValue={defaultValue as FeatureNineConfig}
          onSave={onSave as (value: FeatureNineConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    case FeatureComponentName.FEATURE_TEN:
      return (
        <EditFeatureSevenConfig
          defaultValue={defaultValue as FeatureSevenConfig}
          onSave={onSave as (value: FeatureSevenConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    default:
      return (
        <FeatureEditConfig
          defaultValue={defaultValue as FeatureConfig}
          onSave={onSave as (value: FeatureConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
          name={name}
        />
      );
  }
}
