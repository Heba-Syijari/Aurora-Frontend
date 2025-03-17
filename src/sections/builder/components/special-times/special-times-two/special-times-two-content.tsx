import { Box, Container } from '@mui/material';
import { Wave } from '../../common';

type Props = {
  children: React.ReactNode;
};

export function SpecialTimesTwoContent({ children }: Props) {
  return (
    <>
      <Wave curve="top-left" sx={{ color: 'common.neutral' }} />

      <Box sx={{ bgcolor: 'common.neutral', pb: { xs: 10, md: 15 }, pt: { xs: 4, md: 15 } }}>
        <Container>{children}</Container>
      </Box>

      <Wave curve="bottom-right" sx={{ color: 'common.neutral' }} />
    </>
  );
}
