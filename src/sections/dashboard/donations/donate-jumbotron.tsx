import { Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { BaseButton } from 'src/components/styled/button';
import { BackgroundPrints } from 'src/layouts/_common';

// ------------------------------------------------------------

type Props = {
  onDonateClick: VoidFunction;
};

export default function DonateJumbotron({ onDonateClick }: Props) {
  return (
    <Stack
      spacing={3}
      alignItems="center"
      justifyContent="space-between"
      direction="row"
      width={1}
      sx={{
        position: 'relative',
        backgroundColor: (theme) => theme.palette.background.primary,
        overflow: 'hidden',
        border: '5px solid',
        bgcolor: 'background.secondary',
        borderRadius: '24px',
        borderColor: 'background.paper',
        p: 2,
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Iconify icon="solar:hand-money-bold-duotone" color="primary.main" width={47} />
        <Stack>
          <Typography variant="body2" color="primary.dark" sx={{ maxWidth: 430 }}>
            Your support for us is beneficial and influential
          </Typography>
          <Typography variant="h6" color="primary.dark" sx={{ maxWidth: 430 }}>
            Support Our Mission and help us
          </Typography>
        </Stack>
      </Stack>

      <BaseButton color="primary" variant="contained" onClick={onDonateClick}>
        Donate Now
      </BaseButton>

      <BackgroundPrints
        sx={{
          opacity: 0.07,
          right: 0,
          bottom: 0,
          position: 'absolute',
        }}
      />
      <BackgroundPrints
        sx={{
          opacity: 0.07,
          left: 0,
          bottom: 0,
          position: 'absolute',
          transform: 'rotateY(180deg)',
        }}
      />
    </Stack>
  );
}
