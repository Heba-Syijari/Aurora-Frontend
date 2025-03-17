'use client';

import { Container } from '@mui/material';
import React from 'react';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import { BaseButton } from 'src/components/styled/button';
import { paths } from 'src/routes/paths';
import { useNavigation } from '../hooks/use-navigation';
import NavigationMenu from '../navigation-menu';

export default function NavigationView() {
  const settings = useSettingsContext();

  const { projectId, projectName, menus, handleDeleteMenu, handleOnMenuSubmit } = useNavigation();

  const ref = React.createRef<HTMLButtonElement>();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Menus"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: projectName, href: paths.project(projectId).root },
          { name: 'Navigation Menus' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
        action={
          <BaseButton
            color="primary"
            variant="contained"
            onClick={() => {
              ref.current?.click();
            }}
          >
            Add new menu
          </BaseButton>
        }
      />

      <NavigationMenu
        ref={ref}
        menus={menus}
        onMenuDelete={handleDeleteMenu}
        onMenuSubmit={handleOnMenuSubmit}
      />
    </Container>
  );
}
