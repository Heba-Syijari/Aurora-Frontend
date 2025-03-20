import { CreatePageInput, useCreatePageMutation } from 'src/graphql/generated';

export const useCreatePage = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useCreatePageMutation();

  const handleMutate = async (input: CreatePageInput) => {
    const result = await mutateAsync({ createPageInput: input });

    return result.createPage;
  };

  return {
    createPage: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
