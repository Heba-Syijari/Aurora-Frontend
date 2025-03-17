import { useSuggestDomainNamesMutation } from 'src/graphql/generated';

export function useSuggestDomainNames() {
  const { mutateAsync, data, isError, isLoading, isSuccess } = useSuggestDomainNamesMutation();

  const handleSuggest = async (keyword: string) => {
    const result = await mutateAsync({ keyword });

    return result.suggestDomainNames;
  };

  return {
    suggest: handleSuggest,
    domainNames: data?.suggestDomainNames ?? [],
    isError,
    isLoading,
    isSuccess,
  };
}
