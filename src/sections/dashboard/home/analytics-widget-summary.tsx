import Box from '@mui/material/Box';
import { CardProps } from '@mui/material/Card';
import Typography from '@mui/material/Typography';
// utils
import { fShortenNumber } from 'src/utils/format-number';
// theme
import { Card } from '@mui/material';
import { BackgroundPrints } from 'src/layouts/_common';
import { ColorSchema } from 'src/theme/palette';

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
        p: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        border: '5px solid',
        bgcolor: 'background.secondary',
        borderRadius: '24px',
        borderColor: 'background.paper',
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <BackgroundPrints
        sx={{
          position: 'absolute',
          opacity: 0.1,
          right: 0,
        }}
      />
      <Box
        sx={{
          width: 100,
          height: 100,
          lineHeight: 0,
          borderRadius: '50%',
          display: 'grid',
          color: 'primary.main',
          placeItems: 'center',
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="body2" fontWeight={600} color="primary.dark">
          {title}
        </Typography>
        <Typography variant="h3" color="primary.dark" fontWeight={600}>
          {fShortenNumber(total)}
        </Typography>
      </Box>
    </Card>
  );
}
