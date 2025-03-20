import { useMarkAllNotificationsAsReadMutation } from 'src/graphql/hasura';

export const useMarkAllNotificationsAsRead = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useMarkAllNotificationsAsReadMutation();

  const handleMutate = async () => {
    const result = await mutateAsync({});

    return result.update_Notification;
  };

  return {
    markAllNotificationsAsRead: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
