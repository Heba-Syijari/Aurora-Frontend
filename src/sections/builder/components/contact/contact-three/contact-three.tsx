import { Box, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import { EditSocialIconWrapper } from 'src/sections/builder/editors/social-icon';
import { IIntellectualProperty } from 'src/types/intellectual-property';
import Socials from '../../common/socials/socials';
import { ContactInfo } from '../common';
import { ContactThreeData } from '../types';
import { ContactThreeContent } from './contact-three-content';

export type ContactThreeProps = {
  data: ContactThreeData;
  setLocalData: (v: Partial<ContactThreeData>) => void;
  projectId: string;
  intellectualProperty: IIntellectualProperty;
  editMode?: boolean;
};

export default function ContactThree({
  data,
  setLocalData,
  projectId,
  intellectualProperty,
  editMode,
}: ContactThreeProps) {
  const { email, number, socialsConfig, backgroundColor } = data;

  return (
    <ContactThreeContent backgroundColor={backgroundColor}>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Chip label="Contact us" />
      </Box>

      <Box sx={{ mt: 8 }}>
        <Card sx={{ p: 2 }}>
          <CardContent>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={4} alignSelf="stretch">
                <Stack height={1} justifyContent="center" alignItems="center" spacing={2}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="text.primary"
                    letterSpacing="-0.02em"
                    maxWidth={970}
                  >
                    Call
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
              <Grid item md={4} xs={12} alignSelf="stretch">
                <Stack height={1} justifyContent="center" alignItems="center" spacing={2}>
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

              <Grid item xs={12} md={4} alignSelf="stretch">
                <Stack height={1} justifyContent="center" alignItems="center" spacing={2}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="text.primary"
                    letterSpacing="-0.02em"
                    maxWidth={970}
                  >
                    Follow
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
          </CardContent>
        </Card>
      </Box>
    </ContactThreeContent>
  );
}
