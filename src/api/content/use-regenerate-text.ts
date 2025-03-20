import { RegenerateTextInput, useRegenerateTextMutation } from 'src/graphql/generated';

export const useRegenerateText = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useRegenerateTextMutation();

  const handleRegenerateText = async (input: RegenerateTextInput) => {
    const result = await mutateAsync({ regenerateTextInput: input });

    return result.regenerateText;
  };

  return {
    regenerateText: handleRegenerateText,
    isError,
    isLoading,
    isSuccess,
  };
};
