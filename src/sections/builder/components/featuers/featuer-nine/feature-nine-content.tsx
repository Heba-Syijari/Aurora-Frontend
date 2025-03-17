import { Box, Container } from '@mui/material';
import { Wave } from '../../common';

type Props = {
  children: React.ReactNode;
};

export function FeatureNineContent({ children }: Props) {
  return (
    <>
      <Wave curve="top-left" sx={{ color: 'common.neutral' }} />

      <Box sx={{ bgcolor: 'common.neutral', pb: { xs: 5, md: 10 }, pt: { xs: 2, md: 5 } }}>
        <Container>{children}</Container>
      </Box>

      <Wave
        curve="bottom-right"
        sx={{ color: 'common.neutral', transform: { xs: 'translateY(-1px)', lg: 'initial' } }}
      />
    </>
  );
}
