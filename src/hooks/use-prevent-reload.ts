import { useEffect } from 'react';

export function usePreventReload(hasUnsavedChanges?: boolean) {
  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      console.log('should prevent if', hasUnsavedChanges);
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, [hasUnsavedChanges]);
}
