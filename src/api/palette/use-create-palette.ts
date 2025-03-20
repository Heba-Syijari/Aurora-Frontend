import { CreatePaletteInput, useCreatePaletteMutation } from 'src/graphql/generated';

export const useCreatePalette = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useCreatePaletteMutation();

  const handleCreatePallete = async (input: CreatePaletteInput) => {
    const result = await mutateAsync({ input });

    return result.createPalette;
  };

  return {
    createPalette: handleCreatePallete,
    isError,
    isLoading,
    isSuccess,
  };
};
