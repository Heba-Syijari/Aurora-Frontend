import { useMemo } from 'react';
import { useGetContentTypesOnProjectsQuery } from 'src/graphql/hasura';

export const useGetProjectContentTypes = (projectId: string) => {
  const { data, isError, isLoading, isSuccess, refetch } = useGetContentTypesOnProjectsQuery(
    { projectId },
    { enabled: !!projectId }
  );

  const memoizedValue = useMemo(
    () => ({
      contentTypes: (data?.ContentTypesOnProjects ?? []).map(
        ({ ContentType: { __typename, ...item } }) => item
      ),
      isError,
      isLoading,
      isSuccess,
      refetch,
    }),
    [data?.ContentTypesOnProjects, isError, isLoading, isSuccess, refetch]
  );

  return memoizedValue;
};
