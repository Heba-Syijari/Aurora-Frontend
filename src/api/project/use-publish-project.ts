import { usePublishProjectMutation } from 'src/graphql/generated';

export const usePublishProject = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = usePublishProjectMutation();

  const handlePublishProject = async (projectId: string) => {
    const result = await mutateAsync({ projectId });

    return result.publishProject;
  };

  return {
    publishProject: handlePublishProject,
    isError,
    isLoading,
    isSuccess,
  };
};
