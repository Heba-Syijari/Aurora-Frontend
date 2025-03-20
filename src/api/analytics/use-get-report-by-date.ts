import { useGetReportByDateQuery } from 'src/graphql/generated';

export const useGetReportByDate = (projectId: string, enabled?: boolean) => {
  const { data, isError, isLoading, isSuccess, refetch } = useGetReportByDateQuery(
    { projectId },
    { enabled: !!projectId && enabled }
  );

  const reportData = {
    activeUsers: data?.getReportByDate?.activeUsers || [],
    conversions: data?.getReportByDate?.conversions || [],
    eventCount: data?.getReportByDate?.eventCount || [],
    newUsers: data?.getReportByDate?.newUsers || [],
  };

  const reportDateLabels = reportData.activeUsers.map((metric) => metric.date);

  return {
    reportData,
    reportDateLabels,
    isError,
    isLoading,
    isSuccess,
    refetch,
  };
};
