import { useGetContentTypeQuery } from 'src/graphql/hasura';

export const useGetContentTypes = () => {
  const { data, isError, isLoading, isSuccess } = useGetContentTypeQuery();

  const contentTypes = (data?.ContentType ?? []).map((item) => ({
    id: item.id,
    name: item.name,
    type: item.type,
    children: (item.children ?? []).map((child) => ({ id: child.id, name: child.name })),
  }));

  return {
    contentTypes,
    isError,
    isLoading,
    isSuccess,
  };
};
