import { DetachDomainInput, useDetachDomainMutation } from 'src/graphql/generated';

export const useDetachDomain = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useDetachDomainMutation();

  const handleMutate = async (input: DetachDomainInput) => {
    const result = await mutateAsync({ detachDomainInput: input });

    return result.detachDomain;
  };

  return {
    detachDomain: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
