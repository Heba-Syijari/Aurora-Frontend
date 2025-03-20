import { useMemo } from 'react';
import { useGetUserUsageQuery } from 'src/graphql/generated';
import storage from 'src/utils/storage';
import { UserUsageMapper } from './user-usage.mapper';

export const useGetUserUsage = () => {
  const token = storage.getToken();

  const { data, isError, isLoading, isSuccess, refetch } = useGetUserUsageQuery(undefined, {
    enabled: !!token,
  });

  const userUsage = useMemo(
    () => (data?.getUserUsage ? UserUsageMapper.fromApi(data.getUserUsage) : undefined),
    [data?.getUserUsage]
  );

  return {
    userUsage,
    isLoading,
    isSuccess,
    isError,
    refetch,
  };
};
