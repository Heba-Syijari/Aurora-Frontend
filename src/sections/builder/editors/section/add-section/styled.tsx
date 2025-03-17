import { Box, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTab = styled(Tab)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginRight: '0 !important',
  padding: `${theme.spacing(3)}`,
  borderRight: '1px solid',
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  gap: theme.spacing(2),

  justifyContent: 'flex-start',
  transition: 'all .15s',
  '&.Mui-selected, &:hover': {
    backgroundColor: theme.palette.background.primary,
    '& .MuiTab-iconWrapper': {
      backgroundColor: theme.palette.background.default,
    },
  },
  '&:not(.Mui-selected)': {
    color: theme.palette.text.primary,
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.primary,
  color: theme.palette.primary.main,
  transition: 'all .15s',
}));
