import {
  UpdateProjectSettingsInput,
  useUpdateProjectSettingsMutation,
} from 'src/graphql/generated';

export const useUpdateProjectSettings = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useUpdateProjectSettingsMutation();

  const handleMutate = async (input: UpdateProjectSettingsInput) => {
    const result = await mutateAsync({ updateProjectSettingsInput: input });

    return result.updateProjectSettings;
  };

  return {
    updateProjectSettings: handleMutate,
    isError,
    isLoading,
    isSuccess,
  };
};
