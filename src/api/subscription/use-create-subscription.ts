import { CreateSubscriptionInput, useCreateSubscriptionMutation } from 'src/graphql/generated';

export const useCreateSubscription = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useCreateSubscriptionMutation();

  const handleCreateSubscription = async (input: CreateSubscriptionInput) => {
    const result = await mutateAsync({ createSubscriptionInput: input });

    return result.createSubscription;
  };

  return {
    subscribe: handleCreateSubscription,
    isError,
    isLoading,
    isSuccess,
  };
};
