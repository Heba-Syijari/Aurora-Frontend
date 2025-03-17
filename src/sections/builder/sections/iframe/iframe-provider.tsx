'use client';

import { useMemo } from 'react';
import { IFrameContext, IFrameContextProps } from './iframe-context';

// ----------------------------------------------------------------------

type IFrameProviderProps = IFrameContextProps & {
  children: React.ReactNode;
};

export function IFrameProvider({
  children,
  container,
  contentRef,
  outerHead,
  outerTheme,
}: IFrameProviderProps) {
  const memoizedValue: IFrameContextProps = useMemo(
    () => ({
      container,
      contentRef,
      outerHead,
      outerTheme,
    }),
    [container, contentRef, outerHead, outerTheme]
  );

  return <IFrameContext.Provider value={memoizedValue}>{children}</IFrameContext.Provider>;
}
