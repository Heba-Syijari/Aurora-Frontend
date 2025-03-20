import { useGetActiveUsersByCountryInLast30MinsQuery } from 'src/graphql/generated';
import { AnalyticsMapper } from './analytics.mapper';

export const useGetActiveUsersByCountryInLast30Mins = (projectId: string, enabled?: boolean) => {
  const { data, isError, isLoading, isSuccess, refetch } =
    useGetActiveUsersByCountryInLast30MinsQuery({ projectId }, { enabled: !!projectId && enabled });

  const activeUsers = (data?.getActiveUsersByCountryInLast30Mins?.items || []).map(
    AnalyticsMapper.mapActiveUser
  );

  return {
    activeUsers,
    isError,
    isLoading,
    isSuccess,
    refetch,
  };
};
