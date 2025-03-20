import { useGetActiveUsersByHourQuery } from 'src/graphql/generated';
import { AnalyticsMapper } from './analytics.mapper';

export const useGetActiveUsersByHour = (
  input: { projectId: string; startDate: string; endDate: string },
  enabled?: boolean
) => {
  const { data, isError, isLoading, isSuccess, refetch } = useGetActiveUsersByHourQuery(
    { getActiveUsersInput: input },
    { enabled: !!input.projectId && enabled }
  );

  const activeUsers = (data?.getActiveUsersByHour?.items || []).map(AnalyticsMapper.mapActiveUser);

  return {
    activeUsers,
    isError,
    isLoading,
    isSuccess,
    refetch,
  };
};
