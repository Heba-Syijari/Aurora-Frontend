import { useGenerateTextMutation } from 'src/graphql/generated';

export const useGenerateText = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useGenerateTextMutation();

  const handleGenerateText = async (text: string) => {
    const result = await mutateAsync({ generateTextInput: text });

    return result.generateText;
  };

  return {
    generateText: handleGenerateText,
    isError,
    isLoading,
    isSuccess,
  };
};
