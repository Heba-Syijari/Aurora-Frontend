import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { EditSocialIconWrapper } from 'src/sections/builder/editors/social-icon';
import { IIntellectualProperty } from 'src/types/intellectual-property';
import Socials from '../../common/socials/socials';
import { ContactInfo } from '../common';
import { ContactFourData } from '../types';

export type ContactFourProps = {
  data: ContactFourData;
  setLocalData: (v: Partial<ContactFourData>) => void;
  projectId: string;
  intellectualProperty: IIntellectualProperty;
  editMode?: boolean;
};

export default function ContactFour({
  data,
  setLocalData,
  projectId,
  intellectualProperty,
  editMode,
}: ContactFourProps) {
  const { email, number, socialsConfig, address } = data;

  return (
    <Box
      sx={{
        py: 11,
        position: 'relative',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Contact us" />
        </Box>

        <Box sx={{ mt: 10 }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid
              item
              xs={12}
              md={3}
              alignSelf="stretch"
              sx={{
                borderRight: '1px solid',
                borderColor: { md: 'text.primary', xs: 'transparent' },
              }}
            >
              <Stack height={1} justifyContent="flex-start" alignItems="center" spacing={2}>
                <Iconify icon="octicon:location-16" color="text.primary" />
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="text.primary"
                  letterSpacing="-0.02em"
                  maxWidth={970}
                >
                  Address
                </Typography>

                <ContactInfo
                  itemType="address"
                  defaultValues={{
                    address,
                    email,
                    number,
                  }}
                  setLocalData={setLocalData}
                  editMode={editMode}
                />
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              alignSelf="stretch"
              sx={{
                borderRight: '1px solid',
                borderColor: { md: 'text.primary', xs: 'transparent' },
              }}
            >
              <Stack height={1} justifyContent="flex-start" alignItems="center" spacing={2}>
                <Iconify icon="mingcute:phone-line" color="text.primary" />
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="text.primary"
                  letterSpacing="-0.02em"
                  maxWidth={970}
                >
                  Phone
                </Typography>

                <ContactInfo
                  itemType="number"
                  defaultValues={{
                    address: {
                      city: { color: '', text: '' },
                      streetAddress: { color: '', text: '' },
                    },
                    email,
                    number,
                  }}
                  setLocalData={setLocalData}
                  editMode={editMode}
                />
              </Stack>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              alignSelf="stretch"
              sx={{
                borderRight: '1px solid',
                borderColor: { md: 'text.primary', xs: 'transparent' },
              }}
            >
              <Stack height={1} justifyContent="flex-start" alignItems="center" spacing={2}>
                <Iconify icon="clarity:email-line" color="text.primary" />
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="text.primary"
                  letterSpacing="-0.02em"
                  maxWidth={970}
                >
                  Email
                </Typography>

                <ContactInfo
                  itemType="email"
                  defaultValues={{
                    address: {
                      city: { color: '', text: '' },
                      streetAddress: { color: '', text: '' },
                    },
                    email,
                    number,
                  }}
                  setLocalData={setLocalData}
                  editMode={editMode}
                />
              </Stack>
            </Grid>

            <Grid item xs={12} md={3} alignSelf="stretch">
              <Stack height={1} justifyContent="flex-start" alignItems="center" spacing={2}>
                <Iconify icon="ant-design:like-outlined" color="text.primary" />
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="text.primary"
                  letterSpacing="-0.02em"
                  maxWidth={970}
                >
                  Connect
                </Typography>
                <EditSocialIconWrapper
                  defaultValue={socialsConfig}
                  onSave={(v) => {
                    setLocalData({ socialsConfig: v });
                  }}
                  editMode={editMode}
                >
                  <Socials
                    socialsItems={socialsConfig.socials}
                    socialIconsColor={socialsConfig.socialIconsColor}
                    editMode={editMode}
                    isCenter
                  />
                </EditSocialIconWrapper>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
