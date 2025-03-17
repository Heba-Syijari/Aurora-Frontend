import { useCallback } from 'react';
import { useSnackbar as useNotistackSnackbar } from 'notistack';
import type { OptionsObject } from 'notistack';

export function useSnackbar() {
  const { enqueueSnackbar, closeSnackbar } = useNotistackSnackbar();

  const enqueueErrorSnackbar = useCallback(
    (message: string, options?: Omit<OptionsObject, 'variant'>) => {
      enqueueSnackbar(message, {
        variant: 'error',
        ...(options || {}),
      });
    },
    [enqueueSnackbar]
  );

  return {
    enqueueSnackbar,
    closeSnackbar,
    enqueueErrorSnackbar,
  };
}
