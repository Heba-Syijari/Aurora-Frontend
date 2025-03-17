import { Box, Grid, Stack } from '@mui/material';
import Iconify from 'src/components/iconify';
import { Socials as SocialsType } from './types';

type Props = {
  socialsItems: SocialsType;
  socialIconsColor: string;
  editMode?: boolean;
  isCenter?: boolean;
  isRectanguler?: boolean;
};

export default function Socials({
  socialsItems,
  socialIconsColor,
  editMode,
  isCenter = false,
  isRectanguler = false,
}: Props) {
  const socialIcons = {
    facebook: 'line-md:facebook',
    linkedin: 'eva:linkedin-fill',
    twitter: 'ri:twitter-fill',
    instagram: 'ri:instagram-line',
  };

  return (
    <Grid container spacing={1} maxWidth={100} justifyContent={isCenter ? 'center' : 'flex-start'}>
      {Object.entries(socialsItems).map((social, index) => {
        const socialName = social[0] as keyof typeof social;
        const socialLink = social[1];
        return (
          <Grid item xs={3} key={index} mt={0.5}>
            <Stack spacing={1} alignItems="center" textAlign="center">
              <Box
                component="a"
                href={socialLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mb: 2,
                  bgcolor: socialIconsColor,
                  borderRadius: isRectanguler ? '4px' : '50%',
                  color: 'common.white',
                  width: 20,
                  height: 20,
                  display: 'grid',
                  placeItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <Iconify icon={socialIcons[socialName as keyof typeof socialIcons]} width={14} />
              </Box>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
}
