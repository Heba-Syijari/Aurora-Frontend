import { useCreateAnalyticsPropertyMutation } from 'src/graphql/generated';

export const useCreateAnalyticsProperty = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useCreateAnalyticsPropertyMutation();

  const handleCreateAnalyticsProperty = async (projectId: string) => {
    const result = await mutateAsync({ projectId });

    return result.createAnalyticsProperty;
  };

  return {
    createAnalyticsProperty: handleCreateAnalyticsProperty,
    isError,
    isLoading,
    isSuccess,
  };
};
