import { Box, Card, CardMedia, Stack, Typography } from '@mui/material';
import { GallerySevenItemData } from '../types';

type Props = {
  data: GallerySevenItemData;
  titleTextColor: string;
  currentIndex: number;
  index: number;
};

export default function GallerySevenItem({ data, titleTextColor, currentIndex, index }: Props) {
  const { title, image } = data;

  return (
    <Stack
      alignItems="center"
      sx={{
        marginY: 2,
      }}
    >
      <Card
        sx={{
          transition: 'scale ease-in-out 0.4s',
          scale: currentIndex !== index ? '0.80' : '0.99',
          maxWidth: 500,
          borderRadius: 2,
          p: 2,
          width: '94%',
          height: 1,
        }}
      >
        <Box>
          <Typography gutterBottom variant="body1" component="div" textAlign="center">
            {title}
          </Typography>
        </Box>
        <CardMedia
          sx={{
            height: 300,
            maxHeight: 500,
            borderRadius: 2,
          }}
          image={image}
        />
      </Card>
    </Stack>
  );
}
