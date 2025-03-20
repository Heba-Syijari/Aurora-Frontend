import { useExportProjectMutation } from 'src/graphql/generated';

export const useExportProject = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useExportProjectMutation();

  const handleExportProject = async (projectId: string) => {
    const result = await mutateAsync({ projectId });

    return result.exportProject;
  };

  return {
    exportProject: handleExportProject,
    isError,
    isLoading,
    isSuccess,
  };
};
