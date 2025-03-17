'use client';

import { Container, Stack } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import Iconify from 'src/components/iconify/iconify';
import { useSettingsContext } from 'src/components/settings';
import { BaseButton, BaseLoadingButton } from 'src/components/styled/button';
import { paths } from 'src/routes/paths';
import { useBlogs } from '../hooks/use-blogs';
import PostList from '../post-list';

export default function BlogsView() {
  const settings = useSettingsContext();

  const {
    projectId,
    projectName,
    handleGeneratePost,
    isLoading,
    posts,
    handleDeletePostSuccess,
    generatePostLoading,
    projectLoading,
  } = useBlogs();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Blogs"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: projectName, href: paths.project(projectId).root },
          { name: 'Blogs' },
        ]}
        action={
          <Stack spacing={1} flexDirection="row">
            <BaseLoadingButton
              variant="outlined"
              onClick={handleGeneratePost}
              startIcon={<Iconify icon="ri:flashlight-line" />}
              disabled={isLoading}
              loading={generatePostLoading}
            >
              Generate Post
            </BaseLoadingButton>

            <BaseButton
              color="primary"
              variant="contained"
              href={paths.project(projectId).content.blogsNew}
              startIcon={<Iconify icon="mdi:plus" />}
              disabled={isLoading}
            >
              New Post
            </BaseButton>
          </Stack>
        }
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <PostList
        posts={posts}
        loading={projectLoading}
        onDeleteSuccess={handleDeletePostSuccess}
        projectId={projectId}
      />
    </Container>
  );
}
