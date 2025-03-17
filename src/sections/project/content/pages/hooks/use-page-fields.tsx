import { useMemo, useState } from 'react';
import { useDeletePage, useRegeneratePage } from 'src/api/page';
import { useSnackbar } from 'src/components/snackbar';
import { useBoolean } from 'src/hooks/use-boolean';
import { useProjectContext } from 'src/providers/project/project-context';
import { useRouter } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
import { IPage } from 'src/types/project';

export const usePageFields = (pages: IPage[]) => {
  const { project, refetch } = useProjectContext();

  const { deletePage } = useDeletePage();
  const { regeneratePage } = useRegeneratePage();

  const addPageDialogOpen = useBoolean();
  const deletePageDialogOpen = useBoolean();
  const regeneratePageDialogOpen = useBoolean();

  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();
  const router = useRouter();

  const defaultPageId = pages[0]?.id;
  const [selectedPageId, setSelectedPageId] = useState(defaultPageId);

  const selectedPage = useMemo(
    () => pages.find(({ id }) => id === selectedPageId),
    [selectedPageId, pages]
  );

  const handlePageChange = (value: number) => {
    setSelectedPageId(value);
  };

  const handleEditPage = () => {
    const path = paths.builder.project.edit(project.id);
    router.push(`${path}?pageId=${selectedPageId}`);
  };

  const handleRegeneratePage = async () => {
    try {
      await regeneratePage({ pageId: selectedPageId, projectId: project.id });
      enqueueSnackbar('Successfully regenerated', { variant: 'success' });
    } catch (err) {
      console.log(err);
      enqueueErrorSnackbar(err.message || 'Failed regenerating the page');
    } finally {
      regeneratePageDialogOpen.onFalse();
    }
  };

  const handleDeletePage = async () => {
    try {
      await deletePage({ pageId: selectedPageId, projectId: project.id });
      await refetch();
      setSelectedPageId(defaultPageId);
      enqueueSnackbar('Successfully deleted');
    } catch (err) {
      console.log(err);
      enqueueErrorSnackbar(err.message || 'Failed deleting the page');
    } finally {
      deletePageDialogOpen.onFalse();
    }
  };

  const openAddPageDialog = () => {
    addPageDialogOpen.onTrue();
  };

  const openDeletePageDialog = () => {
    deletePageDialogOpen.onTrue();
  };

  const openRegeneratePageDialog = () => {
    regeneratePageDialogOpen.onTrue();
  };

  const closeAddPageDialog = () => {
    addPageDialogOpen.onFalse();
  };

  const closeDeletePageDialog = () => {
    deletePageDialogOpen.onFalse();
  };

  const closeRegeneratePageDialog = () => {
    regeneratePageDialogOpen.onFalse();
  };

  return {
    selectedPageId,
    selectedPage,
    handlePageChange,
    handleEditPage,
    handleRegeneratePage,
    handleDeletePage,
    openAddPageDialog,
    openDeletePageDialog,
    openRegeneratePageDialog,
    closeAddPageDialog,
    closeDeletePageDialog,
    closeRegeneratePageDialog,
    addPageDialogOpen: addPageDialogOpen.value,
    deletePageDialogOpen: deletePageDialogOpen.value,
    regeneratePageDialogOpen: regeneratePageDialogOpen.value,
  };
};
