import { useMemo } from 'react';
import { useGetMyNotificationsQuery } from 'src/graphql/hasura';
import { NotificationMapper } from './notification.mapper';

export const useGetMyNotifications = () => {
  const { data, isLoading, refetch } = useGetMyNotificationsQuery();

  const memoizedValue = useMemo(() => {
    const notifications = (data?.Notification || []).map(NotificationMapper.fromApi);

    return {
      notifications,
      isLoading,
      isEmpty: !isLoading && !notifications.length,
      refetch,
    };
  }, [data?.Notification, isLoading, refetch]);

  return memoizedValue;
};
