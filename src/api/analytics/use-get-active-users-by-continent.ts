import { useGetActiveUsersByContinentQuery } from 'src/graphql/generated';
import { AnalyticsMapper } from './analytics.mapper';

export const useGetActiveUsersByContinent = (
  input: { projectId: string; startDate: string; endDate: string },
  enabled?: boolean
) => {
  const { data, isError, isLoading, isSuccess, refetch } = useGetActiveUsersByContinentQuery(
    { getActiveUsersInput: input },
    { enabled: !!input.projectId && enabled }
  );

  const activeUsers = (data?.getActiveUsersByContinent?.items || []).map(
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
