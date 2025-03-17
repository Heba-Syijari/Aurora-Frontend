import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const EllipsisTypography = styled(Typography)(() => ({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}));
