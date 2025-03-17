'use client';

import { Container, Stack } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import FormProvider from 'src/components/hook-form';
import { useSettingsContext } from 'src/components/settings';
import { BaseLoadingButton } from 'src/components/styled/button';
import { paths } from 'src/routes/paths';
import { WebsitePluginsFields } from 'src/sections/common/website-plugins-fields';
import { useIntegrations } from '../hooks/use-integrations';

export default function IntegrationsView() {
  const settings = useSettingsContext();

  const { projectId, projectName, methods, onSubmit, isLoading, plugins, handleAdamConfigSuccess } =
    useIntegrations();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Plugins"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: projectName, href: paths.project(projectId).root },
          { name: 'Plugins Integrations' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack spacing={3}>
          <WebsitePluginsFields
            // edit
            plugins={plugins}
            onAdamConfigSuccess={handleAdamConfigSuccess}
          />

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
