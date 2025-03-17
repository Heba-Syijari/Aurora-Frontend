import { Box, Container } from '@mui/material';
import { Wave } from '../../common';

type Props = {
  children: React.ReactNode;
};

export function AboutTwoContent({ children }: Props) {
  return (
    <>
      <Wave curve="top-left" sx={{ color: 'common.neutral' }} />

      <Box sx={{ bgcolor: 'common.neutral', py: 11 }}>
        <Container>{children}</Container>
      </Box>

      <Wave curve="bottom-right" sx={{ color: 'common.neutral' }} />
    </>
  );
}
