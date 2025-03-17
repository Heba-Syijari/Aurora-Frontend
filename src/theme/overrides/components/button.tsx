import { alpha, Theme } from '@mui/material/styles';
import { ButtonProps, buttonClasses } from '@mui/material/Button';

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

    const softVariant = ownerState.variant === 'soft';

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
        // SOFT
        ...(softVariant && {
          color: theme.palette.text.primary,
          backgroundColor: alpha(theme.palette.grey[500], 0.08),
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.24),
          },
        }),
      }),
      ...(outlinedVariant && {
        '&:hover': {
          borderColor: 'currentColor',
          boxShadow: '0 0 0 0.5px currentColor',
        },
      }),
      borderRadius: theme.spacing(0.5),
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        // CONTAINED
        ...(containedVariant && {
          '&:hover': {
            boxShadow: theme.customShadows[color],
          },
        }),
        // OUTLINED
        ...(outlinedVariant && {
          borderColor: theme.palette[color].main,
          '&:hover': {
            backgroundColor: theme.palette[color].main,
            color: theme.palette.common.white,
          },
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette[color][isLight ? 'dark' : 'light'],
          backgroundColor: theme.palette.background[color !== 'info' ? color : 'secondary'],
          '&:hover': {
            backgroundColor: theme.palette.background[color !== 'info' ? color : 'secondary'],
          },
        }),
      }),
    }));

    const disabledState = {
      [`&.${buttonClasses.disabled}`]: {
        opacity: 0.5,

        // SOFT
        ...(softVariant && {
          backgroundColor: theme.palette.action.disabledBackground,
        }),
      },
    };

    const size = {
      ...(smallSize && {
        height: 40,
        fontSize: 14,
        paddingTop: 10,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 10,
        ...(textVariant && {
          paddingLeft: 8,
          paddingRight: 8,
        }),
      }),
      ...(mediumSize && {
        height: 48,
        fontSize: 16,
        paddingTop: 12,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 12,
        ...(textVariant && {
          paddingLeft: 10,
          paddingRight: 10,
        }),
      }),
      ...(largeSize && {
        height: 56,
        fontSize: 16,
        paddingTop: 16,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 16,
        ...(textVariant && {
          paddingLeft: 12,
          paddingRight: 12,
        }),
      }),
    };

    return [defaultStyle, ...colorStyle, disabledState, size];
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
