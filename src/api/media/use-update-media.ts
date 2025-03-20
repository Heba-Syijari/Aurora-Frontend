import { UpdateMediaInput, useUpdateProjectMediaMutation } from 'src/graphql/generated';

export const useUpdateMedia = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useUpdateProjectMediaMutation();

  const handleMutate = async (input: UpdateMediaInput) => {
    const result = await mutateAsync({ updateMediaInput: input });

    return result.updateMedia;
  };

  return {
    updateMedia: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
