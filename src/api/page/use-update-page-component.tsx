import { UpdatePageComponentInput, useUpdatePageComponentMutation } from 'src/graphql/generated';

export const useUpdatePageComponent = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useUpdatePageComponentMutation();

  const handleUpdate = async (input: UpdatePageComponentInput) => {
    const result = await mutateAsync({ pageComponentInput: input });

    return result.updatePageComponent;
  };

  return {
    updateComponentData: handleUpdate,
    isError,
    isLoading,
    isSuccess,
  };
};
