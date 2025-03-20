import { CreateProjectInput, useCreateProjectMutation } from 'src/graphql/generated';

export const useCreateProject = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useCreateProjectMutation();

  const handleCreateProject = async (input: CreateProjectInput) => {
    const result = await mutateAsync({ createProjectInput: input });

    return result.createProject;
  };

  return {
    createProject: handleCreateProject,
    isError,
    isLoading,
    isSuccess,
  };
};
