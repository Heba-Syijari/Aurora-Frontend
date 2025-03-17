import { Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import Socials from '../../common/socials/socials';
import { TeamOneItemData } from '../types';

type Props = {
  data: TeamOneItemData;
  nameTextColor: string;
  specializationTextColor: string;
  emailTextColor: string;
  numberTextColor: string;
  socialIconsColor: string;
};

export default function TeamOneItem({
  data,
  emailTextColor,
  numberTextColor,
  socialIconsColor,
  nameTextColor,
  specializationTextColor,
}: Props) {
  const { email, image, name, number, socials, specialization } = data;

  return (
    <Card>
      <Grid container>
        <Grid
          item
          xs={5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'stretch',
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              minHeight: 250,
              maxHeight: 250,
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <CardContent>
            <Stack spacing={0.5}>
              <Typography variant="caption" color={specializationTextColor}>
                {specialization}
              </Typography>
              <Typography variant="h6" color={nameTextColor}>
                {name}
              </Typography>
              <br />
              <Typography variant="caption" color={emailTextColor}>
                {email}
              </Typography>
              <Typography variant="caption" color={numberTextColor}>
                {number}
              </Typography>
              <Socials socialsItems={socials} socialIconsColor={socialIconsColor} />
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
