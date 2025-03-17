'use client';

import { Container } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import { useSearchParams } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
import PaymentCheckStatus from '../payment-check-status';

export default function PaymentCheckStatusView() {
  const settings = useSettingsContext();

  const searchParams = useSearchParams();
  const transactionId = searchParams.get('trans') || searchParams.get('tap_id');

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Payment Success"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Payments', href: paths.dashboard.payments.root },
          { name: 'Payment Success' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      {transactionId ? <PaymentCheckStatus transactionId={transactionId} /> : null}
    </Container>
  );
}
