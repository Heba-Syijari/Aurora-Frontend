import { CreatePostInput, useCreatePostMutation } from 'src/graphql/generated';

export const useCreatePost = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useCreatePostMutation();

  const handleCreate = async (input: CreatePostInput) => {
    const result = await mutateAsync({ createPostInput: input });

    return result.createPost;
  };

  return {
    createPost: handleCreate,
    isError,
    isLoading,
    isSuccess,
  };
};
