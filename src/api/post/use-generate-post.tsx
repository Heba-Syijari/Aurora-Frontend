import { useGeneratePostMutation } from 'src/graphql/generated';

export const useGeneratePost = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useGeneratePostMutation();

  const handleGenerate = async (projectId: string) => {
    const result = await mutateAsync({ projectId });

    return result.generatePost;
  };

  return {
    generatePost: handleGenerate,
    isError,
    isLoading,
    isSuccess,
  };
};
