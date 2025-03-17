import dynamic from 'next/dynamic';
import { ImportanceOneProps } from './importance-one/importance-one';
import { ImportanceComponentName } from './types';

const ImportanceOne = dynamic(() => import('./importance-one'), { ssr: false });
const ImportanceTwo = dynamic(() => import('./importance-two'), { ssr: false });

type ComponentProps =
  | (ImportanceOneProps & {
      name: ImportanceComponentName.IMPORTANCE_ONE;
    })
  | (ImportanceOneProps & {
      name: ImportanceComponentName.IMPORTANCE_TWO;
    });

type Props = ComponentProps;

export default function ImportanceFactory({ name, ...rest }: Props) {
  switch (name) {
    case ImportanceComponentName.IMPORTANCE_ONE:
      return <ImportanceOne {...rest} />;

    case ImportanceComponentName.IMPORTANCE_TWO:
      return <ImportanceTwo {...rest} />;

    default:
      return null;
  }
}
