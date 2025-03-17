import { useState } from 'react';
import { useSnackbar } from 'src/components/snackbar';
import { useProjectContext } from 'src/providers/project/project-context';
import { useUpdateProject } from 'src/api/project';
import { PresentationVolume, PresentationVolumeType } from 'src/types/website-presentation';

export const usePages = () => {
  const { project, refetch } = useProjectContext();

  const { updateProject, isLoading } = useUpdateProject();

  const { enqueueSnackbar } = useSnackbar();

  const [selectedVolume, setSelectedVolume] = useState<PresentationVolumeType>(
    project.presentationVolume || PresentationVolume.SIMPLE
  );

  const handleVolumeChange = (volume: PresentationVolumeType) => {
    setSelectedVolume(volume);
  };

  const updateProjectVolume = async () => {
    try {
      await updateProject({
        id: project.id,
        volume: selectedVolume,
      });

      await refetch();

      enqueueSnackbar('Successfully updated', { variant: 'success' });
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message || 'Failed updating the project', { variant: 'error' });
    }
  };

  return {
    projectId: project.id,
    projectName: project.name,
    isLoading,
    pages: project.pages,
    selectedVolume,
    handleVolumeChange,
    updateProjectVolume,
  };
};
