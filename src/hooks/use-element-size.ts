import { useState } from 'react';

import { useEventListener } from './use-event-listener';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

interface ElementSize {
  width: number;
  height: number;
}

export function useElementSize(id: string): ElementSize {
  const [windowSize, setElementSize] = useState<ElementSize>({
    width: 0,
    height: 0,
  });

  const handleSize = () => {
    const elementBoundingRect = document.getElementById(id)?.getBoundingClientRect();
    setElementSize({
      width: elementBoundingRect?.width ?? 0,
      height: elementBoundingRect?.height ?? 0,
    });
  };

  useEventListener('resize', handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}
