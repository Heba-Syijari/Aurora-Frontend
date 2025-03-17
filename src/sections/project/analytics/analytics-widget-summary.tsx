import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardProps } from '@mui/material/Card';
// utils
import { fShortenNumber } from 'src/utils/format-number';
// theme
import { ColorSchema } from 'src/theme/palette';
import { Card } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  total: number;
  icon: React.ReactNode;
  color?: ColorSchema;
}

export default function AnalyticsWidgetSummary({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}: Props) {
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
        pl: 3,
        ...sx,
      }}
      {...other}
    >
      <Box>
        <Typography variant="body2" fontWeight={600} color="text.tertiary">
          {title}
        </Typography>
        <Typography variant="h3" fontWeight={600}>
          {fShortenNumber(total)}
        </Typography>
      </Box>

      <Box
        sx={{
          width: 120,
          height: 120,
          lineHeight: 0,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {icon}
      </Box>
    </Card>
  );
}
