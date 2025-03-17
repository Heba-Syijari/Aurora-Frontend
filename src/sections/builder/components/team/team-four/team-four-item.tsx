import { CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { TeamItemData } from '../types';

type Props = {
  data: TeamItemData;
  nameTextColor: string;
  specializationTextColor: string;
};

export default function TeamFourItem({ data, nameTextColor, specializationTextColor }: Props) {
  const { image, name, specialization } = data;

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            minHeight: 300,
            maxHeight: 300,
            borderRadius: 2,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <CardContent>
          <Stack spacing={0.5} alignItems="center">
            <Typography variant="h4" color={nameTextColor}>
              {name}
            </Typography>
            <Typography variant="body2" color={specializationTextColor}>
              {specialization}
            </Typography>
          </Stack>
        </CardContent>
      </Grid>
    </Grid>
  );
}
