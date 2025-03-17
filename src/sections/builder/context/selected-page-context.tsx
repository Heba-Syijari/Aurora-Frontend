import { createContext, useContext } from 'react';
import { IProject } from 'src/types/project';
import { IPageOption } from '../types';

interface SelectedPageContextType {
  selectedPageUid: string;
  setSelectedPageUid: (uid: string) => void;
  selectedPage: IPageOption | undefined;
  pages: IPageOption[];
  project: IProject;
  isLoading: boolean;
}

export const SelectedPageContext = createContext<SelectedPageContextType | undefined>(undefined);

export function useSelectedPage() {
  const context = useContext(SelectedPageContext);
  if (!context) {
    throw new Error('useSelectedPage must be used within a SelectedPageProvider');
  }
  return context;
}
