import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

type Props = {
  title: string;
  description: string;
  actions: React.ReactNode;
};

export function SubscriptionErrorDialog({ description, title, actions }: Props) {
  return (
    <Box>
      <Dialog fullWidth maxWidth="sm" open>
        <DialogTitle>{title}</DialogTitle>

        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>

        <DialogActions>{actions}</DialogActions>
      </Dialog>
    </Box>
  );
}
