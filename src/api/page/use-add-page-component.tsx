import { AddPageComponentInput, useAddComponentMutation } from 'src/graphql/generated';

export const useAddPageComponent = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useAddComponentMutation();

  const handleAdd = async (input: AddPageComponentInput) => {
    const result = await mutateAsync({ addComponentInput: input });

    return result.addPageComponent;
  };

  return {
    addPageComponent: handleAdd,
    isError,
    isLoading,
    isSuccess,
  };
};
