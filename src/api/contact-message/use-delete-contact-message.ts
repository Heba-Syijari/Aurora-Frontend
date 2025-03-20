import { RemoveContactMessageInput, useRemoveContactMessageMutation } from 'src/graphql/generated';

export const useDeleteContactMessage = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useRemoveContactMessageMutation();

  const handleDeleteContactMessage = async (input: RemoveContactMessageInput) => {
    const result = await mutateAsync({ removeContactMessageInput: input });

    return result.removeContactMessage;
  };

  return {
    deleteContactMessage: handleDeleteContactMessage,
    isError,
    isLoading,
    isSuccess,
  };
};
