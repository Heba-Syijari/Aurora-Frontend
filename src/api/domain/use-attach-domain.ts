import { AttachDomainInput, useAttachDomainMutation } from 'src/graphql/generated';

export const useAttachDomain = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useAttachDomainMutation();

  const handleMutate = async (input: AttachDomainInput) => {
    const result = await mutateAsync({ attachDomainInput: input });

    return result.attachDomain;
  };

  return {
    attachDomain: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
