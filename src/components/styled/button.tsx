import { LoadingButton } from '@mui/lab';
import { Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TextButton = styled('button')(({ theme }) => ({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  '&:hover': {
    textDecoration: 'underline',
  },
  fontSize: '12px',
}));

export const AddButton = styled(Button)(() => ({
  height: '100%',
  maxHeight: 56,
  minWidth: 0,
  maxWidth: 48,
}));

export const RemoveButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
  color: 'red',
  backgroundColor: theme.palette.background.paper,
  position: 'absolute',
  right: theme.spacing(-1),
  top: theme.spacing(-1),
  zIndex: 1,
  transition: 'all .2s',
  '&:hover': {
    color: theme.palette.background.paper,
    backgroundColor: 'red',
  },
}));

export const BaseButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  minWidth: '116px',
}));

export const BaseLoadingButton = styled(LoadingButton)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  minWidth: '116px',
}));
