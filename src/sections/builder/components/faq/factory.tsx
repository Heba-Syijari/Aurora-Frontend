import dynamic from 'next/dynamic';
import { FAQFiveProps } from './faq-five/faq-five';
// import { FAQSevenProps } from './faq-four/faq-four';
import { FAQEightProps } from './faq-eight/faq-eight';
import { FAQFourProps } from './faq-four/faq-four';
import { FAQOneProps } from './faq-one/faq-one';
import { FAQSevenProps } from './faq-seven/faq-seven';
import { FAQSixProps } from './faq-six/faq-six';
import { FAQThreeProps } from './faq-three/faq-three';
import { FAQTwoProps } from './faq-two/faq-two';
import { FAQComponentName } from './types';

const FAQOne = dynamic(() => import('./faq-one'), { ssr: false });
const FAQTwo = dynamic(() => import('./faq-two'), { ssr: false });
const FAQThree = dynamic(() => import('./faq-three'), { ssr: false });
const FAQFour = dynamic(() => import('./faq-four'), { ssr: false });
const FAQFive = dynamic(() => import('./faq-five'), { ssr: false });
const FAQSix = dynamic(() => import('./faq-six'), { ssr: false });
const FAQSeven = dynamic(() => import('./faq-seven'), { ssr: false });
const FAQEight = dynamic(() => import('./faq-eight'), { ssr: false });

type ComponentProps =
  | (FAQOneProps & {
      name: FAQComponentName.FAQ_ONE;
    })
  | (FAQTwoProps & {
      name: FAQComponentName.FAQ_TWO;
    })
  | (FAQThreeProps & {
      name: FAQComponentName.FAQ_THREE;
    })
  | (FAQFourProps & {
      name: FAQComponentName.FAQ_FOUR;
    })
  | (FAQFiveProps & {
      name: FAQComponentName.FAQ_FIVE;
    })
  | (FAQSixProps & {
      name: FAQComponentName.FAQ_SIX;
    })
  | (FAQSevenProps & {
      name: FAQComponentName.FAQ_SEVEN;
    })
  | (FAQEightProps & {
      name: FAQComponentName.FAQ_EIGHT;
    });

type Props = ComponentProps & {
  editMode?: boolean;
};

export default function FAQsFactory({ name, ...rest }: Props) {
  switch (name) {
    case FAQComponentName.FAQ_ONE:
      return <FAQOne {...rest} />;

    case FAQComponentName.FAQ_TWO:
      return <FAQTwo {...rest} />;

    case FAQComponentName.FAQ_THREE:
      return <FAQThree {...rest} />;

    case FAQComponentName.FAQ_FOUR:
      return <FAQFour {...rest} />;

    case FAQComponentName.FAQ_FIVE:
      return <FAQFive {...rest} />;

    case FAQComponentName.FAQ_SIX:
      return <FAQSix {...rest} />;

    case FAQComponentName.FAQ_SEVEN:
      return <FAQSeven {...rest} />;

    case FAQComponentName.FAQ_EIGHT:
      return <FAQEight {...rest} />;

    default:
      return null;
  }
}
