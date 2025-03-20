import { useGetUnattachedDomainsQuery } from 'src/graphql/generated';

export function useGetUnattachedDomains() {
  const { data, isLoading, isSuccess, isError, refetch } = useGetUnattachedDomainsQuery();

  return {
    domains: data?.getUnattachedDomains || [],
    isLoading,
    isSuccess,
    isError,
    refetch,
  };
}
