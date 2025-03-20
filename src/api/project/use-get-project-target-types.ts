import { useGetProjectTargetTypesQuery } from 'src/graphql/generated';

export const useGetProjectTargetTypes = () => {
  const { data, isError, isLoading, isSuccess } = useGetProjectTargetTypesQuery();

  return {
    targetTypes: data?.projectTargetTypes ?? [],
    isLoading,
    isSuccess,
    isError,
  };
};
