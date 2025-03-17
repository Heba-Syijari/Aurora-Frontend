import dynamic from 'next/dynamic';
import { ImpactFourProps } from './impact-four/impact-four';
import { ImpactOneProps } from './impact-one/impact-one';
import { ImpactThreeProps } from './impact-three/impact-three';
import { ImpactTwoProps } from './impact-two/impact-two';
import { ImpactComponentName } from './types';

const ImpactOne = dynamic(() => import('./impact-one'), { ssr: false });
const ImpactTwo = dynamic(() => import('./impact-two'), { ssr: false });
const ImpactThree = dynamic(() => import('./impact-three'), { ssr: false });
const ImpactFour = dynamic(() => import('./impact-four'), { ssr: false });

type ComponentProps =
  | (ImpactOneProps & {
      name: ImpactComponentName.IMPACT_ONE;
    })
  | (ImpactTwoProps & {
      name: ImpactComponentName.IMPACT_TWO;
    })
  | (ImpactThreeProps & {
      name: ImpactComponentName.IMPACT_THREE;
    })
  | (ImpactFourProps & {
      name: ImpactComponentName.IMPACT_FOUR;
    });

type Props = ComponentProps & {
  editMode?: boolean;
};

export default function ImpactFactory({ name, data, ...rest }: Props) {
  switch (name) {
    case ImpactComponentName.IMPACT_ONE:
      return <ImpactOne data={data} {...rest} />;

    case ImpactComponentName.IMPACT_TWO:
      return <ImpactTwo data={data} {...rest} />;

    case ImpactComponentName.IMPACT_THREE:
      return <ImpactThree data={data} {...rest} />;

    case ImpactComponentName.IMPACT_FOUR:
      return <ImpactFour data={data} {...rest} />;

    default:
      return null;
  }
}
