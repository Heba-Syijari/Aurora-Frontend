import { useMemo } from 'react';
import { subDays, subWeeks } from 'date-fns';
import {
  useGetActiveUsersByContinent,
  useGetActiveUsersByCountryInLast30Mins,
  useGetActiveUsersByHour,
  useGetActiveUsersByPage,
  useGetReportByDate,
} from 'src/api/analytics';
import { useCreateAnalyticsProperty, useGetProjectAnalyticsProperty } from 'src/api/project';
import { useGetStatistics } from 'src/api/statistics';
import { useSnackbar } from 'src/components/snackbar';
import { useProjectContext } from 'src/providers/project/project-context';
import { fDate } from 'src/utils/format-time';

export const useAnalyticsView = () => {
  const { project } = useProjectContext();

  const { projectsCount, publishedProjectsCount } = useGetStatistics();

  const {
    analyticsProperty,
    isLoading: getAnalyticsPropertyLoading,
    refetch,
  } = useGetProjectAnalyticsProperty(project.id);

  const { createAnalyticsProperty, isLoading: createAnalyticsPropertyLoading } =
    useCreateAnalyticsProperty();

  const { reportData, reportDateLabels } = useGetReportByDate(project.id, !!analyticsProperty);

  const { activeUsers: activeUsersByCountry } = useGetActiveUsersByCountryInLast30Mins(
    project.id,
    !!analyticsProperty
  );

  const { activeUsers: activeUsersByHour } = useGetActiveUsersByHour(
    {
      projectId: project.id,
      startDate: fDate(subDays(new Date(), 1), 'yyyy-MM-dd'),
      endDate: fDate(new Date(), 'yyyy-MM-dd'),
    },
    !!analyticsProperty
  );

  const { activeUsers: activeUsersByPage } = useGetActiveUsersByPage(
    {
      projectId: project.id,
      startDate: fDate(subWeeks(new Date(), 1), 'yyyy-MM-dd'),
      endDate: fDate(new Date(), 'yyyy-MM-dd'),
    },
    !!analyticsProperty
  );

  const { activeUsers: activeUsersByContinent } = useGetActiveUsersByContinent(
    {
      projectId: project.id,
      startDate: fDate(subWeeks(new Date(), 1), 'yyyy-MM-dd'),
      endDate: fDate(new Date(), 'yyyy-MM-dd'),
    },
    !!analyticsProperty
  );

  const totalActiveUsers = useMemo(
    () =>
      activeUsersByContinent.reduce(
        (previousValue, currentValue) => previousValue + currentValue.value,
        0
      ),
    [activeUsersByContinent]
  );

  const isLoading = createAnalyticsPropertyLoading || getAnalyticsPropertyLoading;

  const { enqueueSnackbar } = useSnackbar();

  const handleCreateAnalyticsProperty = async () => {
    try {
      await createAnalyticsProperty(project.id);

      await refetch();

      enqueueSnackbar('Successfully connected');
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message || 'Failed connecting with google analytics', {
        variant: 'error',
      });
    }
  };

  return {
    projectName: project.name,
    projectURL: project.publicURL,
    isProjectPublished: !!project.cdnPullZoneId,
    isLoading,
    projectsCount,
    publishedProjectsCount,
    createAnalyticsPropertyLoading,
    getAnalyticsPropertyLoading,
    handleCreateAnalyticsProperty,
    hasAnalytics: !!analyticsProperty?.id,
    activeUsersByCountry,
    reportData,
    reportDateLabels,
    activeUsersByHour,
    activeUsersByPage,
    activeUsersByContinent,
    totalActiveUsers,
  };
};
