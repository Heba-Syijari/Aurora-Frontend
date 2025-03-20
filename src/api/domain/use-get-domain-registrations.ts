import { useGetDomainRegistrationsQuery } from 'src/graphql/generated';
import { DomainRegistrationMapper } from './domain-registration.mapper';

export function useGetDomainRegistrations() {
  const { data, isLoading, isSuccess, isError, refetch } = useGetDomainRegistrationsQuery();

  return {
    domainRegistrations: (data?.getDomainRegistrations || []).map(DomainRegistrationMapper.fromApi),
    isLoading,
    isSuccess,
    isError,
    refetch,
  };
}
