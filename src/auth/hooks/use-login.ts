import { LoginInput, useLoginMutation } from 'src/graphql/generated';

export const useLogin = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useLoginMutation();

  const handleLogin = async (variables: LoginInput) => {
    const result = await mutateAsync({ input: variables });

    return result.login;
  };

  return {
    login: handleLogin,
    isError,
    isLoading,
    isSuccess,
  };
};
