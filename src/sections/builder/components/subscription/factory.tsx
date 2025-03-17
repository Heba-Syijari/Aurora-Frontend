import dynamic from 'next/dynamic';

import { SubscriptionFiveProps } from './subscription-five/subscription-five';
import { SubscriptionFourProps } from './subscription-four/subscription-four';
import { SubscriptionOneProps } from './subscription-one/subscription-one';
import { SubscriptionSixProps } from './subscription-six/subscription-six';
import { SubscriptionThreeProps } from './subscription-three/subscription-three';
import { SubscriptionTwoProps } from './subscription-two/subscription-two';
import { SubscriptionComponentName } from './types';

const SubscriptionOne = dynamic(() => import('./subscription-one'), { ssr: false });
const SubscriptionTwo = dynamic(() => import('./subscription-two'), { ssr: false });
const SubscriptionThree = dynamic(() => import('./subscription-three'), { ssr: false });
const SubscriptionFour = dynamic(() => import('./subscription-four'), { ssr: false });
const SubscriptionFive = dynamic(() => import('./subscription-five'), { ssr: false });
const SubscriptionSix = dynamic(() => import('./subscription-six'), { ssr: false });

type ComponentProps =
  | (SubscriptionOneProps & {
      name: SubscriptionComponentName.SUBSCRIPTION_ONE;
    })
  | (SubscriptionTwoProps & {
      name: SubscriptionComponentName.SUBSCRIPTION_TWO;
    })
  | (SubscriptionThreeProps & {
      name: SubscriptionComponentName.SUBSCRIPTION_THREE;
    })
  | (SubscriptionFourProps & {
      name: SubscriptionComponentName.SUBSCRIPTION_FOUR;
    })
  | (SubscriptionFiveProps & {
      name: SubscriptionComponentName.SUBSCRIPTION_FIVE;
    })
  | (SubscriptionSixProps & {
      name: SubscriptionComponentName.SUBSCRIPTION_SIX;
    });

type Props = ComponentProps & {
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function FeaturesFactory({ name, data, ...rest }: Props) {
  switch (name) {
    case SubscriptionComponentName.SUBSCRIPTION_ONE:
      return <SubscriptionOne data={data} {...rest} />;
    case SubscriptionComponentName.SUBSCRIPTION_TWO:
      return <SubscriptionTwo data={data} {...rest} />;
    case SubscriptionComponentName.SUBSCRIPTION_THREE:
      return <SubscriptionThree data={data} {...rest} />;
    case SubscriptionComponentName.SUBSCRIPTION_FOUR:
      return <SubscriptionFour data={data} {...rest} />;
    case SubscriptionComponentName.SUBSCRIPTION_FIVE:
      return <SubscriptionFive data={data} {...rest} />;
    case SubscriptionComponentName.SUBSCRIPTION_SIX:
      return <SubscriptionSix data={data} {...rest} />;
    default:
      return null;
  }
}
