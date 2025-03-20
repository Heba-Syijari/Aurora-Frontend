import { useGetThemesQuery } from 'src/graphql/generated';

export const useGetThemes = () => {
  const { data, isError, isLoading, isSuccess } = useGetThemesQuery();

  return {
    themes: data?.themes ?? [],
    isLoading,
    isSuccess,
    isError,
  };
};
