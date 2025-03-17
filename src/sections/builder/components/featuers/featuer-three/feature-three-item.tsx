import { CardMedia, Grid, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { FeatureThreeItemData } from '../types';

type Props = {
  data: FeatureThreeItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
  index: number;
};

export default function FeatureThreeItem({
  data,
  titleTextColor,
  descriptionTextColor,
  iconColor,
  index,
}: Props) {
  const { description, icon, title, image } = data;

  return (
    <Grid container direction={{ sm: index % 2 === 0 ? 'column' : 'column-reverse', xs: 'column' }}>
      <Grid item xs={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          style={{ objectFit: 'cover', height: 300 }}
        />
      </Grid>
      <Grid item xs={7} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          height={300}
          overflow="hidden"
        >
          <Iconify icon={icon} color={iconColor} width={45} height={45} />
          <Typography
            variant="h6"
            color={titleTextColor}
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
            color={descriptionTextColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'center',
              mx: 1,
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
