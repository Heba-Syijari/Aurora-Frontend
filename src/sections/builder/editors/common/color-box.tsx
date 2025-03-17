import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

type ColorBoxProps = {
  color: string;
  width?: string | number;
};

export const ColorBox = styled(Box)<ColorBoxProps>(({ theme, width, color }) => ({
  backgroundColor: color,
  width: width || '2rem',
  height: width || '2rem',
  borderRadius: theme.spacing(0.25),
}));
