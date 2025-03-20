import { useGetActiveUsersByPageQuery } from 'src/graphql/generated';
import { AnalyticsMapper } from './analytics.mapper';

export const useGetActiveUsersByPage = (
  input: { projectId: string; startDate: string; endDate: string },
  enabled?: boolean
) => {
  const { data, isError, isLoading, isSuccess, refetch } = useGetActiveUsersByPageQuery(
    { getActiveUsersInput: input },
    { enabled: !!input.projectId && enabled }
  );

  const activeUsers = (data?.getActiveUsersByPage?.items || []).map(AnalyticsMapper.mapActiveUser);

  return {
    activeUsers,
    isError,
    isLoading,
    isSuccess,
    refetch,
  };
};
