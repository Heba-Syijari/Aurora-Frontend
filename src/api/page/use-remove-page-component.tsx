import { RemovePageComponentInput, useRemoveComponentMutation } from 'src/graphql/generated';

export const useRemovePageComponent = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useRemoveComponentMutation();

  const handleRemove = async (input: RemovePageComponentInput) => {
    const result = await mutateAsync({ removeComponentInput: input });

    return result.removePageComponent;
  };

  return {
    removePageComponent: handleRemove,
    isError,
    isLoading,
    isSuccess,
  };
};
