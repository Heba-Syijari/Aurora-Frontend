'use client';

import { Box, Container, Stack } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import { paths } from 'src/routes/paths';
import AttachDomainForm from '../attach-domain-form';
import { useDomainView } from '../hooks/use-domain-view';

export default function DomainView() {
  const settings = useSettingsContext();

  const {
    projectId,
    projectName,
    projectPublicURL,
    attachedDomain,
    domains,
    handleAttach,
    handleDetach,
    loading,
  } = useDomainView();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Domain"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: projectName, href: paths.project(projectId).root },
          { name: 'Domain' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Stack spacing={3}>
        <Box
          sx={{
            borderRadius: (theme) => theme.spacing(2),
            backgroundColor: (theme) => theme.palette.background.neutral,
            padding: (theme) => theme.spacing(3),
          }}
        >
          <AttachDomainForm
            projectPublicURL={projectPublicURL}
            domains={domains}
            onAttach={handleAttach}
            onDetach={handleDetach}
            loading={loading}
            attachedDomain={attachedDomain}
          />
        </Box>
      </Stack>
    </Container>
  );
}
