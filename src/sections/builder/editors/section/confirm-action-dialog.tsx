import React from 'react';
import { Box, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { useBoolean } from 'src/hooks/use-boolean';
import { BaseButton, BaseLoadingButton } from 'src/components/styled/button';
import BaseEditDialog from '../base-edit-dialog';

type Props = {
  open: boolean;
  onClose: VoidFunction;
  onConfirm: () => Promise<void>;
  title?: string;
  description?: React.ReactNode;
};

export default function ConfirmActionDialog({
  open,
  onClose,
  onConfirm,
  description,
  title,
}: Props) {
  const loading = useBoolean();

  const handleClose = () => {
    if (!loading.value) {
      onClose();
    }
  };

  const handleConfirm = () => {
    loading.onTrue();
    onConfirm().finally(() => {
      loading.onFalse();
    });
  };

  return (
    <BaseEditDialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      dialogTitle={title || 'Confirm'}
    >
      <DialogContent>
        <Box sx={{ py: 2 }}>
          {description || (
            <DialogContentText>Do you really want to do this action?</DialogContentText>
          )}
        </Box>
      </DialogContent>

      <DialogActions>
        <BaseButton onClick={handleClose} disabled={loading.value} variant="outlined">
          Cancel
        </BaseButton>

        <BaseLoadingButton
          onClick={handleConfirm}
          disabled={loading.value}
          loading={loading.value}
          color="error"
          variant="contained"
        >
          Confirm
        </BaseLoadingButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
