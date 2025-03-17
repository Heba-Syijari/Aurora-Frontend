import dynamic from 'next/dynamic';
import {
  HeroComponentName,
  HeroEightData,
  HeroElevenData,
  HeroFiveData,
  HeroFourData,
  HeroNineData,
  HeroOneData,
  HeroSevenData,
  HeroSixData,
  HeroTenData,
  HeroThreeData,
  HeroTwoData,
} from './types';

const HeroOne = dynamic(() => import('./hero-one'), { ssr: false });
const HeroTwo = dynamic(() => import('./hero-two'), { ssr: false });
const HeroThree = dynamic(() => import('./hero-three'), { ssr: false });
const HeroFour = dynamic(() => import('./hero-four'), { ssr: false });
const HeroFive = dynamic(() => import('./hero-five'), { ssr: false });
// ------------------ HSN edits : add more section  ----------------------
const HeroSix = dynamic(() => import('./hero-six'), { ssr: false });
const HeroSeven = dynamic(() => import('./hero-seven'), { ssr: false });
const HeroEight = dynamic(() => import('./hero-eigth'), { ssr: false });

const HeroNine = dynamic(() => import('./hero-nine'), { ssr: false });
const HeroTen = dynamic(() => import('./hero-ten'), { ssr: false });
const HeroEleven = dynamic(() => import('./hero-eleven'), { ssr: false });
type ComponentProps =
  | {
      name: HeroComponentName.HERO_ONE;
      data: HeroOneData;
    }
  | {
      name: HeroComponentName.HERO_TWO;
      data: HeroTwoData;
    }
  | {
      name: HeroComponentName.HERO_THREE;
      data: HeroThreeData;
    }
  | {
      name: HeroComponentName.HERO_FOUR;
      data: HeroFourData;
    }
  | {
      name: HeroComponentName.HERO_FIVE;
      data: HeroFiveData;
    }
  | {
      name: HeroComponentName.HERO_SIX;
      data: HeroSixData;
    }
  | {
      name: HeroComponentName.HERO_SEVEN;
      data: HeroSevenData;
    }
  | {
      name: HeroComponentName.HERO_EIGHT;
      data: HeroEightData;
    }
  | {
      name: HeroComponentName.HERO_NINE;
      data: HeroNineData;
    }
  | {
      name: HeroComponentName.HERO_TEN;
      data: HeroTenData;
    }
  | {
      name: HeroComponentName.HERO_ELEVEN;
      data: HeroElevenData;
    };

type Props = {
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
} & ComponentProps;

export default function HeroFactory({ name, data, ...rest }: Props) {
  switch (name) {
    case HeroComponentName.HERO_ONE:
      return <HeroOne data={data} {...rest} />;

    case HeroComponentName.HERO_TWO:
      return <HeroTwo data={data} {...rest} />;

    case HeroComponentName.HERO_THREE:
      return <HeroThree data={data} {...rest} />;

    case HeroComponentName.HERO_FOUR:
      return <HeroFour data={data} {...rest} />;

    case HeroComponentName.HERO_FIVE:
      return <HeroFive data={data} {...rest} />;

    case HeroComponentName.HERO_SIX:
      return <HeroSix data={data} {...rest} />;

    case HeroComponentName.HERO_SEVEN:
      return <HeroSeven data={data} {...rest} />;

    case HeroComponentName.HERO_EIGHT:
      return <HeroEight data={data} {...rest} />;

    case HeroComponentName.HERO_NINE:
      return <HeroNine data={data} {...rest} />;

    case HeroComponentName.HERO_TEN:
      return <HeroTen data={data} {...rest} />;

    case HeroComponentName.HERO_ELEVEN:
      return <HeroEleven data={data} {...rest} />;

    default:
      return null;
  }
}
