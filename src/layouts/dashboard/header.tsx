// @mui
import { AppBar, Stack, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// theme
import { bgBlur } from 'src/theme/css';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// api
// components
import Logo from 'src/components/logo';
import { useSettingsContext } from 'src/components/settings';
//
import {
  AccountPopover,
  SubscriptionExpiration,
  UserCredits
} from '../_common';
import { HEADER } from '../config-layout';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const lgUp = useResponsive('up', 'lg');

  const offset = useOffSetTop(HEADER.H_DESKTOP);

  const offsetTop = offset;

  const renderContent = (
    <>
      <Logo sx={{ mr: 2.5 }} />
      <h2>Aurora</h2>

      {/* <Searchbar /> */}


      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1 }}
      >
        <SubscriptionExpiration
          sx={{
            m: 'auto',
            '.MuiChip-label': {
              color: 'primary.contrastText',
            },
          }}
        />

        <UserCredits />

        {/* <NotificationsPopover /> */}
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.secondary,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          // width: `calc(100% - ${NAV.W_VERTICAL}px)`,
          minHeight: '70px',
          height: HEADER.H_DESKTOP,
          ...(offsetTop && {
            height: HEADER.H_DESKTOP_OFFSET,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}