import dynamic from 'next/dynamic';
import { LogoType } from 'src/sections/generator/view/types';
import { MessageWithActionOneProps } from './message-with-action-one';
import { MessageWithActionComponentName } from './types';

// ----------------------------------------

const MessageWithActionOne = dynamic(() => import('./message-with-action-one'), { ssr: false });

type ComponentProps =
  | MessageWithActionOneProps & {
      name: MessageWithActionComponentName.MWSSAGE_WITH_ACTION_ONE;
    };

type Props = ComponentProps & {
  logoType: LogoType;
  logoValue: string;
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function MessageWithActionFactory({ name, data, ...rest }: Props) {
  switch (name) {
    case MessageWithActionComponentName.MWSSAGE_WITH_ACTION_ONE:
      return <MessageWithActionOne data={data} {...rest} />;
    default:
      return null;
  }
}
