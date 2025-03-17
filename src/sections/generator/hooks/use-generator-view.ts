import { useCallback, useEffect, useState } from 'react';
import { useCreateProject, useGetProjectGeneration } from 'src/api/project';
import { useUploadImage } from 'src/api/upload/use-upload-image';
import { useSnackbar } from 'src/components/snackbar';
import { usePreventReload } from 'src/hooks/use-prevent-reload';
import { paths } from 'src/routes/paths';
import { ProjectGenerationStatus } from 'src/types/project';
import storage from 'src/utils/storage';
import { initProjectData } from '../view/data';
import { ProjectData } from '../view/types';

// ---------------------------------------------

type GenerationState = {
  activeStep: number;
  projectData: ProjectData;
};

function getInitialGenerationState(): GenerationState {
  return {
    activeStep: 0,
    projectData: initProjectData,
  };
}

function getCachedGenerationState(): GenerationState {
  const state = storage.getItem<GenerationState>('generationState');

  if (state) {
    return state;
  }

  return getInitialGenerationState();
}

// ---------------------------------------------

export default function useGeneratorView() {
  const [projectId, setProjectId] = useState('');
  const [generationState, setGenerationState] = useState<GenerationState>(
    getCachedGenerationState()
  );
  const { activeStep, projectData } = generationState;

  const { createProject, isLoading: createProjectLoading, isSuccess } = useCreateProject();
  const { projectGeneration, isLoading: projectGenerationLoading } =
    useGetProjectGeneration(projectId);
  const { uploadImage, isLoading: uploadImageLoading } = useUploadImage();

  const { enqueueErrorSnackbar } = useSnackbar();

  const back = useCallback(() => {
    setGenerationState((state) => ({ ...state, activeStep: state.activeStep - 1 }));
  }, []);

  usePreventReload(!isSuccess);

  const getLogoValue = async (): Promise<string> => {
    const { logoValue } = projectData.websiteDesign;

    if (logoValue instanceof File) {
      const result = await uploadImage(logoValue);
      return result.fileURL;
    }

    return logoValue;
  };

  const handleCreateProject = async () => {
    try {
      const logoValue = await getLogoValue();
      const project = await createProject({
        type: projectData.type,
        purpose: projectData.purpose,
        name: projectData.websiteStory.name,
        description: projectData.websiteStory.description,
        keywords: projectData.websiteStory.keywords,
        similarWebsites: projectData.websiteInfo.similarWebsites,
        websiteLocation: projectData.websiteInfo.websiteLocation,
        mainLanguage: projectData.websiteInfo.mainLanguage,
        intellectualProperty: projectData.intellectualProperty,
        sections: projectData.WebsiteSections.map((item, index) => ({
          order: index + 1,
          componentId: item.component,
        })),
        generateAI: projectData.websiteStory.generateContentByAi,
        // generateAI: false,
        media: projectData.websiteContent.items
          .filter((item) => item.type !== 'text')
          .map((item) => ({
            title: item.title,
            path: item.value,
            type: item.type.toUpperCase(),
          })),
        audience: projectData.websiteAudience,
        // ...sampleProjectData,
        design: {
          fontFamily: projectData.websiteDesign.fontFamily,
          logoType: projectData.websiteDesign.logoType,
          palette: projectData.websiteDesign.palette,
          logoValue,
        },
        plugins: projectData.websitePlugins.plugins,
      });

      console.log(project, "project")

      setProjectId(project.id);
    } catch (error) {
      console.log({ error });
      enqueueErrorSnackbar(error.message);
    }
  };

  function getData<K extends keyof ProjectData>(key: K): ProjectData[K] {
    return projectData[key];
  }

  function updateData<K extends keyof ProjectData>(key: K, payload: ProjectData[K]) {
    setGenerationState((state) => ({
      ...state,
      activeStep: state.activeStep + 1,
      projectData: { ...state.projectData, [key]: payload },
    }));
  }

  const cacheGenerationState = useCallback((state: GenerationState) => {
    storage.setItem('generationState', state);
  }, []);

  useEffect(() => {
    cacheGenerationState(generationState);
  }, [cacheGenerationState, generationState]);

  useEffect(() => {
    try {
      if (!projectId) return;

      if (projectGeneration?.status === ProjectGenerationStatus.COMPLETED) {
        cacheGenerationState(getInitialGenerationState());
        window.location.href = paths.builder.project.edit(projectId);
      } else if (projectGeneration?.status === ProjectGenerationStatus.FAILED) {
        enqueueErrorSnackbar(projectGeneration.error!);
      }
    } catch (error) {
      console.log({ error });
      enqueueErrorSnackbar(error.message!);
    }
  }, [cacheGenerationState, enqueueErrorSnackbar, projectGeneration, projectId]);

  return {
    activeStep,
    back,
    getData,
    updateData,
    createProject: handleCreateProject,
    loading: createProjectLoading || uploadImageLoading || isSuccess || projectGenerationLoading,
  };
}
