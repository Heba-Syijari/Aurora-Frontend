import { useMemo } from 'react';
import { useCreateMedia, useDeleteMedia, useUpdateMedia } from 'src/api/media';
import { useSnackbar } from 'src/components/snackbar';
import { useProjectContext } from 'src/providers/project/project-context';
import { PartialBy } from 'src/types';
import { IMedia } from 'src/types/media';

export const useMedia = () => {
  const { project, refetch } = useProjectContext();

  const { createMedia } = useCreateMedia();
  const { updateMedia } = useUpdateMedia();
  const { deleteMedia } = useDeleteMedia();

  const media = useMemo(
    () => ({
      VIDEO: project.media.filter((item) => item.type === 'VIDEO'),
      AUDIO: project.media.filter((item) => item.type === 'AUDIO'),
      // IMAGE: project.media.filter((item) => item.type === 'IMAGE'),
    }),
    [project.media]
  );

  const { enqueueSnackbar } = useSnackbar();

  const handleMediaSubmit = async (item: PartialBy<IMedia, 'id'>) => {
    try {
      const payload = {
        ...item,
        projectId: project.id,
      };

      if (item.id) {
        await updateMedia({ ...payload, id: item.id });
      } else {
        await createMedia({ ...payload, viewTypes: [] });
      }

      await refetch();

      enqueueSnackbar(`Successfully ${item.id ? 'updated' : 'created'}`);
    } catch (error) {
      console.error(error);
      const message = error.message || (item.id ? 'Updating is failed' : 'Creating is failed');
      enqueueSnackbar(message, { variant: 'error' });
    }
  };

  const handleMediaDelete = async (id: number) => {
    try {
      await deleteMedia({ id, projectId: project.id });

      await refetch();

      enqueueSnackbar('Successfully deleted');
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message || 'Deleting is failed', { variant: 'error' });
    }
  };

  return {
    projectId: project.id,
    projectName: project.name,
    media,
    handleMediaDelete,
    handleMediaSubmit,
  };
};
