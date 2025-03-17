'use client';

import { Container } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import { paths } from 'src/routes/paths';
import DomainRegisterForm from '../domain-register-form';
import { useRegisterDomainView } from '../hooks/use-register-domain-view';

export default function DomainRegisterView() {
  const settings = useSettingsContext();

  const { domainName, duration } = useRegisterDomainView();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Register Domain"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Domain Registrations', href: paths.dashboard.domainRegistrations.root },
          { name: 'Register' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      {domainName && duration && <DomainRegisterForm domainName={domainName} duration={duration} />}
    </Container>
  );
}
