import { useCallback } from 'react';
import { useDeleteContactMessage } from 'src/api/contact-message';
import { useSnackbar } from 'src/components/snackbar';
import { useProjectContext } from 'src/providers/project/project-context';

export const useContactMessage = () => {
  const { project, refetch } = useProjectContext();

  const { deleteContactMessage } = useDeleteContactMessage();

  const { enqueueErrorSnackbar, enqueueSnackbar } = useSnackbar();

  const handleDelete = useCallback(
    async (messageId: number) => {
      try {
        await deleteContactMessage({ id: messageId, projectId: project.id });
        await refetch();

        enqueueSnackbar('Successfully deleted');
      } catch (err) {
        console.log({ err });
        enqueueErrorSnackbar(err.message || 'Error while deleting the message');
      }
    },
    [deleteContactMessage, enqueueErrorSnackbar, enqueueSnackbar, project.id, refetch]
  );

  return {
    projectId: project.id,
    projectName: project.name,
    data: project.contactMessages || [],
    handleDelete,
  };
};
