import dynamic from 'next/dynamic';
import { LogoType } from 'src/sections/generator/view/types';
import { IMenu } from 'src/types/menu';
import { FooterFiveProps } from './footer-five';
import { FooterFourProps } from './footer-four';
import { FooterOneProps } from './footer-one';
import { FooterSevenProps } from './footer-seven';
import { FooterSixProps } from './footer-six';

import { FooterEightProps } from './footer-eight';
import { FooterElevenProps } from './footer-eleven';
import { FooterFourteenProps } from './footer-fourteen';
import { FooterNineProps } from './footer-nine';
import { FooterTenProps } from './footer-ten';
import { FooterThirteenProps } from './footer-thirteen';
import { FooterThreeProps } from './footer-three';
import { FooterTwelveProps } from './footer-twelve';
import { FooterTwoProps } from './footer-two';
import { FooterComponentName } from './types';

// ----------------------------------------

const FooterOne = dynamic(() => import('./footer-one'), { ssr: false });
const FooterTwo = dynamic(() => import('./footer-two'), { ssr: false });
const FooterThree = dynamic(() => import('./footer-three'), { ssr: false });
const FooterFour = dynamic(() => import('./footer-four'), { ssr: false });
const FooterFive = dynamic(() => import('./footer-five'), { ssr: false });
const FooterSix = dynamic(() => import('./footer-six'), { ssr: false });
const FooterSeven = dynamic(() => import('./footer-seven'), { ssr: false });
const FooterEight = dynamic(() => import('./footer-eight'), { ssr: false });
const FooterNine = dynamic(() => import('./footer-nine'), { ssr: false });
const FooterTen = dynamic(() => import('./footer-ten'), { ssr: false });
const FooterEleven = dynamic(() => import('./footer-eleven'), { ssr: false });
const FooterTweleve = dynamic(() => import('./footer-twelve'), { ssr: false });
const FooterThirteen = dynamic(() => import('./footer-thirteen'), { ssr: false });
const FooterFourteen = dynamic(() => import('./footer-fourteen'), { ssr: false });
type ComponentProps =
  | (FooterOneProps & {
      name: FooterComponentName.FOOTER_ONE;
    })
  | (FooterTwoProps & {
      name: FooterComponentName.FOOTER_TWO;
    })
  | (FooterThreeProps & {
      name: FooterComponentName.FOOTER_THREE;
    })
  | (FooterFourProps & {
      name: FooterComponentName.FOOTER_FOUR;
    })
  | (FooterFiveProps & {
      name: FooterComponentName.FOOTER_FIVE;
    })
  | (FooterSixProps & {
      name: FooterComponentName.FOOTER_SIX;
    })
  | (FooterSevenProps & {
      name: FooterComponentName.FOOTER_SEVEN;
    })
  | (FooterNineProps & {
      name: FooterComponentName.FOOTER_NINE;
    })
  | (FooterEightProps & {
      name: FooterComponentName.FOOTER_EIGHT;
    })
  | (FooterTenProps & {
      name: FooterComponentName.FOOTER_TEN;
    })
  | (FooterElevenProps & {
      name: FooterComponentName.FOOTER_ELEVEN;
    })
  | (FooterTwelveProps & {
      name: FooterComponentName.FOOTER_TWELEV;
    })
  | (FooterThirteenProps & {
      name: FooterComponentName.FOOTER_THIRTEEN;
    })
  | (FooterFourteenProps & {
      name: FooterComponentName.FOOTER_FOURTEEN;
    });

type Props = ComponentProps & {
  menus: IMenu[];
  logoType: LogoType;
  logoValue: string;
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function FooterFactory({ name, data, ...rest }: Props) {
  switch (name) {
    case FooterComponentName.FOOTER_ONE:
      return <FooterOne data={data} {...rest} />;
    case FooterComponentName.FOOTER_TWO:
      return <FooterTwo data={data} {...rest} />;
    case FooterComponentName.FOOTER_THREE:
      return <FooterThree data={data} {...rest} />;
    case FooterComponentName.FOOTER_FOUR:
      return <FooterFour data={data} {...rest} />;
    case FooterComponentName.FOOTER_FIVE:
      return <FooterFive data={data} {...rest} />;
    case FooterComponentName.FOOTER_SIX:
      return <FooterSix data={data} {...rest} />;
    case FooterComponentName.FOOTER_SEVEN:
      return <FooterSeven data={data} {...rest} />;
    case FooterComponentName.FOOTER_EIGHT:
      return <FooterEight data={data} {...rest} />;
    case FooterComponentName.FOOTER_NINE:
      return <FooterNine data={data} {...rest} />;
    case FooterComponentName.FOOTER_TEN:
      return <FooterTen data={data} {...rest} />;
    case FooterComponentName.FOOTER_ELEVEN:
      return <FooterEleven data={data} {...rest} />;
    case FooterComponentName.FOOTER_TWELEV:
      return <FooterTweleve data={data} {...rest} />;
    case FooterComponentName.FOOTER_THIRTEEN:
      return <FooterThirteen data={data} {...rest} />;
    case FooterComponentName.FOOTER_FOURTEEN:
      return <FooterFourteen data={data} {...rest} />;
    default:
      return null;
  }
}
