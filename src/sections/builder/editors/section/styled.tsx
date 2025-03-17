import { styled } from '@mui/material/styles';

export const EditActionsWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(2),
  zIndex: 9999,
}));

export const ActionsBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  gap: 1,
  backgroundColor: theme.palette.background.default,
  boxShadow: '0px 4px 48px 0px #00000024',
}));

export const BaseActionsWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'none',
  flexDirection: 'column',
  padding: theme.spacing(2),
  zIndex: 99999,
}));
