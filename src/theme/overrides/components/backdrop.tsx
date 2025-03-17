import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Backdrop(theme: Theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.common.black, 0.5),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
  };
}
