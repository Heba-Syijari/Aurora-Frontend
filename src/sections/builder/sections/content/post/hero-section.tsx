import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'src/components/image/image';
import { fDate } from 'src/utils/format-time';

type PostHeroSectionProps = {
  title: string;
  description: string;
  imageURL: string;
  createdAt: string;
};

export function PostHeroSection({ title, description, imageURL, createdAt }: PostHeroSectionProps) {
  return (
    <Box sx={{ paddingTop: (theme) => theme.spacing(16) }}>
      <Container>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body1" color="text.secondary">
              {fDate(createdAt, 'dd MMM, yyyy')}
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              fontWeight={700}
              color="text.primary"
              sx={{ mb: 1 }}
            >
              {title}
            </Typography>

            <Typography variant="body1" fontSize={18} color="text.secondary">
              {description}
            </Typography>
          </Box>

          <Image
            src={imageURL}
            alt={title}
            sx={{
              width: '100%',
              height: 500,
              borderRadius: (theme) => theme.spacing(1),
              overflow: 'hidden',
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
