import { UpdateProfileInput, useUpdateProfileMutation } from 'src/graphql/generated';

export const useUpdateProfile = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useUpdateProfileMutation();

  const handleUpdateProfile = async (input: UpdateProfileInput) => {
    const result = await mutateAsync({ input });

    return result.updateProfile;
  };

  return {
    updateProfile: handleUpdateProfile,
    isError,
    isLoading,
    isSuccess,
  };
};
