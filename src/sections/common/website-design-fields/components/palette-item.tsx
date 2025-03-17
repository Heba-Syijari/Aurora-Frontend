import { Box } from '@mui/material';

type PaletteItemProps = {
  colors: {
    primary: string;
    secondary: string;
    neutral: string;
  };
};

export default function PaletteItem({ colors }: PaletteItemProps) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        width: '100%',
        height: '50px',
        verticalAlign: 'middle',
        '& > *': { flex: 1 },
        borderRadius: (theme) => theme.spacing(0.5),
        overflow: 'hidden',
      }}
    >
      <Box sx={{ backgroundColor: colors.neutral }} />
      <Box sx={{ backgroundColor: colors.secondary }} />
      <Box sx={{ backgroundColor: colors.primary }} />
    </Box>
  );
}
