import { VerifyUserEmailInput, useVerifyUserEmailMutation } from 'src/graphql/generated';

export const useVerifyAccount = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useVerifyUserEmailMutation();

  const handleVerifyUserEmail = async (input: VerifyUserEmailInput) => {
    const result = await mutateAsync({ verifyUserEmailInput: input });

    return result.verifyUserEmail;
  };

  return {
    verifyAccount: handleVerifyUserEmail,
    isError,
    isLoading,
    isSuccess,
  };
};
