import React from 'react';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import { BaseButton } from 'src/components/styled/button';
import { useGetPaymentDetails } from 'src/api/payments';
import { PaymentDetails } from './payment-details';

type Props = {
  open: boolean;
  onClose: VoidFunction;
  paymentId: number;
};

export default function PaymentDetailsDialog({ open, onClose, paymentId }: Props) {
  const { payment, isLoading, isError } = useGetPaymentDetails(paymentId);

  const renderError = (
    <Stack spacing={1} flexDirection="row" alignItems="center" justifyContent="center">
      <Iconify icon="icon-park-outline:error" color="error.main" width={28} />
      <Typography variant="body2" fontSize={24}>
        Sorry, something went wrong
      </Typography>
    </Stack>
  );

  const renderLoading = <>Loading...</>;

  const renderContent = isLoading ? renderLoading : <PaymentDetails payment={payment} />;

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle>
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
          <span>Payment details</span>
          <IconButton onClick={onClose}>
            <Iconify icon="material-symbols:close" />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ py: 2 }}>{isError ? renderError : renderContent}</Box>
      </DialogContent>

      <DialogActions>
        <BaseButton variant="contained" color="inherit" onClick={onClose}>
          Close
        </BaseButton>
      </DialogActions>
    </Dialog>
  );
}
