import dynamic from 'next/dynamic';
import { PrivacyPolicyFourProps } from './privacy-policy-four/privacy-policy';
import { PrivacyPolicyOneProps } from './privacy-policy-one/privacy-policy';
import { PrivacyPolicyThreeProps } from './privacy-policy-three/privacy-policy';
import { PrivacyPolicyTwoProps } from './privacy-policy-two/privacy-policy';
import { PrivacyPolicyComponentName } from './types';

const PrivacyPolicyOne = dynamic(() => import('./privacy-policy-one'), { ssr: false });
const PrivacyPolicyTwo = dynamic(() => import('./privacy-policy-two'), { ssr: false });
const PrivacyPolicyThree = dynamic(() => import('./privacy-policy-three'), { ssr: false });
const PrivacyPolicyFour = dynamic(() => import('./privacy-policy-four'), { ssr: false });

type ComponentProps =
  | (PrivacyPolicyOneProps & {
      name: PrivacyPolicyComponentName.PRIVACY_POLICY_ONE;
    })
  | (PrivacyPolicyTwoProps & {
      name: PrivacyPolicyComponentName.PRIVACY_POLICY_TWO;
    })
  | (PrivacyPolicyThreeProps & {
      name: PrivacyPolicyComponentName.PRIVACY_POLICY_THREE;
    })
  | (PrivacyPolicyFourProps & {
      name: PrivacyPolicyComponentName.PRIVACY_POLICY_FOUR;
    });

type Props = ComponentProps & {
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function PrivacyPolicysFactory({ name, data, ...rest }: Props) {
  switch (name) {
    case PrivacyPolicyComponentName.PRIVACY_POLICY_ONE:
      return <PrivacyPolicyOne data={data} {...rest} />;

    case PrivacyPolicyComponentName.PRIVACY_POLICY_TWO:
      return <PrivacyPolicyTwo data={data} {...rest} />;

    case PrivacyPolicyComponentName.PRIVACY_POLICY_THREE:
      return <PrivacyPolicyThree data={data} {...rest} />;

    case PrivacyPolicyComponentName.PRIVACY_POLICY_FOUR:
      return <PrivacyPolicyFour data={data} {...rest} />;

    default:
      return null;
  }
}
