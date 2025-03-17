import { Box, Stack, Typography } from '@mui/material';
import { StyledRHFTabsGroup } from 'src/components/styled/radio';
import { modeOptions } from '../data';

export default function PreferredMode() {
  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight={500} textTransform="capitalize">
        website preferred mode
      </Typography>

      <StyledRHFTabsGroup
        name="mode"
        row
        options={modeOptions.map((option) => ({
          value: option.name,
          label: (
            <Box
              sx={{
                py: 2,
                textAlign: 'center',
              }}
            >
              {option.label}
            </Box>
          ),
        }))}
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: (theme) => theme.spacing(2),
        }}
      />
    </Stack>
  );
}
