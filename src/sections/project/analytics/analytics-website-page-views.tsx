import { ApexOptions } from 'apexcharts';
// @mui
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';
// components
import Chart, { useChart } from 'src/components/chart';
import { pluralWord } from 'src/utils/format-string';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  chart: {
    categories: string[];
    colors?: string[];
    series: {
      name: string;
      type: string;
      fill?: string;
      data: number[];
    }[];
    options?: ApexOptions;
  };
}

export default function AnalyticsWebsitePageViews({ title, subheader, chart, ...other }: Props) {
  const { categories, colors, series, options } = chart;

  const chartOptions = useChart({
    noData: { text: 'No data available' },
    colors,
    chart: {
      type: 'bar',
      height: 320,
    },
    plotOptions: {
      bar: {
        barHeight: '20%',
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => {
          if (typeof value !== 'undefined') {
            return pluralWord('view', +value.toFixed(0));
          }
          return value;
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other} sx={{ height: '100%' }}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart dir="ltr" type="bar" series={series} options={chartOptions} height={320} />
      </Box>
    </Card>
  );
}
