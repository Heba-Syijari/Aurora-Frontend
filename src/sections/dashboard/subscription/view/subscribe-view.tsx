'use client';

import React from 'react';
import { Container } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import { paths } from 'src/routes/paths';
import { useSearchParams } from 'src/routes/hook';
import SubscribeForm from '../subscribe-form';

export default function SubscribeView() {
  const settings = useSettingsContext();

  const searchParams = useSearchParams();
  const planId = +(searchParams.get('planId') || 0);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Subscribe"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Subscriptions', href: paths.dashboard.subscriptions.root },
          { name: 'Subscribe' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      {planId ? <SubscribeForm planId={planId} /> : null}
    </Container>
  );
}
