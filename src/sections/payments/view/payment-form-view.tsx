'use client';

import React from 'react';
import { Container } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import { useSearchParams } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
import PaymentForm from '../payment-form';

export default function PaymentFormView() {
  const settings = useSettingsContext();

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Payment Form"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Payments', href: paths.dashboard.payments.root },
          { name: 'Payment Form' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      {token ? <PaymentForm data={{ token }} /> : null}
    </Container>
  );
}
