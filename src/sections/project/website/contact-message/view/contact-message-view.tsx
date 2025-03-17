'use client';

import React from 'react';
import { Container } from '@mui/material';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import { useContactMessage } from '../hooks/use-contact-message';
import ContactMessageList from '../contact-message-list';

export default function ContactMessageView() {
  const settings = useSettingsContext();

  const { projectId, projectName, data, handleDelete } = useContactMessage();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Contact Messages"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: projectName, href: paths.project(projectId).root },
          { name: 'Contact Messages' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <ContactMessageList messages={data} onDelete={handleDelete} />
    </Container>
  );
}
