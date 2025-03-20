import {
  CreateFreeDomainRegistrationInput,
  useCreateFreeDomainRegistrationMutation,
} from 'src/graphql/generated';

export const useCreateFreeDomainRegistration = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useCreateFreeDomainRegistrationMutation();

  const handleMutate = async (input: CreateFreeDomainRegistrationInput) => {
    const result = await mutateAsync({ createFreeDomainRegistrationInput: input });

    return result.createFreeDomainRegistration;
  };

  return {
    createFreeDomainRegistration: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
