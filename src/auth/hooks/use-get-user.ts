import { useMemo } from 'react';
import { UserMapper } from 'src/api/user/user.mapper';
import { useMeQuery } from 'src/graphql/generated';
import storage from 'src/utils/storage';

export const useGetUser = () => {
  const token = storage.getToken();

  const { data, isError, isLoading, isSuccess, refetch, error } = useMeQuery(undefined, {
    enabled: !!token,
  });

  const user = useMemo(() => (data?.me ? UserMapper.fromApi(data.me) : undefined), [data?.me]);

  return {
    user,
    isLoading,
    isSuccess,
    isError,
    refetch,
    error,
  };
};
