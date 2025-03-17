import dynamic from 'next/dynamic';
import { TermsAndServicesFiveProps } from './terms-and-services-five/terms-and-services';
import { TermsAndServicesFourProps } from './terms-and-services-four/terms-and-services';
import { TermsAndServicesOneProps } from './terms-and-services-one/terms-and-services';
import { TermsAndServicesThreeProps } from './terms-and-services-three/terms-and-services';
import { TermsAndServicesTwoProps } from './terms-and-services-two/terms-and-services';
import { TermsAndServicesComponentName } from './types';

const TermsAndServicesOne = dynamic(() => import('./terms-and-services-one'), { ssr: false });
const TermsAndServicesTwo = dynamic(() => import('./terms-and-services-two'), { ssr: false });
const TermsAndServicesThree = dynamic(() => import('./terms-and-services-three'), { ssr: false });
const TermsAndServicesFour = dynamic(() => import('./terms-and-services-four'), { ssr: false });
const TermsAndServicesFive = dynamic(() => import('./terms-and-services-five'), { ssr: false });

type ComponentProps =
  | (TermsAndServicesOneProps & {
      name: TermsAndServicesComponentName.TERMS_AND_SERVICES_ONE;
    })
  | (TermsAndServicesTwoProps & {
      name: TermsAndServicesComponentName.TERMS_AND_SERVICES_TWO;
    })
  | (TermsAndServicesThreeProps & {
      name: TermsAndServicesComponentName.TERMS_AND_SERVICES_THREE;
    })
  | (TermsAndServicesFourProps & {
      name: TermsAndServicesComponentName.TERMS_AND_SERVICES_FOUR;
    })
  | (TermsAndServicesFiveProps & {
      name: TermsAndServicesComponentName.TERMS_AND_SERVICES_FIVE;
    });

type Props = ComponentProps & {
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function TermsAndServicessFactory({ name, data, ...rest }: Props) {
  switch (name) {
    case TermsAndServicesComponentName.TERMS_AND_SERVICES_ONE:
      return <TermsAndServicesOne data={data} {...rest} />;

    case TermsAndServicesComponentName.TERMS_AND_SERVICES_TWO:
      return <TermsAndServicesTwo data={data} {...rest} />;

    case TermsAndServicesComponentName.TERMS_AND_SERVICES_THREE:
      return <TermsAndServicesThree data={data} {...rest} />;

    case TermsAndServicesComponentName.TERMS_AND_SERVICES_FOUR:
      return <TermsAndServicesFour data={data} {...rest} />;

    case TermsAndServicesComponentName.TERMS_AND_SERVICES_FIVE:
      return <TermsAndServicesFive data={data} {...rest} />;

    default:
      return null;
  }
}
