import { SubscriptionErrorContent } from './supscription-error-content';
import { SubscriptionErrorDialog } from './supscription-error-dialog';

type Props = {
  title: string;
  description: string;
  actions: React.ReactNode;
  hasContent?: boolean;
};

export function SubscriptionError({ hasContent = false, ...rest }: Props) {
  if (hasContent) {
    return <SubscriptionErrorContent {...rest} />;
  }

  return <SubscriptionErrorDialog {...rest} />;
}
