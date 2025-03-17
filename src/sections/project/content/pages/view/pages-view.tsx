'use client';

import { Container, Stack } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import { paths } from 'src/routes/paths';
import { usePages } from '../hooks/use-pages';
import PagesFields from '../pages-fields';

export default function PagesView() {
  const settings = useSettingsContext();

  const { projectId, projectName, pages, selectedVolume, handleVolumeChange } = usePages();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Pages"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: projectName, href: paths.project(projectId).root },
          { name: 'Pages' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Stack spacing={3}>
        <PagesFields
          pages={pages}
          selectedVolume={selectedVolume}
          onVolumeChange={handleVolumeChange}
        />

        {/* <BaseLoadingButton
          color="primary"
          variant="contained"
          size="large"
          loading={isLoading}
          disabled={isLoading}
          onClick={updateProjectVolume}
          sx={{ alignSelf: 'flex-end' }}
        >
          Save Changes
        </BaseLoadingButton> */}
      </Stack>
    </Container>
  );
}
