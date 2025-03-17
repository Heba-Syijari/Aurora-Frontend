import { LoadingButton } from '@mui/lab';
import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditSocialIconWrapper } from 'src/sections/builder/editors/social-icon';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { IIntellectualProperty } from 'src/types/intellectual-property';
import Socials from '../../common/socials/socials';
import { ContactInfo } from '../common';
import { useSendMessage } from '../common/hooks';
import { ContactTwoData } from '../types';

export type ContactTwoProps = {
  data: ContactTwoData;
  setLocalData: (v: Partial<ContactTwoData>) => void;
  projectId: string;
  intellectualProperty: IIntellectualProperty;
  editMode?: boolean;
};

export default function ContactTwo({
  data,
  setLocalData,
  projectId,
  intellectualProperty,
  editMode,
}: ContactTwoProps) {
  const { title, socialsConfig, address, email, number, button } = data;

  const { isSubmitting, methods, onSubmit } = useSendMessage({ projectId });

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2} px={{ md: 10, sm: 0 }} bgcolor="common.white">
        <Stack direction="row" spacing={2}>
          <RHFTextField
            name="firstName"
            label="First Name"
            required
            sx={{ bgcolor: 'common.white' }}
          />
          <RHFTextField
            name="lastName"
            label="Last Name"
            required
            sx={{ bgcolor: 'common.white' }}
          />
        </Stack>

        <RHFTextField
          name="email"
          label="Email"
          type="email"
          required
          sx={{ bgcolor: 'common.white' }}
        />

        <RHFTextField
          name="message"
          label="Message"
          required
          multiline
          rows={7}
          sx={{ bgcolor: 'common.white' }}
        />

        <EditButtonWrapper
          defaultValue={button}
          onSave={(v) => {
            setLocalData({ button: v });
          }}
          editMode={editMode}
        >
          <LoadingButton
            variant="contained"
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
            sx={{
              padding: '16px 28px',
              color: button.color,
              backgroundColor: button.backgroundColor,
              minWidth: 200,
              '&:hover': {
                backgroundColor: button.color,
                color: button.backgroundColor,
                outline: `1px solid`,
                outlineColor: button.backgroundColor,
                outlineOffset: -1,
              },
              width: '100%',
            }}
          >
            {button.text}
          </LoadingButton>
        </EditButtonWrapper>
      </Stack>
    </FormProvider>
  );

  const renderInfo = (
    <Stack spacing={1} mt={1}>
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
      <br />
      <ContactInfo
        itemType="email"
        defaultValues={{
          address,
          email,
          number,
        }}
        setLocalData={setLocalData}
        editMode={editMode}
      />
      <ContactInfo
        itemType="number"
        defaultValues={{
          address,
          email,
          number,
        }}
        setLocalData={setLocalData}
        editMode={editMode}
      />
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
        />
      </EditSocialIconWrapper>
    </Stack>
  );

  const renderTitle = (
    <EditTextWrapper
      label="Title"
      defaultValue={title}
      onSave={(v) => {
        setLocalData({ title: v });
      }}
      editMode={editMode}
      getMetadataInfo={() => ({ itemType: 'title', sectionType: 'faq' })}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        color={title.color}
        letterSpacing="-0.02em"
        maxWidth={970}
        textTransform="capitalize"
      >
        {title.text}
      </Typography>
    </EditTextWrapper>
  );

  return (
    <Box sx={{ py: 11 }}>
      <Container>
        <Stack spacing={2} alignItems="center">
          <Chip label="Contact us" />
        </Stack>

        <Grid container spacing={4} sx={{ mt: 9 }}>
          <Grid item xs={12} md={4} alignSelf="stretch">
            <Stack p={4} height={1} justifyContent="center" bgcolor="common.neutral" spacing={2}>
              {renderTitle}
              {renderInfo}
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            {renderForm}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
