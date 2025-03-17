import { m } from 'framer-motion';
// @mui
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import { Box } from '@mui/material';
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { ConfirmDialog } from 'src/components/dialog';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { RouterLink } from 'src/routes/components';
import AccountChangePassword from 'src/sections/account/account-change-password';

// ----------------------------------------------------------------------

const OPTIONS = [
  {
    label: 'Profile',
    linkTo: paths.dashboard.profile,
    icon: <Iconify icon="solar:user-linear" />,
  },
  {
    label: 'Preferences',
    linkTo: paths.dashboard.preferences,
    icon: <Iconify icon="healthicons:ui-preferences" />,
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { user, logout } = useAuthContext();

  const popover = usePopover();
  const logoutDialogOpen = useBoolean();
  const editPasswordDialogOpen = useBoolean();
  const handleLogout = async () => {
    try {
      await logout();
      popover.onClose();
    } catch (error) {
      console.log(error);
    }
  };
  const renderImage = (
    <Box
      component="svg"
      width="91px"
      height="90px"
      viewBox="0 0 91 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 45C0.5 9 9.5 0 45.5 0C81.5 0 90.5 9 90.5 45C90.5 81 81.5 90 45.5 90C9.5 90 0.5 81 0.5 45Z"
        fill="#FFE2DC"
      />
      <path
        d="M46.0001 26.0417C46.4311 26.0417 46.8444 26.213 47.1491 26.5177C47.4539 26.8224 47.6251 27.2358 47.6251 27.6667C47.6251 28.0977 47.4539 28.5111 47.1491 28.8158C46.8444 29.1205 46.4311 29.2917 46.0001 29.2917C41.834 29.2917 37.8385 30.9467 34.8926 33.8926C31.9467 36.8385 30.2917 40.834 30.2917 45.0001C30.2917 49.1662 31.9467 53.1617 34.8926 56.1076C37.8385 59.0534 41.834 60.7084 46.0001 60.7084C46.4311 60.7084 46.8444 60.8796 47.1491 61.1844C47.4539 61.4891 47.6251 61.9024 47.6251 62.3334C47.6251 62.7644 47.4539 63.1777 47.1491 63.4825C46.8444 63.7872 46.4311 63.9584 46.0001 63.9584C40.972 63.9584 36.1499 61.961 32.5945 58.4057C29.0391 54.8503 27.0417 50.0281 27.0417 45.0001C27.0417 39.972 29.0391 35.1499 32.5945 31.5945C36.1499 28.0391 40.972 26.0417 46.0001 26.0417Z"
        fill="#EE451F"
      />
      <path
        d="M55.6851 39.6486C55.398 39.3405 55.2418 38.9331 55.2492 38.5121C55.2566 38.0911 55.4272 37.6895 55.7249 37.3917C56.0226 37.094 56.4243 36.9235 56.8453 36.916C57.2663 36.9086 57.6737 37.0649 57.9818 37.3519L64.4818 43.8519C64.7861 44.1566 64.957 44.5696 64.957 45.0002C64.957 45.4309 64.7861 45.8439 64.4818 46.1486L57.9818 52.6486C57.833 52.8082 57.6536 52.9363 57.4543 53.0251C57.2549 53.1139 57.0397 53.1617 56.8215 53.1655C56.6034 53.1694 56.3866 53.1292 56.1843 53.0475C55.9819 52.9658 55.7981 52.8441 55.6438 52.6898C55.4895 52.5355 55.3679 52.3517 55.2861 52.1494C55.2044 51.947 55.1643 51.7303 55.1681 51.5121C55.172 51.2939 55.2197 51.0787 55.3086 50.8794C55.3974 50.6801 55.5254 50.5007 55.6851 50.3519L59.4118 46.6252H41.6667C41.2358 46.6252 40.8224 46.454 40.5177 46.1493C40.213 45.8445 40.0417 45.4312 40.0417 45.0002C40.0417 44.5693 40.213 44.1559 40.5177 43.8512C40.8224 43.5464 41.2358 43.3752 41.6667 43.3752H59.4118L55.6851 39.6486Z"
        fill="#EE451F"
      />
    </Box>
  );
  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          height: 40,
          borderRadius: '5px',
          background: (theme) => theme.palette.background.paper,
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            src={user?.imagePath}
            alt={user?.name}
            sx={{
              width: 30,
              height: 30,
            }}
          />
          <Typography variant="subtitle2" color="common.black" noWrap>
            {user?.name}
          </Typography>
          <Iconify icon="material-symbols:keyboard-arrow-down-rounded" color="common.black" />
        </Stack>
      </IconButton>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 200, p: 0 }}>
        <Stack sx={{ p: 1 }}>
          {OPTIONS.map((option) => (
            <MenuItem key={option.label} component={RouterLink} href={option.linkTo}>
              {option.icon}
              <Typography variant="body1" fontWeight={500}>
                {option.label}
              </Typography>
            </MenuItem>
          ))}
        </Stack>
        <MenuItem
          onClick={editPasswordDialogOpen.onTrue}
          sx={{ m: 1, mt: -1, fontWeight: 'fontWeightBold' }}
        >
          <Iconify icon="hugeicons:lock-password" />
          <Typography variant="body1" fontWeight={500}>
            edit password
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={logoutDialogOpen.onTrue}
          sx={{ m: 1, mt: -1, fontWeight: 'fontWeightBold', color: 'error.main' }}
        >
          <Iconify icon="ri:logout-circle-r-line" />
          <Typography variant="body1" fontWeight={500}>
            Logout
          </Typography>
        </MenuItem>
      </CustomPopover>

      <AccountChangePassword
        onClose={editPasswordDialogOpen.onFalse}
        open={editPasswordDialogOpen.value}
      />
      <ConfirmDialog
        image={renderImage}
        title="Log Out"
        description="Are You Sure You Want To Log Out"
        open={logoutDialogOpen.value}
        onClose={logoutDialogOpen.onFalse}
        onConfirm={handleLogout}
        confirmColor="error"
      />
    </>
  );
}
