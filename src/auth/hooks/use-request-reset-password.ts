import {
  RequestRecoverPasswordInput,
  useRequestRecoverPasswordMutation,
} from 'src/graphql/generated';

export const useRequestResetPassword = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useRequestRecoverPasswordMutation();

  const handleRequest = async (input: RequestRecoverPasswordInput) => {
    const result = await mutateAsync({ requestRecoverPasswordInput: input });

    return result.requestRecoverPassword;
  };

  return {
    requestResetPassword: handleRequest,
    isError,
    isLoading,
    isSuccess,
  };
};
