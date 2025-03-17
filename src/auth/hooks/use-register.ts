import { RegisterInput, useRegisterMutation } from 'src/graphql/generated';

export const useRegister = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useRegisterMutation();

  const handleRegister = async (input: RegisterInput) => {
    const result = await mutateAsync({ input });

    return result.register;
  };

  return {
    register: handleRegister,
    isError,
    isLoading,
    isSuccess,
  };
};
