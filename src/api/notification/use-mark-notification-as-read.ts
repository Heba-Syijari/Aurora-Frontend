import { useMarkNotificationAsReadMutation } from 'src/graphql/hasura';

export const useMarkNotificationAsRead = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useMarkNotificationAsReadMutation();

  const handleMutate = async (id: number) => {
    const result = await mutateAsync({ id });

    return result.update_Notification;
  };

  return {
    markNotificationAsRead: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
