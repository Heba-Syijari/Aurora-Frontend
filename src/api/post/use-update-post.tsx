import { UpdatePostInput, useUpdatePostMutation } from 'src/graphql/generated';

export const useUpdatePost = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useUpdatePostMutation();

  const handleUpdate = async (input: UpdatePostInput) => {
    const result = await mutateAsync({ updatePostInput: input });

    return result.updatePost;
  };

  return {
    updatePost: handleUpdate,
    isError,
    isLoading,
    isSuccess,
  };
};
