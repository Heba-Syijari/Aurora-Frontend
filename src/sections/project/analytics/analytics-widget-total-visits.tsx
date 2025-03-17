import { Typography, Card, CardHeader, CardContent, Stack } from '@mui/material';
import { pluralWord } from 'src/utils/format-string';

// ----------------------------------------------------------------------

interface Props {
  visits: number;
}

export default function AnalyticsWidgetTotalVisits({ visits }: Props) {
  return (
    <Card sx={{ height: '100%', display: 'table', width: '100%' }}>
      <CardHeader title="Website visits" />

      <CardContent sx={{ display: 'table-row', height: '100%' }}>
        <Stack justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
          <Typography variant="body1" fontSize={32}>
            {pluralWord('User', visits)}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
