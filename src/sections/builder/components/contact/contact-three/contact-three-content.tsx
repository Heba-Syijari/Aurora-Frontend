import { Box, Container } from '@mui/material';
import React from 'react';
import { Wave } from '../../common';

type Props = {
  backgroundColor: string;
  children: React.ReactNode;
};

export function ContactThreeContent({ backgroundColor, children }: Props) {
  return (
    <Box>
      <Wave curve="top-left" sx={{ color: backgroundColor }} />

      <Box sx={{ bgcolor: backgroundColor }}>
        <Container sx={{ maxWidth: { xs: 994 } }}>{children}</Container>
      </Box>

      <Wave curve="bottom-right" sx={{ color: backgroundColor }} />
    </Box>
  );
}
