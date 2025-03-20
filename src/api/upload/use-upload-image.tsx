import { useMutation } from 'react-query';
import { uploadImage, uploadImageURL } from './upload-image';

export const useUploadImage = () => {
  const {
    mutateAsync: mutateAsyncImage,
    isLoading: imageLoading,
    isError: imageError,
  } = useMutation({
    mutationKey: 'uploadImage',
    mutationFn: uploadImage,
  });

  const handleUploadImage = async (image: any) => {
    const response = await mutateAsyncImage({ image });

    return response.data;
  };

  const {
    mutateAsync: mutateAsyncImageURL,
    isLoading: imageURLLoading,
    isError: imageURLError,
  } = useMutation({
    mutationKey: 'uploadImageURL',
    mutationFn: uploadImageURL,
  });

  const handleUploadImageURL = async (url: string) => {
    const response = await mutateAsyncImageURL({ imageURL: url });

    return response.data;
  };

  return {
    uploadImage: handleUploadImage,
    uploadImageURL: handleUploadImageURL,
    isLoading: imageLoading || imageURLLoading,
    isError: imageError || imageURLError,
    imageError,
    imageURLError,
  };
};
