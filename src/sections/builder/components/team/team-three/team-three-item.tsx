import { Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { TeamItemData } from '../types';

type Props = {
  data: TeamItemData;
  nameTextColor: string;
  specializationTextColor: string;
};

export default function TeamThreeItem({ data, nameTextColor, specializationTextColor }: Props) {
  const { image, name, specialization } = data;

  return (
    <Grid container position="relative">
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
      <Grid item xs={8} position="absolute" bottom={-15} right={-15} width="100%">
        <Card>
          <CardContent>
            <Stack spacing={0.5}>
              <Typography variant="h6" color={nameTextColor}>
                {name}
              </Typography>
              <Typography variant="caption" color={specializationTextColor}>
                {specialization}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
