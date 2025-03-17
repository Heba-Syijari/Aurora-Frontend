import dynamic from 'next/dynamic';
import { AboutFiveProps } from './about-five/about-five';
import { AboutFourProps } from './about-four/about-four';
import { AboutOneProps } from './about-one/about-one';
import { AboutSevenProps } from './about-seven/about-seven';
import { AboutSixProps } from './about-six/about-six';
import { AboutThreeProps } from './about-three/about-three';
import { AboutTwoProps } from './about-two/about-two';
import { AboutComponentName } from './types';

const AboutOne = dynamic(() => import('./about-one'), { ssr: false });
const AboutTwo = dynamic(() => import('./about-two'), { ssr: false });
const AboutThree = dynamic(() => import('./about-three'), { ssr: false });
const AboutFour = dynamic(() => import('./about-four'), { ssr: false });
const AboutFive = dynamic(() => import('./about-five'), { ssr: false });
const AboutSix = dynamic(() => import('./about-six'), { ssr: false });
const AboutSeven = dynamic(() => import('./about-seven'), { ssr: false });

type ComponentProps =
  | (AboutOneProps & {
      name: AboutComponentName.ABOUT_ONE;
    })
  | (AboutTwoProps & {
      name: AboutComponentName.ABOUT_TWO;
    })
  | (AboutThreeProps & {
      name: AboutComponentName.ABOUT_THREE;
    })
  | (AboutFourProps & {
      name: AboutComponentName.ABOUT_FOUR;
    })
  | (AboutFiveProps & {
      name: AboutComponentName.ABOUT_FIVE;
    })
  | (AboutSixProps & {
      name: AboutComponentName.ABOUT_SIX;
    })
  | (AboutSevenProps & {
      name: AboutComponentName.ABOUT_SEVEN;
    });

type Props = ComponentProps & {
  editMode?: boolean;
};

export default function AboutFactory({ name, data, setLocalData, ...rest }: Props) {
  switch (name) {
    case AboutComponentName.ABOUT_ONE:
      return <AboutOne data={data} setLocalData={setLocalData} {...rest} />;

    case AboutComponentName.ABOUT_TWO:
      return <AboutTwo data={data} setLocalData={setLocalData} {...rest} />;

    case AboutComponentName.ABOUT_THREE:
      return <AboutThree data={data} setLocalData={setLocalData} {...rest} />;

    case AboutComponentName.ABOUT_FOUR:
      return <AboutFour data={data} setLocalData={setLocalData} {...rest} />;

    case AboutComponentName.ABOUT_FIVE:
      return <AboutFive data={data} setLocalData={setLocalData} {...rest} />;

    case AboutComponentName.ABOUT_SIX:
      return <AboutSix data={data} setLocalData={setLocalData} {...rest} />;

    case AboutComponentName.ABOUT_SEVEN:
      return <AboutSeven data={data} setLocalData={setLocalData} {...rest} />;

    default:
      return null;
  }
}
