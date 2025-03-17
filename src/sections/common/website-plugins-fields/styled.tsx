import { styled } from '@mui/material/styles';
import { RHFMultiCheckbox } from 'src/components/hook-form';

export const RHFPluginCheckboxes = styled(RHFMultiCheckbox)(({ theme }) => ({
  margin: '0 !important',
  backgroundColor: theme.palette.background.neutral,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(1),
  padding: `${theme.spacing(2.5)} ${theme.spacing(2)}`,
  '&:has(.Mui-checked)': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.background.primary,
  },
  flexDirection: 'row-reverse',
  alignItems: 'flex-start',
}));
