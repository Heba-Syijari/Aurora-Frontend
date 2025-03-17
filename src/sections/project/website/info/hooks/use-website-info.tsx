import { useProjectContext } from 'src/providers/project/project-context';

export const useWebsiteInfo = () => {
  const { project } = useProjectContext();

  return {
    projectId: project.id,
    projectName: project.name,
  };
};
