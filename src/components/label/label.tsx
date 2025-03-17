import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
//
import { StyledLabel } from './styles';
import { LabelProps } from './types';

// ----------------------------------------------------------------------

const Label = forwardRef<HTMLSpanElement, LabelProps>(
  (
    {
      children,
      color = 'default',
      variant = 'soft',
      shape = 'circle',
      size = 'medium',
      startIcon,
      endIcon,
      sx,
      ...other
    },
    ref
  ) => {
    const theme = useTheme();

    const iconStyle = {
      width: 18,
      height: 18,
      '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
      marginBottom: '2px',
    };

    return (
      <StyledLabel
        ref={ref}
        component="span"
        ownerState={{ color, variant, shape, size }}
        sx={{ ...sx }}
        theme={theme}
        {...other}
      >
        {startIcon && <Box sx={{ ...iconStyle }}> {startIcon} </Box>}

        {children}

        {endIcon && <Box sx={{ ...iconStyle }}> {endIcon} </Box>}
      </StyledLabel>
    );
  }
);

export default Label;
