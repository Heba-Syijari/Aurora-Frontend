'use client';

// @mui
import Container from '@mui/material/Container';
// routes
// components
import { useSettingsContext } from 'src/components/settings';
//
import AccountGeneral from '../account-general';

// ----------------------------------------------------------------------

export default function AccountView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <AccountGeneral />
    </Container>
  );
}
