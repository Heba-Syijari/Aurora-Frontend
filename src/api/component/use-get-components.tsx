import { useGetComponentQuery } from 'src/graphql/hasura';

export const useGetComponents = () => {
  const { data, isError, isLoading, isSuccess } = useGetComponentQuery();
  return {
    components: data?.components ?? [],
    isError,
    isLoading,
    isSuccess,
  };
};
