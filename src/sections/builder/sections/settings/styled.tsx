import { styled, alpha } from '@mui/material/styles';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 3),
  backgroundColor: theme.palette.common.white,
  borderBottomWidth: 'thin',
  borderBottomStyle: 'solid',
  borderBottomColor: alpha(theme.palette.grey[500], 0.2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const DrawerBody = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.common.white,
}));
