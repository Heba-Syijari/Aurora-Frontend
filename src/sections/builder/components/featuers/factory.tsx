import dynamic from 'next/dynamic';

import { FeatureEightProps } from './featuer-eight/feature-eight';
import { FeatureElevenProps } from './featuer-eleven/featuer-eleven';
import { FeatureFiveProps } from './featuer-five/feature-five';
import { FeatureFourProps } from './featuer-four/feature-four';
import { FeatureNineProps } from './featuer-nine/feature-nine';
import { FeatureOneProps } from './featuer-one/feature-one';
import { FeatureSevenProps } from './featuer-seven/feature-seven';
import { FeatureSixProps } from './featuer-six/feature-six';
import { FeatureTenProps } from './featuer-ten/feature-ten';
import { FeatureThirteenProps } from './featuer-thirteen/feature-thirteen';
import { FeatureThreeProps } from './featuer-three/feature-three';
import { FeatureTwelveProps } from './featuer-twelve/featuer-twelve';
import { FeatureTwoProps } from './featuer-two/feature-two';
import { FeatureComponentName } from './types';

const FeatureOne = dynamic(() => import('./featuer-one'), { ssr: false });
const FeatureTwo = dynamic(() => import('./featuer-two'), { ssr: false });
const FeatureThree = dynamic(() => import('./featuer-three'), { ssr: false });
const FeatureFour = dynamic(() => import('./featuer-four'), { ssr: false });
const FeatureFive = dynamic(() => import('./featuer-five'), { ssr: false });
const FeatureSix = dynamic(() => import('./featuer-six'), { ssr: false });
const FeatureSeven = dynamic(() => import('./featuer-seven'), { ssr: false });
const FeatureEight = dynamic(() => import('./featuer-eight'), { ssr: false });
const FeatureNine = dynamic(() => import('./featuer-nine'), { ssr: false });
const FeatureTen = dynamic(() => import('./featuer-ten'), { ssr: false });
const FeatureEleven = dynamic(() => import('./featuer-eleven'), { ssr: false });
const FeatureTwelve = dynamic(() => import('./featuer-twelve'), { ssr: false });
const FeatureThirteen = dynamic(() => import('./featuer-thirteen'), { ssr: false });

type ComponentProps =
  | (FeatureOneProps & {
      name: FeatureComponentName.FEATURE_ONE;
    })
  | (FeatureTwoProps & {
      name: FeatureComponentName.FEATURE_TWO;
    })
  | (FeatureThreeProps & {
      name: FeatureComponentName.FEATURE_THREE;
    })
  | (FeatureFourProps & {
      name: FeatureComponentName.FEATURE_FOUR;
    })
  | (FeatureFiveProps & {
      name: FeatureComponentName.FEATURE_FIVE;
    })
  | (FeatureSixProps & {
      name: FeatureComponentName.FEATURE_SIX;
    })
  | (FeatureSevenProps & {
      name: FeatureComponentName.FEATURE_SEVEN;
    })
  | (FeatureEightProps & {
      name: FeatureComponentName.FEATURE_EIGHT;
    })
  | (FeatureNineProps & {
      name: FeatureComponentName.FEATURE_NINE;
    })
  | (FeatureTenProps & {
      name: FeatureComponentName.FEATURE_TEN;
    })
  | (FeatureElevenProps & {
      name: FeatureComponentName.FEATURE_ELEVEN;
    })
  | (FeatureTwelveProps & {
      name: FeatureComponentName.FEATURE_TWELVE;
    })
  | (FeatureThirteenProps & {
      name: FeatureComponentName.FEATURE_THIRTEEN;
    });

type Props = ComponentProps & {
  editMode?: boolean;
};

export default function FeaturesFactory({ name, data, setLocalData, ...rest }: Props) {
  switch (name) {
    case FeatureComponentName.FEATURE_ONE:
      return <FeatureOne data={data} setLocalData={setLocalData} {...rest} />;
    case FeatureComponentName.FEATURE_TWO:
      return <FeatureTwo data={data} setLocalData={setLocalData} {...rest} />;
    case FeatureComponentName.FEATURE_THREE:
      return <FeatureThree data={data} setLocalData={setLocalData} {...rest} />;
    case FeatureComponentName.FEATURE_FOUR:
      return <FeatureFour data={data} setLocalData={setLocalData} {...rest} />;
    case FeatureComponentName.FEATURE_FIVE:
      return <FeatureFive data={data} setLocalData={setLocalData} {...rest} />;
    case FeatureComponentName.FEATURE_SIX:
      return <FeatureSix data={data} setLocalData={setLocalData} {...rest} />;
    case FeatureComponentName.FEATURE_SEVEN:
      return <FeatureSeven data={data} setLocalData={setLocalData} {...rest} />;
    case FeatureComponentName.FEATURE_EIGHT:
      return <FeatureEight data={data} setLocalData={setLocalData} {...rest} />;
    case FeatureComponentName.FEATURE_NINE:
      return <FeatureNine data={data} setLocalData={setLocalData} {...rest} />;
    case FeatureComponentName.FEATURE_TEN:
      return <FeatureTen data={data} setLocalData={setLocalData} {...rest} />;
    case FeatureComponentName.FEATURE_ELEVEN:
      return <FeatureEleven data={data} setLocalData={setLocalData} {...rest} />;
    case FeatureComponentName.FEATURE_TWELVE:
      return <FeatureTwelve data={data} setLocalData={setLocalData} {...rest} />;
    case FeatureComponentName.FEATURE_THIRTEEN:
      return <FeatureThirteen data={data} setLocalData={setLocalData} {...rest} />;
    default:
      return null;
  }
}
