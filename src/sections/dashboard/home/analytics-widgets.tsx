import { Grid, Skeleton } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import AnalyticsWidgetSummary from './analytics-widget-summary';

type Props = {
  isLoading: boolean;
  projectsCount: number;
  publishedProjectsCount: number;
};

export function AnalyticsWidgets({ isLoading, projectsCount, publishedProjectsCount }: Props) {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        maxWidth: 900,
        margin: '0 auto',
        padding: 3,
      }}
    >
      <Grid item xs={12} sm={6}>
        {isLoading && <Skeleton variant="rounded" height={152} />}

        {!isLoading && (
          <AnalyticsWidgetSummary
            title="Total Projects"
            total={projectsCount}
            icon={<Iconify icon="fluent:apps-48-filled" width={48} color="primary.main" />}
          />
        )}
      </Grid>
    </Grid>
  );
}
