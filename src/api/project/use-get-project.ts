import { useGetProjectByIdQuery } from 'src/graphql/generated';

export function useGetProject(id: string) {
  const { data, isLoading, isSuccess, isError, error, refetch } = useGetProjectByIdQuery(
    { projectId: id },
    { enabled: !!id }
  );

  return {
    project: data?.project,
    refetch,
    isLoading,
    isSuccess,
    isError,
    errorMessage: (error as Error)?.message,
  };
}
