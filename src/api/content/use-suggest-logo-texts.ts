import { useSuggestLogoTextsMutation } from 'src/graphql/generated';

export const useSuggestLogoTexts = () => {
  const { mutateAsync, data, isError, isLoading, isSuccess } = useSuggestLogoTextsMutation();

  const handleSuggest = async (keyword: string) => {
    const result = await mutateAsync({ keyword });

    return result.suggestLogoTexts;
  };

  return {
    suggest: handleSuggest,
    values: data?.suggestLogoTexts ?? [],
    isError,
    isLoading,
    isSuccess,
  };
};
