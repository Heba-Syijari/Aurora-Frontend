import { useGenerateImageMutation } from 'src/graphql/generated';

export const useGenerateImage = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useGenerateImageMutation();

  const handleGenerateImage = async (description: string) => {
    const result = await mutateAsync({ generateImageInput: description });

    return result.generateImage;
  };

  return {
    generateImage: handleGenerateImage,
    isError,
    isLoading,
    isSuccess,
  };
};
