import { Box, Container } from '@mui/material';
import { Wave } from '../../common';

type Props = {
  children: React.ReactNode;
};

export function FAQTwoContent({ children }: Props) {
  return (
    <>
      <Wave curve="top-right" sx={{ color: 'secondary.main' }} />

      <Box sx={{ bgcolor: 'secondary.main', py: 11 }}>
        <Container>{children}</Container>
      </Box>

      <Wave curve="bottom-left" sx={{ color: 'secondary.main' }} />
    </>
  );
}
