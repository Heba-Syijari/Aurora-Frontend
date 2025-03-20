import { CreateMediaInput, useCreateProjectMediaMutation } from 'src/graphql/generated';

export const useCreateMedia = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useCreateProjectMediaMutation();

  const handleMutate = async (input: CreateMediaInput) => {
    const result = await mutateAsync({ createMediaInput: input });

    return result.createMedia;
  };

  return {
    createMedia: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
