import dynamic from 'next/dynamic';

import { GalleryFiveProps } from './gallery-five/gallery-five';
import { GalleryFourProps } from './gallery-four/gallery-four';
import { GalleryOneProps } from './gallery-one/gallery-one';
import { GallerySevenProps } from './gallery-seven/gallery-seven';
import { GallerySixProps } from './gallery-six/gallery-six';
import { GalleryThreeProps } from './gallery-three/gallery-three';
import { GalleryTwoProps } from './gallery-two/gallery-two';
import { GalleryComponentName } from './types';

const GalleryOne = dynamic(() => import('./gallery-one'), { ssr: false });
const GalleryTwo = dynamic(() => import('./gallery-two'), { ssr: false });
const GalleryThree = dynamic(() => import('./gallery-three'), { ssr: false });
const GalleryFour = dynamic(() => import('./gallery-four'), { ssr: false });
const GalleryFive = dynamic(() => import('./gallery-five'), { ssr: false });
const GallerySix = dynamic(() => import('./gallery-six'), { ssr: false });
const GallerySeven = dynamic(() => import('./gallery-seven'), { ssr: false });

type ComponentProps =
  | (GalleryOneProps & {
      name: GalleryComponentName.GALLERY_ONE;
    })
  | (GalleryTwoProps & {
      name: GalleryComponentName.GALLERY_TWO;
    })
  | (GalleryThreeProps & {
      name: GalleryComponentName.GALLERY_THREE;
    })
  | (GalleryFourProps & {
      name: GalleryComponentName.GALLERY_FOUR;
    })
  | (GalleryFiveProps & {
      name: GalleryComponentName.GALLERY_FIVE;
    })
  | (GallerySixProps & {
      name: GalleryComponentName.GALLERY_SIX;
    })
  | (GallerySevenProps & {
      name: GalleryComponentName.GALLERY_SEVEN;
    });

type Props = ComponentProps & {
  editMode?: boolean;
};

export default function GalleryFactory({ name, data, setLocalData, ...rest }: Props) {
  switch (name) {
    case GalleryComponentName.GALLERY_ONE:
      return <GalleryOne data={data} setLocalData={setLocalData} {...rest} />;
    case GalleryComponentName.GALLERY_TWO:
      return <GalleryTwo data={data} setLocalData={setLocalData} {...rest} />;
    case GalleryComponentName.GALLERY_THREE:
      return <GalleryThree data={data} setLocalData={setLocalData} {...rest} />;
    case GalleryComponentName.GALLERY_FOUR:
      return <GalleryFour data={data} setLocalData={setLocalData} {...rest} />;
    case GalleryComponentName.GALLERY_FIVE:
      return <GalleryFive data={data} setLocalData={setLocalData} {...rest} />;
    case GalleryComponentName.GALLERY_SIX:
      return <GallerySix data={data} setLocalData={setLocalData} {...rest} />;
    case GalleryComponentName.GALLERY_SEVEN:
      return <GallerySeven data={data} setLocalData={setLocalData} {...rest} />;
    default:
      return null;
  }
}
