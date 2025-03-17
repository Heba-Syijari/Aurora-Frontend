import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import Iconify from 'src/components/iconify/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { BaseButton, BaseLoadingButton } from '../styled/button';

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  title?: string;
  image?: React.ReactNode;
  description?: React.ReactNode;
  confirmColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'inherit';
};

export default function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  image,
  confirmColor = 'inherit',
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
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Stack direction="row" justifyContent="flex-end" alignItems="center">
          <IconButton onClick={handleClose} disabled={loading.value} sx={{ p: 0 }}>
            <Iconify icon="material-symbols:close" />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} alignItems="center" width={1} pb={1}>
          {image}
          <Typography variant="h6">{title}</Typography>
        </Stack>
        <Box sx={{ py: 2, color: (theme) => theme.palette.grey[900], textAlign: 'center' }}>
          {description || (
            <DialogContentText>Do you really want to do this action?</DialogContentText>
          )}
        </Box>
      </DialogContent>

      <DialogActions>
        <BaseButton fullWidth variant="outlined" onClick={handleClose} disabled={loading.value}>
          Cancel
        </BaseButton>

        <BaseLoadingButton
          variant="contained"
          color={confirmColor}
          onClick={handleConfirm}
          disabled={loading.value}
          loading={loading.value}
          fullWidth
        >
          Confirm
        </BaseLoadingButton>
      </DialogActions>
    </Dialog>
  );
}
