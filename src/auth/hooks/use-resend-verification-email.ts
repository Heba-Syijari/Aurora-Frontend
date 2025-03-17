import {
  ResendVerificationEmailInput,
  useResendVerificationEmailMutation,
} from 'src/graphql/generated';

export const useResendVerificationEmail = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useResendVerificationEmailMutation();

  const handleResendVerificationEmail = async (input: ResendVerificationEmailInput) => {
    const result = await mutateAsync({ resendInput: input });

    return result.resendVerificationEmail;
  };

  return {
    resendVerification: handleResendVerificationEmail,
    isError,
    isLoading,
    isSuccess,
  };
};
