import dynamic from 'next/dynamic';

import { SliderOneProps } from './slider-one/slider-one';
import { SliderComponentName } from './types';

const SliderOne = dynamic(() => import('./slider-one'), { ssr: false });

type ComponentProps =
  | SliderOneProps & {
      name: SliderComponentName.SLIDER_ONE;
    };

type Props = ComponentProps & {
  editMode?: boolean;
};

export default function TeamFactory({ name, data, setLocalData, ...rest }: Props) {
  switch (name) {
    case SliderComponentName.SLIDER_ONE:
      return <SliderOne data={data} setLocalData={setLocalData} {...rest} />;

    default:
      return null;
  }
}
