'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Container } from '@mui/material';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import { useProjectContext } from 'src/providers/project/project-context';
import { NotFoundView } from 'src/sections/error';
import PostNewEditForm from '../post-new-edit-form';

export default function BlogEditView() {
  const settings = useSettingsContext();

  const { project } = useProjectContext();

  const { id } = useParams();

  const post = project.posts.find((p) => p.id === +id);

  if (!post) {
    return <NotFoundView redirectURL={paths.project(project.id).content.blogs} />;
  }

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit post"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: project.name, href: paths.project(project.id).root },
          { name: 'Blogs', href: paths.project(project.id).content.blogs },
          { name: 'Edit' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <PostNewEditForm currentPost={post} />
    </Container>
  );
}
