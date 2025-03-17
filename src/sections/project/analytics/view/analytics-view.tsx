'use client';

import { LoadingButton } from '@mui/lab';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Iconify from 'src/components/iconify/iconify';
import { useSettingsContext } from 'src/components/settings';
import { parseFormatYYYYMMDD, parseFormatYYYYMMDDHH } from 'src/utils/format-time';
import { useAnalyticsView } from '../hooks/use-analytics-view';
// import AnalyticsWidgetSummary from '../analytics-widget-summary';
import AnalyticsCurrentVisits from '../analytics-current-visits';
import AnalyticsWebsitePageViews from '../analytics-website-page-views';
import AnalyticsWebsiteVisits from '../analytics-website-visits';
import AnalyticsWidgetConnectGoogle from '../analytics-widget-connect-google';
import AnalyticsWidgetTotalVisits from '../analytics-widget-total-visits';

export default function AnalyticsView() {
  const settings = useSettingsContext();
  const theme = useTheme();

  const {
    handleCreateAnalyticsProperty,
    isLoading,
    // projectsCount,
    // publishedProjectsCount,
    hasAnalytics,
    isProjectPublished,
    activeUsersByCountry,
    reportData,
    reportDateLabels,
    activeUsersByHour,
    activeUsersByPage,
    activeUsersByContinent,
    totalActiveUsers,
    projectURL,
  } = useAnalyticsView();

  const renderConnectGoogleAnalytics = (
    <Grid item xs={12} md={12}>
      <AnalyticsWidgetConnectGoogle
        title="Connect with Google Analytics"
        description="If you want to get a complete understanding of your customers across devices and platforms."
        img={<Iconify icon="logos:google-analytics" width={64} />}
        action={
          <LoadingButton
            variant="contained"
            color="primary"
            onClick={handleCreateAnalyticsProperty}
            loading={isLoading}
            disabled={isLoading}
            sx={{ borderRadius: theme.spacing(1) }}
          >
            Connect
          </LoadingButton>
        }
      />
    </Grid>
  );

  const rednerAnalyticsCharts = (
    <>
      <Grid item xs={12} md={6} lg={8}>
        <AnalyticsWebsiteVisits
          title="Website visits for last 7 days"
          chart={{
            labels: reportDateLabels.map(parseFormatYYYYMMDD),
            series: [
              {
                name: 'Active Users',
                type: 'column',
                fill: 'solid',
                data: reportData.activeUsers.map((item) => item.value),
              },
              {
                name: 'New Users',
                type: 'area',
                fill: 'gradient',
                data: reportData.newUsers.map((item) => item.value),
              },
              {
                name: 'Event Count',
                type: 'line',
                fill: 'solid',
                data: reportData.eventCount.map((item) => item.value),
              },
            ],
          }}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <AnalyticsCurrentVisits
          title="Current visits"
          chart={{
            series: activeUsersByCountry.map(({ category, value }) => ({ label: category, value })),
          }}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={8}>
        <AnalyticsWebsitePageViews
          title="Website page views"
          chart={{
            categories: activeUsersByPage.map((item) => item.category),
            series: [
              {
                name: 'Page views',
                type: 'column',
                fill: 'solid',
                data: activeUsersByPage.map((item) => item.value),
              },
            ],
            colors: [theme.palette.warning.main],
          }}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <AnalyticsWidgetTotalVisits visits={totalActiveUsers} />
      </Grid>

      <Grid item xs={12} md={6} lg={8}>
        <AnalyticsWebsiteVisits
          title="Most busy hours"
          chart={{
            labels: activeUsersByHour.map((item) => parseFormatYYYYMMDDHH(item.category)),
            series: [
              {
                name: 'Hour visits',
                type: 'column',
                fill: 'solid',
                data: activeUsersByHour.map((item) => item.value),
              },
            ],
            colors: [theme.palette.success.main],
            options: {
              plotOptions: {
                bar: {
                  columnWidth: '10%',
                },
              },
            },
          }}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <AnalyticsCurrentVisits
          title="Visits by continent"
          chart={{
            series: activeUsersByContinent.map(({ category, value }) => ({
              label: category,
              value,
            })),
            type: 'donut',
          }}
        />
      </Grid>
    </>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Stack spacing={1} sx={{ mb: { xs: 3, md: 5 } }}>
        <Stack spacing={2}>
          <Typography variant="h3">Hi, Welcome back 👋</Typography>
          <Typography variant="h5" fontWeight={500}>
            Find out today&apos;s latest updates
          </Typography>
        </Stack>

        {isProjectPublished && (
          <Typography variant="body2">
            You can see your website at{' '}
            <Typography
              component="a"
              href={projectURL}
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              color="inherit"
            >
              click here
            </Typography>
          </Typography>
        )}
      </Stack>

      <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={6}>
          <AnalyticsWidgetSummary
            title="Total Projects"
            total={projectsCount}
            sx={{ backgroundColor: theme.palette.background.primary }}
            icon={<Iconify icon="ri:earth-line" width={48} color="primary.main" />}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <AnalyticsWidgetSummary
            title="Published Projects"
            total={publishedProjectsCount}
            sx={{ backgroundColor: theme.palette.background.neutral }}
            icon={<Iconify icon="ri:gallery-upload-line" width={48} color="secondary.main" />}
          />
        </Grid> */}

        {hasAnalytics ? rednerAnalyticsCharts : renderConnectGoogleAnalytics}
      </Grid>
    </Container>
  );
}
