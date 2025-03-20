import {
  ChangeComponentLayoutInput,
  useChangePageComponentLayoutMutation,
} from 'src/graphql/generated';

export const useChangeComponentLayout = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useChangePageComponentLayoutMutation();

  const handleChange = async (input: ChangeComponentLayoutInput) => {
    const result = await mutateAsync({ changePageComponentInput: input });

    return result.changePageComponentLayout;
  };

  return {
    changeComponentLayout: handleChange,
    isError,
    isLoading,
    isSuccess,
  };
};
