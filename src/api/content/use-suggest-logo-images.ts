import { useGenerateImageMutation } from 'src/graphql/generated';

export const useSuggestLogoImages = () => {
  const { mutateAsync, data, isError, isLoading, isSuccess } = useGenerateImageMutation();

  const handleSuggest = async (description: string) => {
    const result = await mutateAsync({
      generateImageInput: `a 2d modern logo using the description '${description}'`,
    });

    return [result.generateImage];
  };

  return {
    suggest: handleSuggest,
    values: data?.generateImage ? [data?.generateImage] : [],
    isError,
    isLoading,
    isSuccess,
  };
};
