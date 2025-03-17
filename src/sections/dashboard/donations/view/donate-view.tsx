'use client';

import { Container } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import { paths } from 'src/routes/paths';
import DonateForm from '../donate-form';
import { useDonateView } from '../hooks/use-donate-view';

export default function DonateView() {
  const settings = useSettingsContext();

  const { amount, type } = useDonateView();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Donate"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Donations', href: paths.dashboard.donations.root },
          { name: 'Donate' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      {amount && type ? <DonateForm amount={amount} type={type} /> : null}
    </Container>
  );
}
