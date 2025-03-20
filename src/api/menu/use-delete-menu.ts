import { DeleteMenuInput, useDeleteProjectMenuMutation } from 'src/graphql/generated';

export const useDeleteMenu = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useDeleteProjectMenuMutation();

  const handleMutate = async (input: DeleteMenuInput) => {
    const result = await mutateAsync({ deleteMenuInput: input });

    return result.deleteMenu;
  };

  return {
    deleteMenu: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
