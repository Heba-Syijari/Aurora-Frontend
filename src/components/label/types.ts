import { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

export type LabelColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export type LabelVariant = 'filled' | 'outlined' | 'soft';

export type LabelShape = 'rounded' | 'square' | 'circle';

export type LabelSize = 'small' | 'medium' | 'large';

export interface LabelProps extends BoxProps {
  startIcon?: React.ReactElement | null;
  endIcon?: React.ReactElement | null;
  color?: LabelColor;
  variant?: LabelVariant;
  shape?: LabelShape;
  size?: LabelSize;
}
