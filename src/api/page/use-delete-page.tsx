import { DeletePageInput, useDeletePageMutation } from 'src/graphql/generated';

export const useDeletePage = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useDeletePageMutation();

  const handleMutate = async (input: DeletePageInput) => {
    const result = await mutateAsync({ deletePageInput: input });

    return result.deletePage;
  };

  return {
    deletePage: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
