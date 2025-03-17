'use client';

import { Container, Stack } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import FormProvider from 'src/components/hook-form';
import { useSettingsContext } from 'src/components/settings';
import { BaseLoadingButton } from 'src/components/styled/button';
import { paths } from 'src/routes/paths';
import { WebsiteDesignFields } from 'src/sections/common/website-design-fields';
import { useWebsiteDesign } from '../hooks/use-website-design';

export default function WebsiteDesignView() {
  const settings = useSettingsContext();

  const {
    projectId,
    projectName,
    handleLogoTypeChange,
    handleLogoValueChange,
    handlePaletteValueChange,
    onSubmit,
    isLoading,
    methods,
    data,
  } = useWebsiteDesign();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Website Design"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: projectName, href: paths.project(projectId).root },
          { name: 'Website Design' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack spacing={3}>
          <WebsiteDesignFields
            defaultLogoType={data.logoType}
            onLogoTypeChange={handleLogoTypeChange}
            onLogoValueChange={handleLogoValueChange}
            onPaletteValueChange={handlePaletteValueChange}
          />

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
