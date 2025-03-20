import { useAddFreeCertificateToDomainMutation } from 'src/graphql/generated';

export const useAddFreeCertificateToDomain = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useAddFreeCertificateToDomainMutation();

  const handleMutate = async (projectId: string) => {
    const result = await mutateAsync({ projectId });

    return result.addFreeCertificateToDomain;
  };

  return {
    addFreeCertificateToDomain: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
