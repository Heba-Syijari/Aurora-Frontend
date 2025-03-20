'use client';

import { useEnhanceTextMutation } from 'src/graphql/generated';

export function useEnhanceText() {
  const { mutateAsync, data, isError, isLoading, isSuccess } = useEnhanceTextMutation();

  const handleEnhance = async (text: string) => {
    const result = await mutateAsync({ text });

    return result.enhanceText;
  };

  return {
    enhance: handleEnhance,
    enhancedText: data?.enhanceText,
    isError,
    isLoading,
    isSuccess,
  };
}
