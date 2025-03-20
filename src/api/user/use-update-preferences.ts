import { UpdatePreferencesInput, useUpdatePreferencesMutation } from 'src/graphql/generated';

export const useUpdatePreferences = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useUpdatePreferencesMutation();

  const handleUpdatePreferences = async (input: UpdatePreferencesInput) => {
    const result = await mutateAsync({ input });

    return result.updatePreferences;
  };

  return {
    updatePreferences: handleUpdatePreferences,
    isError,
    isLoading,
    isSuccess,
  };
};
