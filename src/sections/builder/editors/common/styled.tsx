import { styled } from '@mui/material/styles';
import { StyledRHFTabsGroup } from 'src/components/styled/radio';

export const RHFColorsGroup = styled(StyledRHFTabsGroup)(({ theme }) => ({
  gap: theme.spacing(1),
  '& .MuiFormControlLabel-root': {
    p: 0.125,
    width: 'unset',
    backgroundColor: `${theme.palette.background.default} !important`,
    borderRadius: theme.spacing(0.5),
    borderWidth: '2px',
  },
}));
