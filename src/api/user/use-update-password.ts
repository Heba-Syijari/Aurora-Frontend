import { UpdatePasswordInput, useUpdatePasswordMutation } from 'src/graphql/generated';

export const useUpdatePassword = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useUpdatePasswordMutation();

  const handleUpdatePassword = async (input: UpdatePasswordInput) => {
    const result = await mutateAsync({ input });

    return result.updatePassword;
  };

  return {
    updatePassword: handleUpdatePassword,
    isError,
    isLoading,
    isSuccess,
  };
};
