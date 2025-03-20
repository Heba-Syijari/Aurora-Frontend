import { useGetDomainPricingQuery } from 'src/graphql/generated';

export const useGetDomainPricing = (domainName: string, enabled: boolean = true) => {
  const { data, isError, isLoading, isSuccess } = useGetDomainPricingQuery(
    { domainName },
    { enabled: !!domainName && enabled }
  );

  return {
    pricing: data?.getDomainPricing || [],
    isError,
    isLoading,
    isSuccess,
  };
};
