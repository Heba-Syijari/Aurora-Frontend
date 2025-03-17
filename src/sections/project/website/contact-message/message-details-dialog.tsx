import React from 'react';
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import { IContactMessage } from 'src/types/project';
import { BaseButton } from 'src/components/styled/button';

type Props = {
  open: boolean;
  onClose: () => void;
  message: IContactMessage;
};

export default function MessageDetailsDialog({ open, onClose, message }: Props) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          backgroundColor: (theme) => theme.palette.background.primary,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography component="span" variant="h5">
            View Message
          </Typography>

          <IconButton onClick={handleClose} sx={{ p: 0 }}>
            <Iconify icon="material-symbols:close" />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ pt: 3 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemAvatar>
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  backgroundColor: 'background.primary',
                  color: 'primary.main',
                }}
              >
                <Iconify icon="ri:mail-unread-line" width={32} />
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary={message.name} secondary={message.email} />
          </ListItem>

          <Stack
            spacing={1.5}
            sx={{
              padding: 3,
              borderRadius: (theme) => theme.spacing(1),
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'background.neutral',
            }}
          >
            <Typography variant="body1" fontWeight={700}>
              Message
            </Typography>

            <Typography variant="body2">{message.description}</Typography>
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions>
        <BaseButton variant="outlined" onClick={handleClose}>
          Close
        </BaseButton>
      </DialogActions>
    </Dialog>
  );
}
