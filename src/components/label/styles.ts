// @mui
import { alpha, Theme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//
import { LabelColor, LabelShape, LabelSize, LabelVariant } from './types';

// ----------------------------------------------------------------------

export const StyledLabel = styled(Box)(
  ({
    theme,
    ownerState,
  }: {
    theme: Theme;
    ownerState: {
      color: LabelColor;
      variant: LabelVariant;
      shape: LabelShape;
      size: LabelSize;
    };
  }) => {
    const isLight = theme.palette.mode === 'light';

    const filledVariant = ownerState.variant === 'filled';

    const outlinedVariant = ownerState.variant === 'outlined';

    const softVariant = ownerState.variant === 'soft';

    const squareShape = ownerState.shape === 'square';

    const roundedShape = ownerState.shape === 'rounded';

    const defaultStyle = {
      ...(ownerState.color === 'default' && {
        // FILLED
        ...(filledVariant && {
          color: isLight ? theme.palette.common.white : theme.palette.grey[800],
          backgroundColor: theme.palette.text.primary,
        }),
        // OUTLINED
        ...(outlinedVariant && {
          backgroundColor: 'transparent',
          color: theme.palette.text.primary,
          border: `2px solid ${theme.palette.text.primary}`,
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette.text.secondary,
          backgroundColor: alpha(theme.palette.grey[500], 0.16),
        }),
      }),
    };

    const colorStyle = {
      ...(ownerState.color !== 'default' && {
        // FILLED
        ...(filledVariant && {
          color: theme.palette[ownerState.color].contrastText,
          backgroundColor: theme.palette[ownerState.color].main,
        }),
        // OUTLINED
        ...(outlinedVariant && {
          backgroundColor: 'transparent',
          color: theme.palette[ownerState.color].main,
          border: `2px solid ${theme.palette[ownerState.color].main}`,
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette[ownerState.color].main,
          backgroundColor:
            theme.palette.background[ownerState.color === 'info' ? 'secondary' : ownerState.color],
        }),
      }),
    };

    const shapeStyle = {
      ...(roundedShape && {
        borderRadius: 6,
      }),
      ...(squareShape && {
        borderRadius: 0,
      }),
    };

    const sizeStyle = {
      ...(ownerState.size === 'small' && {
        padding: theme.spacing(0, 1.25),
        fontSize: theme.typography.pxToRem(12),
        fontWeight: theme.typography.fontWeightSemiBold,
        height: 24,
      }),
      ...(ownerState.size === 'large' && {
        padding: theme.spacing(1.5, 2.5),
        fontSize: theme.typography.pxToRem(16),
        fontWeight: theme.typography.fontWeightSemiBold,
      }),
    };

    return {
      gap: 8,
      minWidth: 24,
      borderRadius: 24,
      cursor: 'default',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      justifyContent: 'center',
      textTransform: 'capitalize',
      padding: theme.spacing(1, 2),
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightMedium,
      transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.shorter,
      }),
      ...defaultStyle,
      ...colorStyle,
      ...shapeStyle,
      ...sizeStyle,
    };
  }
);
