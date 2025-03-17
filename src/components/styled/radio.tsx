import { RadioGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RHFRadioGroup } from 'src/components/hook-form';

export const StyledRHFTabsGroup = styled(RHFRadioGroup)(({ theme }) => ({
  '& .MuiFormControlLabel-root': {
    width: '100%',
    margin: '0px !important',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(1),
    overflow: 'hidden',

    '&:has(.Mui-checked)': {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.background.primary,
      color: theme.palette.primary.main,
    },

    '& .MuiFormControlLabel-label': {
      width: '100%',
    },
  },
  '& .MuiRadio-root': {
    display: 'none',
  },
}));

export const RHFRadioGroupRect = styled(RHFRadioGroup)(({ theme }) => ({
  gap: theme.spacing(2),

  '& .MuiFormControlLabel-root': {
    flex: 1,
    margin: '0 !important',
    padding: '20px 16px',
    gap: theme.spacing(1),
    alignItems: 'flex-start',
    height: 96,
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.neutral,

    '& .MuiRadio-root': {
      color: theme.palette.divider,
      backgroundColor: theme.palette.background.default,
      marginTop: 2,
    },
    '& .Mui-checked': {
      color: theme.palette.primary.main,
    },
    '&:has(.Mui-checked)': {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.background.primary,
    },
  },

  '& .MuiButtonBase-root.MuiRadio-root': {
    padding: 0,
  },
}));

export const StyledRadioGroupReact = styled(RadioGroup)(({ theme }) => ({
  gap: theme.spacing(2),

  '& .MuiFormControlLabel-root': {
    flex: 1,
    margin: '0 !important',
    gap: theme.spacing(1),
    alignItems: 'flex-start',
    height: 96,
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.neutral,

    '& .MuiRadio-root': {
      display: 'none',
    },
    '& .Mui-checked': {
      color: theme.palette.primary.main,
    },
    '&:has(.Mui-checked)': {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.background.primary,
    },
  },

  '& .MuiButtonBase-root.MuiRadio-root': {
    padding: 0,
  },
}));
