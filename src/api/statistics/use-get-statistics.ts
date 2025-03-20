import { useMemo } from 'react';
import { useGetStatisticsQuery } from 'src/graphql/hasura';

export const useGetStatistics = () => {
  const { data, isError, isLoading, isSuccess, refetch } = useGetStatisticsQuery();

  const memoizedValue = useMemo(() => {
    const projects = data?.Project || [];
    const projectsCount = projects.length;
    const publishedProjectsCount = projects.filter((p) => !!p.cdnPullZoneId).length;

    const contactMessagesCount = (data?.ContactMessage || []).length;

    return {
      projectsCount,
      publishedProjectsCount,
      contactMessagesCount,
      isLoading,
      isSuccess,
      isError,
      refetch,
    };
  }, [data, isError, isLoading, isSuccess, refetch]);

  return memoizedValue;
};
