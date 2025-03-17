import { Box, Container } from '@mui/material';
import { IllustrationOne, IllustrationWrapper } from '../../common';

type Props = {
  children: React.ReactNode;
};

export function FAQThreeContent({ children }: Props) {
  return (
    <Box
      sx={{
        py: 15,
        position: 'relative',
        bgcolor: 'background.neutral',
        overflow: 'hidden',
      }}
    >
      <IllustrationWrapper sx={{ top: 0, left: 0, transform: 'translate(-40%, -40%)' }}>
        <IllustrationOne sx={{ width: 242, height: 247 }} />
      </IllustrationWrapper>

      <Container>{children}</Container>

      <IllustrationWrapper sx={{ bottom: 0, right: 0, transform: 'translate(40%, 40%)' }}>
        <IllustrationOne sx={{ width: 242, height: 247 }} />
      </IllustrationWrapper>
    </Box>
  );
}
