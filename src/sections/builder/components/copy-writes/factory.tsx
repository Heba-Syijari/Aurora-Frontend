import dynamic from 'next/dynamic';
import { CopyWriteFourProps } from './copy-writes-four/copy-writes';
import { CopyWriteOneProps } from './copy-writes-one/copy-writes';
import { CopyWriteThreeProps } from './copy-writes-three/copy-writes';
import { CopyWriteTwoProps } from './copy-writes-two/copy-writes';
import { CopyWriteComponentName } from './types';

const CopyWriteOne = dynamic(() => import('./copy-writes-one'), { ssr: false });
const CopyWriteTwo = dynamic(() => import('./copy-writes-two'), { ssr: false });
const CopyWriteThree = dynamic(() => import('./copy-writes-three'), { ssr: false });
const CopyWriteFour = dynamic(() => import('./copy-writes-four'), { ssr: false });

type ComponentProps =
  | (CopyWriteOneProps & {
      name: CopyWriteComponentName.COPY_WRITE_ONE;
    })
  | (CopyWriteTwoProps & {
      name: CopyWriteComponentName.COPY_WRITE_TWO;
    })
  | (CopyWriteThreeProps & {
      name: CopyWriteComponentName.COPY_WRITE_THREE;
    })
  | (CopyWriteFourProps & {
      name: CopyWriteComponentName.COPY_WRITE_FOUR;
    });

type Props = ComponentProps & {
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function CopyWritesFactory({ name, data, ...rest }: Props) {
  switch (name) {
    case CopyWriteComponentName.COPY_WRITE_ONE:
      return <CopyWriteOne data={data} {...rest} />;

    case CopyWriteComponentName.COPY_WRITE_TWO:
      return <CopyWriteTwo data={data} {...rest} />;

    case CopyWriteComponentName.COPY_WRITE_THREE:
      return <CopyWriteThree data={data} {...rest} />;

    case CopyWriteComponentName.COPY_WRITE_FOUR:
      return <CopyWriteFour data={data} {...rest} />;

    default:
      return null;
  }
}
