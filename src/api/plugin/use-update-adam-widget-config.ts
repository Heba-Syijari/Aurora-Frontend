import {
  UpdateAdamWidgetConfigInput,
  useUpdateAdamWidgetConfigMutation,
} from 'src/graphql/generated';

export const useUpdateAdamWidgetConfig = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useUpdateAdamWidgetConfigMutation();

  const handleMutate = async (input: UpdateAdamWidgetConfigInput) => {
    const result = await mutateAsync({ updateAdamWidgetConfigInput: input });

    return result.updateAdamWidgetConfig;
  };

  return {
    updateAdamWidgetConfig: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
