import { Box, Container } from '@mui/material';

type Props = {
  children: React.ReactNode;
  imageURL: string;
};

export function SpecialTimesThreeContent({ children, imageURL }: Props) {
  return (
    <Box
      sx={{
        py: { xs: 18, md: 25 },
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.32) 100%), url('${imageURL}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
}
