import dynamic from 'next/dynamic';
import { SpecialTimesOneProps } from './special-times-one';
import { SpecialTimesThreeProps } from './special-times-three';
import { SpecialTimesTwoProps } from './special-times-two';
import { SpecialTimesComponentName } from './types';

const SpecialTimesOne = dynamic(() => import('./special-times-one'), { ssr: false });
const SpecialTimesTwo = dynamic(() => import('./special-times-two'), { ssr: false });
const SpecialTimesThree = dynamic(() => import('./special-times-three'), { ssr: false });

type ComponentProps =
  | (SpecialTimesOneProps & {
      name: SpecialTimesComponentName.SPECIAL_TIMES_ONE;
    })
  | (SpecialTimesTwoProps & {
      name: SpecialTimesComponentName.SPECIAL_TIMES_TWO;
    })
  | (SpecialTimesThreeProps & {
      name: SpecialTimesComponentName.SPECIAL_TIMES_THREE;
    });

type Props = ComponentProps & {
  editMode?: boolean;
};

export default function SpecialTimesFactory({ name, data, ...rest }: Props) {
  switch (name) {
    case SpecialTimesComponentName.SPECIAL_TIMES_ONE:
      return <SpecialTimesOne data={data} {...rest} />;

    case SpecialTimesComponentName.SPECIAL_TIMES_TWO:
      return <SpecialTimesTwo data={data} {...rest} />;

    case SpecialTimesComponentName.SPECIAL_TIMES_THREE:
      return <SpecialTimesThree data={data} {...rest} />;

    default:
      return null;
  }
}
