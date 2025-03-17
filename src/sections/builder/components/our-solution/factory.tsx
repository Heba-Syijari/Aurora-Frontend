import dynamic from 'next/dynamic';
import { OurSolutionFourProps } from './our-solution-four/our-solution-four';
import { OurSolutionOneProps } from './our-solution-one/our-solution-one';
import { OurSolutionThreeProps } from './our-solution-three/our-solution-three';
import { OurSolutionTwoProps } from './our-solution-two/our-solution-two';
import { OurSolutionComponentName } from './types';

const OurSolutionOne = dynamic(() => import('./our-solution-one/our-solution-one'), { ssr: false });
const OurSolutionTwo = dynamic(() => import('./our-solution-two/our-solution-two'), { ssr: false });
const OurSolutionThree = dynamic(() => import('./our-solution-three/our-solution-three'), {
  ssr: false,
});
const OurSolutionFour = dynamic(() => import('./our-solution-four/our-solution-four'), {
  ssr: false,
});

type ComponentProps =
  | (OurSolutionOneProps & {
      name: OurSolutionComponentName.OUR_SOLUTION_ONE;
    })
  | (OurSolutionTwoProps & {
      name: OurSolutionComponentName.OUR_SOLUTION_TWO;
    })
  | (OurSolutionThreeProps & {
      name: OurSolutionComponentName.OUR_SOLUTION_THREE;
    })
  | (OurSolutionFourProps & {
      name: OurSolutionComponentName.OUR_SOLUTION_FOUR;
    });

type Props = ComponentProps & {
  editMode?: boolean;
};

export default function OurSoulutionsFactory({ name, data, setLocalData, ...rest }: Props) {
  switch (name) {
    case OurSolutionComponentName.OUR_SOLUTION_ONE:
      return <OurSolutionOne data={data} setLocalData={setLocalData} {...rest} />;

    case OurSolutionComponentName.OUR_SOLUTION_TWO:
      return <OurSolutionTwo data={data} setLocalData={setLocalData} {...rest} />;

    case OurSolutionComponentName.OUR_SOLUTION_THREE:
      return <OurSolutionThree data={data} setLocalData={setLocalData} {...rest} />;

    case OurSolutionComponentName.OUR_SOLUTION_FOUR:
      return <OurSolutionFour data={data} setLocalData={setLocalData} {...rest} />;

    default:
      return null;
  }
}
