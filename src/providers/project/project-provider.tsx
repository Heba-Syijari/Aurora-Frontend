import { useEffect, useMemo } from 'react';
import { ProjectMapper, useGetProject } from 'src/api/project';
import { SplashScreen } from 'src/components/loading-screen';
import { useSnackbar } from 'src/components/snackbar';
import { ProjectContext } from './project-context';

// ----------------------------------------------------------------------

type ProjectProviderProps = {
  id: string;
  children: React.ReactNode;
};

export function ProjectProvider({ id, children }: ProjectProviderProps) {
  const { project, isError, errorMessage, isLoading, refetch } = useGetProject(id);

  const { enqueueErrorSnackbar } = useSnackbar();

  useEffect(() => {
    if (isError) {
      enqueueErrorSnackbar(errorMessage);
    }
  }, [enqueueErrorSnackbar, errorMessage, isError]);

  const memoizedValue = useMemo(
    () => ({
      project: ProjectMapper.fromApi(project ?? {}),
      refetch,
      isLoading,
      isError,
      errorMessage,
    }),
    [errorMessage, isError, isLoading, project, refetch]
  );

  const renderContent = isLoading ? <SplashScreen /> : children;

  return (
    <ProjectContext.Provider value={memoizedValue}>
      {!isError && renderContent}
    </ProjectContext.Provider>
  );
}
