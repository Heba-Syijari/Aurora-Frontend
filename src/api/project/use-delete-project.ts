import { useDeleteProjectMutation } from 'src/graphql/generated';

export const useDeleteProject = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useDeleteProjectMutation();

  const handleDeleteProject = async (projectId: string) => {
    const result = await mutateAsync({ projectId });

    return result.deleteProject;
  };

  return {
    deleteProject: handleDeleteProject,
    isError,
    isLoading,
    isSuccess,
  };
};
