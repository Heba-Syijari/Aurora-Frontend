import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useCheckPaymentStatus } from 'src/api/payments';
import Iconify from 'src/components/iconify/iconify';
import { useSnackbar } from 'src/components/snackbar';
import { paths } from 'src/routes/paths';
import { PaymentStatus } from 'src/types/payment';

type Props = {
  transactionId: string;
};

export default function PaymentCheckStatus({ transactionId }: Props) {
  const { checkPaymentStatus, paymentStatus, isLoading, isError } = useCheckPaymentStatus();

  const { enqueueSnackbar } = useSnackbar();

  const redirectToPaymentsList = useCallback(() => {
    setTimeout(() => {
      window.location.href = paths.dashboard.payments.root;
    }, 1500);
  }, []);

  useEffect(() => {
    if (transactionId) {
      checkPaymentStatus(transactionId)
        .then(() => {
          redirectToPaymentsList();
        })
        .catch((err) => {
          enqueueSnackbar(err.message || 'Error!', { variant: 'error' });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderLoading = (
    <>
      <CircularProgress size={64} color="success" />
      <Typography variant="subtitle1">Checking your payment status.</Typography>
    </>
  );

  const renderPaymentPaid = (
    <>
      <Iconify
        icon="icon-park-outline:success"
        width={100}
        sx={{ color: (theme) => theme.palette.success.main }}
      />
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3">Success!</Typography>
        <Typography variant="body2">Congratulations! Your payment is successfully paid.</Typography>
      </Box>
    </>
  );

  const renderPaymentFailed = (
    <>
      <Iconify
        icon="icon-park-outline:error"
        width={100}
        sx={{ color: (theme) => theme.palette.error.main }}
      />
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3">Error!</Typography>
        <Typography variant="body2">Oops! Your payment is failed.</Typography>
      </Box>
    </>
  );

  const renderPaymentUnpaid = (
    <>
      <Iconify
        icon="icon-park-outline:info"
        width={100}
        sx={{ color: (theme) => theme.palette.warning.main }}
      />
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3">Warning!</Typography>
        <Typography variant="body2">Your payment is still unpaid.</Typography>
      </Box>
    </>
  );

  const getRenderComponent = () => {
    switch (paymentStatus) {
      case PaymentStatus.PAID:
        return renderPaymentPaid;
      case PaymentStatus.UNPAID:
        return renderPaymentUnpaid;
      case PaymentStatus.CANCELLED:
      case PaymentStatus.FAILED:
        return renderPaymentFailed;
      default:
        return null;
    }
  };

  const renderContent = getRenderComponent();

  const renderError = renderPaymentFailed;

  return (
    <Stack spacing={2} alignItems="center">
      {isError && !isLoading && renderError}

      {!isError && isLoading ? renderLoading : renderContent}
    </Stack>
  );
}
