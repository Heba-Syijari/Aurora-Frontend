import { useGetPaletteQuery } from 'src/graphql/generated';
import { PaletteMapper } from './pallete.mapper';

export const useGetPalettes = () => {
  const { data, isError, isLoading, isSuccess, refetch } = useGetPaletteQuery();

  return {
    palettes: data?.palettes.map((palette, index) => PaletteMapper.fromApi(palette, index)) ?? [],
    isError,
    isLoading,
    refetch,
    isSuccess,
  };
};
