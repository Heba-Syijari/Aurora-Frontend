import { useMemo } from 'react';
import { useGetMyProjectsQuery } from 'src/graphql/generated';

export const useGetMyProjects = () => {
  const { data, isError, isLoading, isSuccess, refetch } = useGetMyProjectsQuery();
  // console.log(useGetMyProjectsQuery(), 'useGetMyProjectsQuery()')

  const memoizedValue = useMemo(() => {
    const projects = (data?.projects ?? []).map((p) => ({
      id: p.id,
      name: p.name,
      logo: p.settings?.logoValue!,
      isPublished: !!p.cdnPullZoneId,
      url: p.publicURL,
    }));


    return {
      projects,
      isLoading,
      isSuccess,
      isError,
      refetch,
    };
  }, [data?.projects, isError, isLoading, isSuccess, refetch]);

  return memoizedValue;
};
