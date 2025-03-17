import { Box, Stack } from '@mui/material';
import React from 'react';
import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function BaseBackground({ children }: Props) {
  return (
    <Box sx={{ bgcolor: 'primary.darker' }}>
      <Stack spacing={3} alignItems="center" py={3}>
        <Logo disabledLink full sx={{ color: '#fff', height: 40 }} />
        {children}
      </Stack>
    </Box>
  );
}
