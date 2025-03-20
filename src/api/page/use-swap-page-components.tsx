import { SwapPageComponentsInput, useSwapPageComponentsMutation } from 'src/graphql/generated';

export const useSwapPageComponents = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useSwapPageComponentsMutation();

  const handleSwap = async (input: SwapPageComponentsInput) => {
    const result = await mutateAsync({ swapInput: input });

    return result.swapPageComponents;
  };

  return {
    swap: handleSwap,
    isError,
    isLoading,
    isSuccess,
  };
};
