'use client';

import { useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// components
import Logo from 'src/components/logo';
import { NavSectionVertical } from 'src/components/nav-section';
import Scrollbar from 'src/components/scrollbar';
import { usePathname } from 'src/routes/hook';
//
import { NavToggleButton } from '../_common';
import { HEADER, NAV } from '../config-layout';
import { useNavData } from './config-navigation';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const pathname = usePathname();

  const lgUp = useResponsive('up', 'lg');

  const navData = useNavData();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          height: HEADER.H_DESKTOP,
          ml: -10,
          mt: 1,
        }}
      >
        <Logo full sx={{ color: '#fff', height: 35 }} />
      </Stack>

      <NavSectionVertical
        data={navData}
        config={{
          currentRole: 'user',
        }}
      />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_VERTICAL },
      }}
    >
      <NavToggleButton />
      {lgUp ? (
        <Stack
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.W_VERTICAL,
            bgcolor: 'primary.darker',
          }}
        >
          {renderContent}
        </Stack>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.W_VERTICAL,
              bgcolor: '#61398F !important',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
