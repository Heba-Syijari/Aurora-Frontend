import { styled } from '@mui/material/styles';

export const IllustrationWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  color: theme.palette.primary.main,
}));
