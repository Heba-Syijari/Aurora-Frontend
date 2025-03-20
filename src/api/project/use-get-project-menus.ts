import { useGetProjectMenusQuery } from 'src/graphql/generated';
import { MenuMapper } from '../menu/menu.mapper';

export function useGetProjectMenus(id: string) {
  const { data, isLoading, isSuccess, isError, refetch } = useGetProjectMenusQuery(
    { projectId: id },
    { enabled: !!id }
  );

  return {
    menus: (data?.getProjectMenus || []).map(MenuMapper.fromApi),
    isLoading,
    isSuccess,
    isError,
    refetch,
  };
}
