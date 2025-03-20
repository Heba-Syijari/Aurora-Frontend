import { CreateMenuInput, useCreateProjectMenuMutation } from 'src/graphql/generated';

export const useCreateMenu = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useCreateProjectMenuMutation();

  const handleMutate = async (input: CreateMenuInput) => {
    const result = await mutateAsync({ createMenuInput: input });

    return result.createMenu;
  };

  return {
    createMenu: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
