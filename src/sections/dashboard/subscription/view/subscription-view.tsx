'use client';

import { Card, Container, Stack, Typography } from '@mui/material';
import { useGetPlans } from 'src/api/plan';
import { useSettingsContext } from 'src/components/settings';
import PlanSubscriptionList from '../plan-subscription-list';

export default function SubscriptionView() {
  const settings = useSettingsContext();

  const { plans } = useGetPlans();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <Stack spacing={1} sx={{ mb: { xs: 3, md: 5 } }}>
        <Typography variant="h3" color="common.black">
          Flexible Plans That Fit Everyone
        </Typography>
      </Stack>
      <Card sx={{ padding: 2 }}>
        <PlanSubscriptionList plans={plans} />
      </Card>
    </Container>
  );
}
