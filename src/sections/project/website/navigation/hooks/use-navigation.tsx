import { useDeleteMenu } from 'src/api/menu';
import { useGetProjectMenus } from 'src/api/project';
import { useSnackbar } from 'src/components/snackbar';
import { useProjectContext } from 'src/providers/project/project-context';

export const useNavigation = () => {
  const { project, isLoading: projectLoading } = useProjectContext();

  const { menus, isLoading: projectMenusLoading, refetch } = useGetProjectMenus(project.id);

  const { deleteMenu } = useDeleteMenu();

  const isLoading = projectLoading || projectMenusLoading;

  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();

  const handleDeleteMenu = async (id: number) => {
    try {
      await deleteMenu({ id, projectId: project.id });

      await refetch();

      enqueueSnackbar('Successfully deleted');
    } catch (error) {
      console.log(error);
      enqueueErrorSnackbar(error.message || 'Failed updating the menus');
    }
  };

  const handleOnMenuSubmit = async () => {
    await refetch();
  };

  return {
    projectId: project.id,
    projectName: project.name,
    isLoading,
    menus,
    handleDeleteMenu,
    handleOnMenuSubmit,
  };
};
