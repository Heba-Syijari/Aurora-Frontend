import { useDeletePostMutation } from 'src/graphql/generated';

export const useDeletePost = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useDeletePostMutation();

  const handleDelete = async (id: number) => {
    const result = await mutateAsync({ postId: id });

    return result.deletePost;
  };

  return {
    deletePost: handleDelete,
    isError,
    isLoading,
    isSuccess,
  };
};
