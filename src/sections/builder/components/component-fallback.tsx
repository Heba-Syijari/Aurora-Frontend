import { Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React, { useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BaseLoadingButton } from 'src/components/styled/button';
import { useBoolean } from 'src/hooks/use-boolean';

type Props = {
  children: React.ReactNode;
  onDeleteClick: () => Promise<void>;
  onRegenerateClick: () => Promise<void>;
};

export function ComponentFallback({ children, onDeleteClick, onRegenerateClick }: Props) {
  const isDeleting = useBoolean();
  const isRegenerating = useBoolean();

  const handleDelete = useCallback(() => {
    isDeleting.onTrue();

    onDeleteClick().finally(isDeleting.onFalse);
  }, [isDeleting, onDeleteClick]);

  const handleRegenerate = useCallback(() => {
    isRegenerating.onTrue();

    onRegenerateClick().finally(isRegenerating.onFalse);
  }, [isRegenerating, onRegenerateClick]);

  const disabled = isDeleting.value || isRegenerating.value;

  return (
    <ErrorBoundary
      fallback={
        <Stack
          spacing={3}
          sx={{
            height: 360,
            textAlign: 'center',
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" component="p">
            Oops, this section has crashed
          </Typography>

          <Typography color="text.secondary">
            If you want you can either delete or regenerate the section
          </Typography>

          <Stack spacing={2} direction="row" justifyContent="center">
            <BaseLoadingButton
              variant="outlined"
              color="primary"
              size="large"
              onClick={handleDelete}
              sx={{ alignSelf: 'center' }}
              loading={isDeleting.value}
              disabled={disabled}
            >
              Delete Section
            </BaseLoadingButton>

            <BaseLoadingButton
              variant="contained"
              color="primary"
              size="large"
              onClick={handleRegenerate}
              sx={{ alignSelf: 'center' }}
              loading={isRegenerating.value}
              disabled={disabled}
            >
              Regenerate
            </BaseLoadingButton>
          </Stack>
        </Stack>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
