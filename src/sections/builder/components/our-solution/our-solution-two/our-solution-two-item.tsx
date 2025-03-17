import { Grid, Stack, Typography } from '@mui/material';
import Image from 'src/components/image/image';
import { OurSolutionTwoItemData } from '../types';

type Props = {
  data: OurSolutionTwoItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  index: number;
};

export default function OurSolutionTwoItem({
  data,
  titleTextColor,
  descriptionTextColor,
  index,
}: Props) {
  const { description, title, image } = data;

  return (
    <Grid
      marginY={5}
      container
      rowSpacing={1}
      // columnGap={1}
      justifyContent="space-around"
      alignItems="center"
      direction={index % 2 !== 0 ? 'row-reverse' : 'row'}
    >
      <Grid item lg={5} md={5} sm>
        <Stack spacing={2} alignItems="start" justifyContent="center">
          <Typography
            variant="h4"
            color={titleTextColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              maxWidth: '100%',
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
          display: 'flex',
          justifyContent: 'start',
        }}
      >
        <Image
          sx={{
            borderRadius: 5,
            // height: 300,
            width: 0.75,
            // aspectRatio: '19/6',
          }}
          alt={image}
          src={image}
        />
      </Grid>
    </Grid>
  );
}
