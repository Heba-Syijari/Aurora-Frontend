import { Box, Container } from '@mui/material';
import { Wave } from '../../common';

type Props = {
  children: React.ReactNode;
};

export function SpecialTimesOneContent({ children }: Props) {
  return (
    <>
      <Wave curve="top-left" sx={{ color: 'text.primary' }} />

      <Box sx={{ bgcolor: 'text.primary', pb: { xs: 10, md: 15 }, pt: { xs: 4, md: 15 } }}>
        <Container>{children}</Container>
      </Box>

      <Wave
        curve="bottom-right"
        sx={{ color: 'text.primary', transform: { xs: 'translateY(-1px)', lg: 'initial' } }}
      />
    </>
  );
}
