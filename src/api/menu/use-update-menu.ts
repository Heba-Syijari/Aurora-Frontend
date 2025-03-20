import { UpdateMenuInput, useUpdateProjectMenuMutation } from 'src/graphql/generated';

export const useUpdateMenu = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useUpdateProjectMenuMutation();

  const handleMutate = async (input: UpdateMenuInput) => {
    const result = await mutateAsync({ updateMenuInput: input });

    return result.updateMenu;
  };

  return {
    updateMenu: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
