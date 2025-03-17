'use client';

import React from 'react';
import { Container, Stack } from '@mui/material';
import FormProvider from 'src/components/hook-form';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import { IntellectualPropertyFields } from 'src/sections/common/intellectual-property-fields';
import { BaseLoadingButton } from 'src/components/styled/button';
import { useIntellectualProperty } from '../hooks/use-intellectual-property';

export default function IntellectualPropertyView() {
  const settings = useSettingsContext();

  const { projectName, methods, onSubmit, isLoading, selectedType, projectId } =
    useIntellectualProperty();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Intellectual Property"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: projectName, href: paths.project(projectId).root },
          { name: 'Intellectual Property' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack spacing={3}>
          <IntellectualPropertyFields type={selectedType} />

          <BaseLoadingButton
            color="primary"
            variant="contained"
            size="large"
            loading={isLoading}
            disabled={isLoading}
            type="submit"
            sx={{ alignSelf: 'flex-start' }}
          >
            Save Changes
          </BaseLoadingButton>
        </Stack>
      </FormProvider>
    </Container>
  );
}
