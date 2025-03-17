import { ButtonProps } from '@mui/material/Button';
import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// NEW VARIANT
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

// ----------------------------------------------------------------------

export default function Button(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  const rootStyles = (ownerState: ButtonProps) => {
    const inheritColor = ownerState.color === 'inherit';

    const containedVariant = ownerState.variant === 'contained';

    const outlinedVariant = ownerState.variant === 'outlined';

    const textVariant = ownerState.variant === 'text';

    const smallSize = ownerState.size === 'small';

    const mediumSize = ownerState.size === 'medium';

    const largeSize = ownerState.size === 'large';

    const defaultStyle = {
      ...(inheritColor && {
        // CONTAINED
        ...(containedVariant && {
          color: isLight ? theme.palette.common.white : theme.palette.grey[800],
          backgroundColor: isLight ? theme.palette.grey[800] : theme.palette.common.white,
          '&:hover': {
            backgroundColor: isLight ? theme.palette.grey[700] : theme.palette.grey[400],
          },
        }),
        // OUTLINED
        ...(outlinedVariant && {
          borderColor: alpha(theme.palette.grey[500], 0.32),
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }),
        // TEXT
        ...(textVariant && {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }),
      }),
      ...(outlinedVariant && {
        '&:hover': {
          borderColor: 'currentColor',
          boxShadow: '0 0 0 0.5px currentColor',
        },
      }),
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        // CONTAINED
        ...(containedVariant && {
          '&:hover': {
            boxShadow: theme.palette.grey['500'],
          },
        }),
      }),
    }));

    const size = {
      ...(smallSize && {
        fontSize: 14,
        paddingLeft: 8,
        paddingRight: 8,
        ...(textVariant && {
          paddingLeft: 4,
          paddingRight: 4,
        }),
      }),
      ...(mediumSize && {
        paddingLeft: 12,
        paddingRight: 12,
        ...(textVariant && {
          paddingLeft: 8,
          paddingRight: 8,
        }),
      }),
      ...(largeSize && {
        height: 48,
        fontSize: 15,
        paddingLeft: 16,
        paddingRight: 16,
        ...(textVariant && {
          paddingLeft: 10,
          paddingRight: 10,
        }),
      }),
    };

    return [defaultStyle, ...colorStyle, size];
  };

  return {
    MuiButton: {
      defaultProps: {
        color: 'inherit',
        disableElevation: true,
      },

      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) => rootStyles(ownerState),
      },
    },
  };
}
