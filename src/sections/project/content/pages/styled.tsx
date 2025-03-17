import { styled } from '@mui/material/styles';

export const SelectedPageThumbnailWrapper = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  border: '1px solid',
  borderColor: theme.palette.divider,
  borderRadius: theme.spacing(1),
}));

export const SelectedPageThumbnail = styled('img')(() => ({
  width: '100%',
  height: '600px',
  objectFit: 'cover',
  display: 'block',
  objectPosition: 'top',
}));
