import { UpdateProjectInput, useUpdateProjectMutation } from 'src/graphql/generated';

export const useUpdateProject = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useUpdateProjectMutation();

  const handleUpdateProject = async (input: UpdateProjectInput) => {
    const result = await mutateAsync({ updateProjectInput: input });

    return result.updateProject;
  };

  return {
    updateProject: handleUpdateProject,
    isError,
    isLoading,
    isSuccess,
  };
};
