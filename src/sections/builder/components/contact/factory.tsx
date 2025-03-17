import dynamic from 'next/dynamic';
import { IIntellectualProperty } from 'src/types/intellectual-property';
import { ContactFiveProps } from './contact-five/contact-five';
import { ContactFourProps } from './contact-four/contact-four';
import { ContactOneProps } from './contact-one/contact-one';
import { ContactSevenProps } from './contact-seven/contact-seven';
import { ContactSixProps } from './contact-six/contact-six';
import { ContactThreeProps } from './contact-three/contact-three';
import { ContactTwoProps } from './contact-two/contact-two';
import { ContactComponentName } from './types';

// ----------------------------------------

const ContactOne = dynamic(() => import('./contact-one'), { ssr: false });
const ContactTwo = dynamic(() => import('./contact-two'), { ssr: false });
const ContactThree = dynamic(() => import('./contact-three'), { ssr: false });
const ContactFour = dynamic(() => import('./contact-four'), { ssr: false });
const ContactFive = dynamic(() => import('./contact-five'), { ssr: false });
const ContactSix = dynamic(() => import('./contact-six'), { ssr: false });
const ContactSeven = dynamic(() => import('./contact-seven'), { ssr: false });

type ComponentProps =
  | (ContactOneProps & {
      name: ContactComponentName.CONTACT_ONE;
    })
  | (ContactTwoProps & {
      name: ContactComponentName.CONTACT_TWO;
    })
  | (ContactThreeProps & {
      name: ContactComponentName.CONTACT_THREE;
    })
  | (ContactFourProps & {
      name: ContactComponentName.CONTACT_FOUR;
    })
  | (ContactFiveProps & {
      name: ContactComponentName.CONTACT_FIVE;
    })
  | (ContactSixProps & {
      name: ContactComponentName.CONTACT_SIX;
    })
  | (ContactSevenProps & {
      name: ContactComponentName.CONTACT_SEVEN;
    });

type Props = ComponentProps & {
  projectId: string;
  intellectualProperty: IIntellectualProperty;
  editMode?: boolean;
};

export default function ContactFactory({ name, ...rest }: Props) {
  switch (name) {
    case ContactComponentName.CONTACT_ONE:
      return <ContactOne {...(rest as ContactOneProps)} />;

    case ContactComponentName.CONTACT_TWO:
      return <ContactTwo {...(rest as ContactTwoProps)} />;

    case ContactComponentName.CONTACT_THREE:
      return <ContactThree {...(rest as ContactThreeProps)} />;

    case ContactComponentName.CONTACT_FOUR:
      return <ContactFour {...(rest as ContactFourProps)} />;

    case ContactComponentName.CONTACT_FIVE:
      return <ContactFive {...(rest as ContactFiveProps)} />;

    case ContactComponentName.CONTACT_SIX:
      return <ContactSix {...(rest as ContactSixProps)} />;

    case ContactComponentName.CONTACT_SEVEN:
      return <ContactSeven {...(rest as ContactSevenProps)} />;

    default:
      return null;
  }
}
