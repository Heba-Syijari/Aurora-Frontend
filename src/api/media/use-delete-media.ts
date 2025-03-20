import { DeleteMediaInput, useDeleteProjectMediaMutation } from 'src/graphql/generated';

export const useDeleteMedia = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useDeleteProjectMediaMutation();

  const handleMutate = async (input: DeleteMediaInput) => {
    const result = await mutateAsync({ deleteMediaInput: input });

    return result.deleteMedia;
  };

  return {
    deleteMedia: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
