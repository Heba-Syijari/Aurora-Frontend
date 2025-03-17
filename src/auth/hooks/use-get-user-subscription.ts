import { useMemo } from 'react';
import { SubscriptionMapper } from 'src/api/subscription/subscription.mapper';
import { useGetMySubscriptionQuery } from 'src/graphql/generated';
import storage from 'src/utils/storage';

export const useGetUserSubscription = () => {
  const token = storage.getToken();

  const { data, isError, isLoading, isSuccess, refetch } = useGetMySubscriptionQuery(undefined, {
    enabled: !!token,
  });

  const subscription = useMemo(
    () =>
      data?.getMySubscription ? SubscriptionMapper.fromApi(data?.getMySubscription) : undefined,
    [data?.getMySubscription]
  );

  return {
    subscription,
    isLoading,
    isSuccess,
    isError,
    refetch,
  };
};
