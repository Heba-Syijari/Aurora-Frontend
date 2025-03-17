import { AppBar, IconButton, Stack, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Iconify from 'src/components/iconify/iconify';
import Logo from 'src/components/logo';
import { useSettingsContext } from 'src/components/settings';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
import { paths } from 'src/routes/paths';
import { HEADER } from '../config-layout';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const isNavHorizontal = settings.themeLayout === 'horizontal';

  const lgUp = useResponsive('up', 'lg');

  const offset = useOffSetTop(HEADER.H_DESKTOP);

  const offsetTop = offset && !isNavHorizontal;

  const renderContent = (
    <Stack direction="row" alignItems="center" justifyContent="space-between" width={1}>
      <IconButton
        component="a"
        href={paths.dashboard.root}
        sx={{ borderRadius: theme.spacing(1), px: 2 }}
      >
        <Iconify icon="ri:arrow-left-s-line" color="common.white" />
      </IconButton>
      <Stack ml={-10} alignItems="center" justifyContent="center" width={1}>
        <Logo
          disabledLink
          full
          sx={{
            height: 35,
            color: '#fff',
          }}
        />
      </Stack>
    </Stack>
  );

  return (
    <AppBar
      sx={{
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          height: HEADER.H_DESKTOP,
          ...(offsetTop && {
            height: HEADER.H_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            bgcolor: 'background.default',
            height: HEADER.H_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
        }),
        bgcolor: 'primary.darker',
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '40px',
            height: '40px',
            bottom: '-40px',
            right: '0px',
            borderRadius: '50%',
            boxShadow: '20px -20px 0 #61398F',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '40px',
            height: '40px',
            bottom: '-40px',
            left: '0px',
            borderRadius: '50%',
            boxShadow: '-20px -20px 0 #61398F',
          },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
