import { useCheckDomainAvailabilityQuery } from 'src/graphql/generated';

export const useCheckDomainAvailability = (domainName: string) => {
  const { data, isError, isLoading, error } = useCheckDomainAvailabilityQuery(
    { domainName },
    { enabled: !!domainName }
  );

  return {
    available: data?.checkDomainAvailability,
    isError,
    isLoading,
    errorMessage: typeof error === 'string' ? error : (error as Error)?.message,
  };
};
