import { Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import Socials from '../../common/socials/socials';
import { TeamTwoItemData } from '../types';

type Props = {
  data: TeamTwoItemData;
  nameTextColor: string;
  specializationTextColor: string;
  socialIconsColor: string;
  bioTextColor: string;
};

export default function TeamTwoItem({
  data,
  socialIconsColor,
  nameTextColor,
  bioTextColor,
  specializationTextColor,
}: Props) {
  const { image, name, socials, specialization, bio } = data;
  return (
    <Card>
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
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <CardContent>
            <Stack spacing={0.5}>
              <Typography variant="caption" color={specializationTextColor}>
                {specialization}
              </Typography>
              <Typography variant="h6" color={nameTextColor}>
                {name}
              </Typography>
              <br />
              <Typography
                variant="caption"
                color={bioTextColor}
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                }}
              >
                {bio}
              </Typography>
              <br />
              <Socials socialsItems={socials} socialIconsColor={socialIconsColor} />
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
