import { CreateDonationInput, useCreateDonationMutation } from 'src/graphql/generated';

export const useCreateDonation = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useCreateDonationMutation();

  const handleCreateDonation = async (input: CreateDonationInput) => {
    const result = await mutateAsync({ createDonationInput: input });

    return result.createDonation;
  };

  return {
    donate: handleCreateDonation,
    isError,
    isLoading,
    isSuccess,
  };
};
