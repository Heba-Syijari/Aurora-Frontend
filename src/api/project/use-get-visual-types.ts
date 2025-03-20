import { useMemo } from 'react';
import { useGetVisualTypeQuery } from 'src/graphql/hasura';
import { PresentationVolumeType } from 'src/types/website-presentation';

export const useGetVisualTypes = () => {
  const { data, isError, isLoading, isSuccess } = useGetVisualTypeQuery();

  const memoizedValue = useMemo(() => {
    const visualTypes = (data?.VisualType || []).map((v) => ({
      id: v.id,
      name: v.name,
      type: v.type as PresentationVolumeType,
    }));

    return {
      visualTypes,
      isError,
      isLoading,
      isSuccess,
    };
  }, [data?.VisualType, isError, isLoading, isSuccess]);

  return memoizedValue;
};
