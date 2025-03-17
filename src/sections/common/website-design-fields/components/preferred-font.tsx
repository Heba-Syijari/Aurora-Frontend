import { Typography, Box, Stack } from '@mui/material';
import { StyledRHFTabsGroup } from 'src/components/styled/radio';
import { fontFamilyOptions } from '../data';

export default function PreferredFont() {
  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight={500} textTransform="capitalize">
        Content preferred font
      </Typography>
      <StyledRHFTabsGroup
        name="fontFamily"
        row
        options={fontFamilyOptions.map((option) => ({
          value: option.name,
          label: (
            <Box
              sx={{
                py: 2,
                textAlign: 'center',
                fontFamily: option.variable,
              }}
            >
              {option.name}
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
