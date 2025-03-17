'use client';

import React from 'react';
import { Container } from '@mui/material';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import { useProjectContext } from 'src/providers/project/project-context';
import PostNewEditForm from '../post-new-edit-form';

export default function BlogCreateView() {
  const settings = useSettingsContext();
  const { project } = useProjectContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new post"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: project.name, href: paths.project(project.id).root },
          { name: 'Blogs', href: paths.project(project.id).content.blogs },
          { name: 'Create' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <PostNewEditForm />
    </Container>
  );
}
