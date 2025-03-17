import { createContext, useContext } from 'react';
import { IProject } from 'src/types/project';

export type ProjectContextProps = {
  project: IProject;
  isError: boolean;
  errorMessage: string;
  isLoading: boolean;
  refetch: () => Promise<any>;
};

export const ProjectContext = createContext({} as ProjectContextProps);

export const useProjectContext = () => {
  const context = useContext(ProjectContext);

  if (!context) throw new Error('useProjectContext must be use inside ProjectProvider');

  return context;
};
