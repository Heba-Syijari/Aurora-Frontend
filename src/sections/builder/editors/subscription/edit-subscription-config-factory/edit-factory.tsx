import { Theme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import {
  SubscriptionComponentName,
  SubscriptionFiveConfig,
  SubscriptionFourConfig,
  SubscriptionOneConfig,
  SubscriptionSixConfig,
  SubscriptionThreeConfig,
  SubscriptionTwoConfig,
} from 'src/sections/builder/components/subscription/types';

// eslint-disable-next-line import/no-cycle
const EditSubscriptionOneConfig = dynamic(() => import('./edit-subscription-one-config'), {
  ssr: false,
});
// eslint-disable-next-line import/no-cycle
const EditSubscriptionTwoConfig = dynamic(() => import('./edit-subscription-two-config'), {
  ssr: false,
});
// eslint-disable-next-line import/no-cycle
const EditSubscriptionThreeConfig = dynamic(() => import('./edit-subscription-three-config'), {
  ssr: false,
});
// eslint-disable-next-line import/no-cycle
const EditSubscriptionFourConfig = dynamic(() => import('./edit-subscription-four-config'), {
  ssr: false,
});
// eslint-disable-next-line import/no-cycle
const EditSubscriptionFiveConfig = dynamic(() => import('./edit-subscription-five-config'), {
  ssr: false,
});

// eslint-disable-next-line import/no-cycle
const EditSubscriptionSixConfig = dynamic(() => import('./edit-subscription-six-config'), {
  ssr: false,
});

export type OptionType = { label: string; value: string };
type SubscriptionComponentMapping = {
  [SubscriptionComponentName.SUBSCRIPTION_ONE]: SubscriptionOneConfig;
  [SubscriptionComponentName.SUBSCRIPTION_TWO]: SubscriptionTwoConfig;
  [SubscriptionComponentName.SUBSCRIPTION_THREE]: SubscriptionThreeConfig;
  [SubscriptionComponentName.SUBSCRIPTION_FOUR]: SubscriptionFourConfig;
  [SubscriptionComponentName.SUBSCRIPTION_FIVE]: SubscriptionFiveConfig;
  [SubscriptionComponentName.SUBSCRIPTION_SIX]: SubscriptionSixConfig;
};

type ComponentProps<T extends keyof SubscriptionComponentMapping> = {
  name: SubscriptionComponentName;
  defaultValue: SubscriptionComponentMapping[T];
  onSave: (value: SubscriptionComponentMapping[T]) => void;
  onCloseClicked: () => void;
  theme: Theme;
};

export default function EditFactory<T extends keyof SubscriptionComponentMapping>({
  name,
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: ComponentProps<T>) {
  switch (name) {
    case SubscriptionComponentName.SUBSCRIPTION_ONE:
      return (
        <EditSubscriptionOneConfig
          defaultValue={defaultValue as SubscriptionOneConfig}
          onSave={onSave as (value: SubscriptionOneConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    case SubscriptionComponentName.SUBSCRIPTION_TWO:
      return (
        <EditSubscriptionTwoConfig
          defaultValue={defaultValue as SubscriptionTwoConfig}
          onSave={onSave as (value: SubscriptionTwoConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    case SubscriptionComponentName.SUBSCRIPTION_THREE:
      return (
        <EditSubscriptionThreeConfig
          defaultValue={defaultValue as SubscriptionThreeConfig}
          onSave={onSave as (value: SubscriptionThreeConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    case SubscriptionComponentName.SUBSCRIPTION_FOUR:
      return (
        <EditSubscriptionFourConfig
          defaultValue={defaultValue as SubscriptionFourConfig}
          onSave={onSave as (value: SubscriptionFourConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    case SubscriptionComponentName.SUBSCRIPTION_FIVE:
      return (
        <EditSubscriptionFiveConfig
          defaultValue={defaultValue as SubscriptionFiveConfig}
          onSave={onSave as (value: SubscriptionFiveConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    case SubscriptionComponentName.SUBSCRIPTION_SIX:
      return (
        <EditSubscriptionSixConfig
          defaultValue={defaultValue as SubscriptionSixConfig}
          onSave={onSave as (value: SubscriptionSixConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    default:
      return null;
  }
}
