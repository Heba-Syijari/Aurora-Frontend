import {
  CreateDomainRegistrationInput,
  useCreateDomainRegistrationMutation,
} from 'src/graphql/generated';

export const useCreateDomainRegistration = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useCreateDomainRegistrationMutation();

  const handleMutate = async (input: CreateDomainRegistrationInput) => {
    const result = await mutateAsync({ createDomainRegistrationInput: input });

    return result.createDomainRegistration;
  };

  return {
    createDomainRegistration: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
