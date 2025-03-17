import { useEffect } from 'react';
import { BaseButton } from 'src/components/styled/button';
import { usePathname, useRouter } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
import { useAuthContext } from '../../hooks';
import { SubscriptionError } from './subscription-error';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  hasContent?: boolean;
  hide?: boolean;
};

export default function SubscriptionGuard({ children, hasContent, hide }: Props) {
  const { subscription, subscriptionLoading, userUsage, userUsageLoading } = useAuthContext();

  const router = useRouter();
  const pathname = usePathname();
  const isSubscriptionsPage = pathname.includes(paths.dashboard.subscriptions.root);
  const isPaymentsPage = pathname.includes(paths.dashboard.payments.root);

  const userInAllowedPages = isSubscriptionsPage || isPaymentsPage;

  const showPlans = () => {
    router.push(paths.dashboard.subscriptions.root);
  };

  useEffect(() => {
    if (userUsage?.hasOneProjectFreeTrial && !userInAllowedPages) {
      router.replace(paths.generator.root);
    }
  }, [router, userInAllowedPages, userUsage?.hasOneProjectFreeTrial]);

  if (
    userInAllowedPages ||
    subscriptionLoading ||
    userUsageLoading ||
    userUsage?.hasOneProjectFreeTrial
  ) {
    return <>{children}</>;
  }

  if (!subscription) {
    if (hide) return null;

    return (
      <SubscriptionError
        title="You are not subscribed yet!"
        description="Upgrade to unlock exclusive premium features. Explore our subscription plans now!"
        actions={
          <BaseButton variant="contained" color="primary" onClick={showPlans} sx={{ m: 'auto' }}>
            Show Plans
          </BaseButton>
        }
        hasContent={hasContent}
      />
    );
  }

  if (subscription.isExpired) {
    if (hide) return null;

    return (
      <SubscriptionError
        title="Your subscription has expired!"
        description="You have to renew your plan or upgrade to another plan."
        actions={
          <BaseButton variant="contained" color="primary" onClick={showPlans} sx={{ m: 'auto' }}>
            Show Plans
          </BaseButton>
        }
        hasContent={hasContent}
      />
    );
  }

  return <>{children}</>;
}
