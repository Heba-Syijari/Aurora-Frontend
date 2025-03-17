import { Stack, Typography } from '@mui/material';
import { BaseBackground } from '../_common';

// ----------------------------------------------------------------------

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function AuthClassicLayout({ title, subtitle, children }: Props) {
  const renderHead = (
    <Stack spacing={1} alignItems="center">
      <Typography variant="body1" fontWeight={500} color="primary.main">
        {subtitle}
      </Typography>

      <Typography variant="h3" fontWeight={600}>
        {title}
      </Typography>
    </Stack>
  );

  return (
    <BaseBackground>
      <Stack
        spacing={5}
        sx={{
          width: '100%',
          maxWidth: 612,
          mx: 'auto',
          p: 5,
          justifyContent: 'center',
          borderRadius: 3,
          bgcolor: 'background.paper',
        }}
      >
        {renderHead}

        <div>{children}</div>
      </Stack>
    </BaseBackground>
  );
}
