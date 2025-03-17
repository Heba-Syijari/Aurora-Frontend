import { Grid, Stack, Typography } from '@mui/material';
import Image from 'src/components/image/image';
import { OurSolutionThreeItemData } from '../types';

type Props = {
  data: OurSolutionThreeItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  index: number;
};

export default function OurSolutionThreeItem({
  data,
  titleTextColor,
  descriptionTextColor,
  index,
}: Props) {
  const { description, title, image } = data;

  return (
    <Grid
      container
      rowSpacing={1}
      // columnGap={1}
      justifyContent="space-between"
      alignItems="center"
      direction={index % 2 !== 0 ? 'row-reverse' : 'row'}
    >
      <Grid item lg={5} md={5} sm={5}>
        <Stack spacing={2} alignItems="start" justifyContent="center">
          <Typography
            variant="h4"
            color={titleTextColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'start',
              mx: 1,
              textTransform: 'uppercase',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color={descriptionTextColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'start',
              mx: 1,
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        lg={5}
        md={5}
        sm={5}
        sx={{
          width: 1,
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'start' },
        }}
      >
        <Image
          sx={{
            borderRadius: 5,
            width: 1,
            // height: 300,
            maxWidth: 350,
            // aspectRatio: '19/6',
          }}
          alt={image}
          src={image}
        />
      </Grid>
    </Grid>
  );
}
