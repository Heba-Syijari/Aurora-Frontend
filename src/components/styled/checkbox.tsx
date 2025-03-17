import { styled } from '@mui/material/styles';
import { RHFMultiCheckbox } from '../hook-form';

type StyledRHFMultiCheckboxProps = {};

export const StyledRHFMultiCheckbox = styled(RHFMultiCheckbox, {
  shouldForwardProp: (propName) => !!propName,
})<StyledRHFMultiCheckboxProps>(({ theme }) => ({
  margin: '0 !important',
  backgroundColor: theme.palette.background.neutral,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(6),
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,

  '&:has(.Mui-checked)': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.background.primary,
    color: theme.palette.primary.main,
    '& .MuiFormControlLabel-label': {
      fontWeight: 500,
    },
  },

  '& .MuiCheckbox-root': {
    display: 'none',
  },
}));
