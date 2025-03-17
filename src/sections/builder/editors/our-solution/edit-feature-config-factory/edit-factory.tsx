import { Theme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import {
  OurSolutionComponentName,
  OurSolutionConfig,
  OurSolutionTwoConfig,
} from 'src/sections/builder/components/our-solution/types';

// eslint-disable-next-line import/no-cycle
const FeatureEditConfig = dynamic(() => import('./edit-our-solution-config'), { ssr: false });
// eslint-disable-next-line import/no-cycle
const OurSolutionTwoEditConfig = dynamic(() => import('./edit-our-solution-two-config'), {
  ssr: false,
});

export type OptionType = { label: string; value: string };
type OurSolutionComponentMapping = {
  [OurSolutionComponentName.OUR_SOLUTION_ONE]: OurSolutionConfig;
  [OurSolutionComponentName.OUR_SOLUTION_TWO]: OurSolutionTwoConfig;
};

type ComponentProps<T extends keyof OurSolutionComponentMapping> = {
  name: OurSolutionComponentName;
  defaultValue: OurSolutionComponentMapping[T];
  onSave: (value: OurSolutionComponentMapping[T]) => void;
  onCloseClicked: () => void;
  theme: Theme;
};

export default function EditFactory<T extends keyof OurSolutionComponentMapping>({
  name,
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: ComponentProps<T>) {
  switch (name) {
    // case FeatureComponentName.FEATURE_THREE:
    //   return (
    //     <EditFeatureThreeConfig
    //       defaultValue={defaultValue as FeatureThreeConfig}
    //       onSave={onSave as (value: FeatureThreeConfig) => void}
    //       onCloseClicked={onCloseClicked}
    //       theme={theme}
    //     />
    //   );
    // case FeatureComponentName.FEATURE_SEVEN:
    //   return (
    //     <EditFeatureSevenConfig
    //       defaultValue={defaultValue as FeatureSevenConfig}
    //       onSave={onSave as (value: FeatureSevenConfig) => void}
    //       onCloseClicked={onCloseClicked}
    //       theme={theme}
    //     />
    //   );
    // case FeatureComponentName.FEATURE_NINE:
    //   return (
    //     <EditFeatureNineConfig
    //       defaultValue={defaultValue as FeatureNineConfig}
    //       onSave={onSave as (value: FeatureNineConfig) => void}
    //       onCloseClicked={onCloseClicked}
    //       theme={theme}
    //     />
    //   );
    case OurSolutionComponentName.OUR_SOLUTION_TWO:
      return (
        <OurSolutionTwoEditConfig
          defaultValue={defaultValue as OurSolutionTwoConfig}
          onSave={onSave as (value: OurSolutionTwoConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    default:
      return (
        <FeatureEditConfig
          defaultValue={defaultValue as OurSolutionConfig}
          onSave={onSave as (value: OurSolutionConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
          name={name}
        />
      );
  }
}
