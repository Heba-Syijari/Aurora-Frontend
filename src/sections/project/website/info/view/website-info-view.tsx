'use client';

import React from 'react';
import { Container } from '@mui/material';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import { useWebsiteInfo } from '../hooks/use-website-info';
import TabsWrapper from '../tabs';
import WebsiteInfoForm from '../website-info-form';
import WebsiteAudienceForm from '../website-audience-form';

export default function WebsiteInfoView() {
  const settings = useSettingsContext();

  const { projectId, projectName } = useWebsiteInfo();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Website Info"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: projectName, href: paths.project(projectId).root },
          { name: 'Website Info' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <TabsWrapper
        tabs={[
          {
            label: 'Information',
            panel: <WebsiteInfoForm />,
          },
          {
            label: 'Audience',
            panel: <WebsiteAudienceForm />,
          },
        ]}
      />
    </Container>
  );
}
