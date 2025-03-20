import { RegeneratePageInput, useRegeneratePageMutation } from 'src/graphql/generated';

export const useRegeneratePage = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useRegeneratePageMutation();

  const handleMutate = async (input: RegeneratePageInput) => {
    const result = await mutateAsync({ regeneratePageInput: input });

    return result.regeneratePage;
  };

  return {
    regeneratePage: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
