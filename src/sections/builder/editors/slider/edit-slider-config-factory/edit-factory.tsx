import { Theme } from '@mui/material/styles';
import dynamic from 'next/dynamic';

import { SilderOneConfig, SliderComponentName } from 'src/sections/builder/components/slider/types';

const EditSliderOneConfig = dynamic(() => import('./edit-slider-one-config'), { ssr: false });

type SliderComponentMapping = {
  [SliderComponentName.SLIDER_ONE]: SilderOneConfig;
};

type ComponentProps<T extends SliderComponentName> = {
  name: T;
  defaultValue: SliderComponentMapping[T];
  onSave: (value: SliderComponentMapping[T]) => void;
  onCloseClicked: () => void;
  theme: Theme;
};

export default function EditFactory<T extends SliderComponentName>({
  name,
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: ComponentProps<T>) {
  switch (name) {
    case SliderComponentName.SLIDER_ONE:
      return (
        <EditSliderOneConfig
          defaultValue={defaultValue as SilderOneConfig}
          onSave={onSave as (value: SilderOneConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );

    default:
      // eslint-disable-next-line react/jsx-no-useless-fragment
      return <></>;
  }
}
