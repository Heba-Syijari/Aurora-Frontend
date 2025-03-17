import { Theme } from '@mui/material/styles';
import { createContext, useContext } from 'react';

export type IFrameContextProps = {
  container: Element;
  outerHead: Element;
  outerTheme: Theme;
  contentRef: HTMLIFrameElement;
};

export const IFrameContext = createContext({} as IFrameContextProps);

export const useIFrameContext = () => {
  const context = useContext(IFrameContext);

  if (!context) throw new Error('useIFrameContext must be use inside IFrameProvider');

  return context;
};
