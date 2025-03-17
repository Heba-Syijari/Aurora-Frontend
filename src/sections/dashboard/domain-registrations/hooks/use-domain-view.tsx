import { useMemo } from 'react';
import { useCreateFreeDomainRegistration, useGetDomainRegistrations } from 'src/api/domain';
import { useGetPlanDetails } from 'src/api/plan';
import { useAuthContext } from 'src/auth/hooks';
import { useSnackbar } from 'src/components/snackbar';
import { useRouter } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
import { DomainRegistrationStatus } from 'src/types/domain';
import { AvailablePlanFeatures, IDomainFeatureLimitation } from 'src/types/plan';
import { serializeQueryParams } from 'src/utils/url';

export const useDomainView = () => {
  const router = useRouter();
  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();

  const { subscription } = useAuthContext();
  const { plan } = useGetPlanDetails(subscription?.planId || 0);
  const {
    domainRegistrations,
    refetch: refetchDomainRegistrations,
    isLoading: domainRegistrationsLoading,
  } = useGetDomainRegistrations();

  const { createFreeDomainRegistration, isLoading } = useCreateFreeDomainRegistration();

  const handlePurchase = async (domainName: string, duration: number, free: boolean) => {
    if (free) {
      await handleCreateDomainRegistration(domainName, duration);
      return;
    }

    const url = paths.dashboard.domainRegistrations.register;
    const params = { domainName, duration };

    router.push(`${url}?${serializeQueryParams(params)}`);
  };

  const handleCreateDomainRegistration = async (domainName: string, years: number) => {
    try {
      await createFreeDomainRegistration({
        domainName,
        years,
      });

      await refetchDomainRegistrations();

      enqueueSnackbar('Successfully registered');
    } catch (err) {
      console.log(err);
      enqueueErrorSnackbar(err.message || 'error while purchasing the domain');
      throw err;
    }
  };

  const domainFeatureLimitation: IDomainFeatureLimitation | undefined = useMemo(() => {
    if (domainRegistrationsLoading) return undefined;

    const usedFreeBefore =
      domainRegistrations.findIndex(
        (r) => r.isFree && r.status === DomainRegistrationStatus.COMPLETED
      ) !== -1;

    if (usedFreeBefore) return undefined;

    const domainFeature = (plan?.features || []).find(
      ({ feature }) => feature?.key === AvailablePlanFeatures.FREE_DOMAIN_NAME
    );

    return domainFeature?.limitation;
  }, [domainRegistrations, domainRegistrationsLoading, plan?.features]);

  return {
    domainRegistrations,
    handlePurchase,
    domainFeatureLimitation,
    purchaseLoading: isLoading,
  };
};
