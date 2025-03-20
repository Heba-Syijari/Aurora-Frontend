import { useGetProjectAnalyticsPropertyQuery } from 'src/graphql/generated';

export const useGetProjectAnalyticsProperty = (projectId: string) => {
  const { data, isError, isLoading, isSuccess, refetch } = useGetProjectAnalyticsPropertyQuery(
    { projectId },
    { enabled: !!projectId }
  );

  return {
    analyticsProperty: data?.getProjectAnalyticsProperty,
    isError,
    isLoading,
    isSuccess,
    refetch,
  };
};
