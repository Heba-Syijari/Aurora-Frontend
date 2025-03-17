'use client';

import React from 'react';
import { Container, Stack } from '@mui/material';
import FormProvider from 'src/components/hook-form';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import { WebsiteContentTypeFields } from 'src/sections/common/website-content-type-fields';
import { BaseLoadingButton } from 'src/components/styled/button';
import { useContentSettings } from '../hooks/use-content-settings';

export default function ContentSettingsView() {
  const settings = useSettingsContext();

  const { projectId, projectName, methods, onSubmit, isLoading, type, mainCategoryId } =
    useContentSettings();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Content Settings"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: projectName, href: paths.project(projectId).root },
          { name: 'Content Settings' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack spacing={3}>
          <WebsiteContentTypeFields type={type} mainCategoryId={mainCategoryId} />

          <BaseLoadingButton
            color="primary"
            variant="contained"
            size="large"
            loading={isLoading}
            disabled={isLoading}
            type="submit"
            sx={{ alignSelf: 'flex-end' }}
          >
            Save Changes
          </BaseLoadingButton>
        </Stack>
      </FormProvider>
    </Container>
  );
}
