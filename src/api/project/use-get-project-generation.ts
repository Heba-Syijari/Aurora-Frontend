import { useMemo } from 'react';
import { useGetProjectGenerationQuery } from 'src/graphql/generated';
import { ProjectGenerationStatus } from 'src/types/project';
import { ProjectGenerationMapper } from './project-generation.mapper';

export function useGetProjectGeneration(projectId: string) {
  const { data, isLoading, isSuccess } = useGetProjectGenerationQuery(
    { projectId },
    {
      enabled: !!projectId,
      refetchInterval(currentData) {
        if (currentData?.projectGeneration.status === ProjectGenerationStatus.RUNNING) {
          return 1000 * 10; // 10 seconds
        }

        return false;
      },
    }
  );

  const projectGeneration = useMemo(
    () =>
      data?.projectGeneration
        ? ProjectGenerationMapper.fromApi(data?.projectGeneration)
        : undefined,
    [data?.projectGeneration]
  );

  return {
    projectGeneration,
    isLoading,
    isSuccess,
  };
}
