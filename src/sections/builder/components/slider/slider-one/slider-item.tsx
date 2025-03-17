import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { SliderOneItemData } from '../types';

type Props = {
  data: SliderOneItemData;
  titleTextColor: string;
  subtitleTextColor: string;
  descriptionTextColor: string;
};

export default function SliderOneDataItem({
  data,
  descriptionTextColor,
  subtitleTextColor,
  titleTextColor,
}: Props) {
  const { description, title, image, subtitle } = data;
  return (
    <Stack alignItems="center" width={1}>
      <Box
        my={10}
        maxWidth={{ xs: 230, sm: 400, md: 400, lg: 700 }}
        sx={{
          position: 'relative',
        }}
      >
        <CardMedia
          component="img"
          src={image}
          sx={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            position: 'absolute',
            left: '50%',
            transform: 'translateX( -50%)',
            top: -50,
            zIndex: 4,
          }}
        />
        <Card
          elevation={3}
          sx={{
            borderRadius: 2,
            width: 1,
            height: 270,
            p: 3,
            zIndex: 3,
            position: 'relative',
            overflow: 'visible',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: 20,
              bottom: 20,
              width: '20px',
              backgroundColor: 'white',
              zIndex: 1,
            },
            '&::before': {
              left: -20,
              borderTopLeftRadius: '10px',
              borderBottomLeftRadius: '10px',
              boxShadow: '-1px 1px 8px rgba(0, 0, 0, 0.1)',
            },
            '&::after': {
              right: '-20px',
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
              boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <CardContent>
            <Stack spacing={1} alignItems="center" justifyContent="center" minHeight={210}>
              <Typography
                variant="body1"
                color={titleTextColor}
                fontWeight={600}
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                  textTransform: 'capitalize',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color={subtitleTextColor}
                fontWeight={600}
                sx={{
                  mt: -1,
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                  textTransform: 'capitalize',
                }}
              >
                {subtitle}
              </Typography>
              <Typography
                variant="caption"
                color={descriptionTextColor}
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 6,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                  textAlign: 'center',
                  mx: 1,
                }}
              >
                {description}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
}
