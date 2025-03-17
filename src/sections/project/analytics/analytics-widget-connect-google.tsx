import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  title?: string;
  description?: string;
  img?: React.ReactNode;
  action?: React.ReactNode;
}

export default function AnalyticsWidgetConnectGoogle({
  title,
  description,
  action,
  img,
  ...other
}: Props) {
  const theme = useTheme();

  return (
    <Stack
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={{
        height: { md: 1 },
        borderRadius: 2,
        position: 'relative',
        color: 'primary.main',
        backgroundColor: 'background.primary',
      }}
      {...other}
    >
      <Stack
        flexGrow={1}
        justifyContent="center"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        sx={{
          p: {
            xs: theme.spacing(5, 3, 0, 3),
            md: theme.spacing(5),
          },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography paragraph variant="h4" sx={{ whiteSpace: 'pre-line' }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ maxWidth: 360, mb: { xs: 3, xl: 5 } }}>
          {description}
        </Typography>

        {action && action}
      </Stack>

      {img && (
        <Stack
          component="span"
          justifyContent="center"
          sx={{
            p: { xs: 5, md: 3 },
            maxWidth: 360,
            mx: 'auto',
          }}
        >
          {img}
        </Stack>
      )}
    </Stack>
  );
}
