import { useCallback, useMemo } from 'react';
import { useGetMyProjects } from 'src/api/project';

export const useHomeView = () => {
  const { projects, refetch: refetchProjects, isLoading: isProjectLoading } = useGetMyProjects();

  const handleDeleteProject = useCallback(async () => {
    try {
      await Promise.allSettled([refetchProjects()]);
    } catch (err) {
      console.log(err);
    }
  }, [refetchProjects]);
  console.log(projects);

  const memoizedValue = useMemo(() => {
    const projectsCount = projects.length;
    const publishedProjectsCount = projects.filter((p) => p.isPublished).length;

    return {
      projectsCount,
      publishedProjectsCount,
      projects,
      handleDeleteProject,
      isProjectLoading,
    };
  }, [isProjectLoading, projects, handleDeleteProject]);

  return memoizedValue;
};
