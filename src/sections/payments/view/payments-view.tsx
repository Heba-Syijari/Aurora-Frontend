'use client';

import { Container } from '@mui/material';
import { useGetPayments } from 'src/api/payments';
import { useSettingsContext } from 'src/components/settings';
import { PaymentTable } from '../payment-table';

export default function PaymentView() {
  const settings = useSettingsContext();

  const { payments } = useGetPayments();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <PaymentTable title="Payments" payments={payments} />
    </Container>
  );
}
