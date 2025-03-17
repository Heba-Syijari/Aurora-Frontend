// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// theme
import { hideScroll } from 'src/theme/css';
// components
import Logo from 'src/components/logo';
import { NavSectionMini } from 'src/components/nav-section';
//
import { NavToggleButton } from '../_common';
import { HEADER, NAV } from '../config-layout';
import { useNavData } from './config-navigation';

// ----------------------------------------------------------------------

export default function NavMini() {
  const navData = useNavData();

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_MINI },
      }}
    >
      <NavToggleButton
        sx={{
          bottom: 22,
          left: NAV.W_MINI - 12,
        }}
      />

      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: 'fixed',
          width: NAV.W_MINI,
          bgcolor: 'primary.darker',
          ...hideScroll.x,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          gap={2}
          sx={{ height: HEADER.H_DESKTOP, bgcolor: 'primary.darker' }}
        >
          <Logo sx={{ mx: 'auto', my: 2 }} />
        </Stack>

        <NavSectionMini
          data={navData}
          config={{
            currentRole: 'user',
          }}
        />
      </Stack>
    </Box>
  );
}
