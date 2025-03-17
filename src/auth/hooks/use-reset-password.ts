import { ResetPasswordInput, useResetPasswordMutation } from 'src/graphql/generated';

export const useResetPassword = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useResetPasswordMutation();

  const handleResetPassword = async (input: ResetPasswordInput) => {
    const result = await mutateAsync({ resetPasswordInput: input });

    return result.resetPassword;
  };

  return {
    resetPassword: handleResetPassword,
    isError,
    isLoading,
    isSuccess,
  };
};
