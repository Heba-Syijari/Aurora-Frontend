'use client';

import Container from '@mui/material/Container';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import { paths } from 'src/routes/paths';
import UserPreferencesForm from '../user-preferences-form';

// ----------------------------------------------------------------------

export default function UserPreferencesView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Preferences"
        links={[{ name: 'Dashboard', href: paths.dashboard.root }, { name: 'Preferences' }]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <UserPreferencesForm />
    </Container>
  );
}
