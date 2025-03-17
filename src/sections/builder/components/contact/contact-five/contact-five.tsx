import { LoadingButton } from '@mui/lab';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { IIntellectualProperty } from 'src/types/intellectual-property';
import { useSendMessage } from '../common/hooks';
import { ContactFiveData } from '../types';

export type ContactFiveProps = {
  data: ContactFiveData;
  setLocalData: (v: Partial<ContactFiveData>) => void;
  projectId: string;
  intellectualProperty: IIntellectualProperty;
  editMode?: boolean;
};

export default function ContactFive({
  data,
  setLocalData,
  projectId,
  intellectualProperty,
  editMode,
}: ContactFiveProps) {
  const { title, email, number, button, titleCardOne, titleCardTwo } = data;

  const { isSubmitting, methods, onSubmit } = useSendMessage({ projectId });

  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const primaryColor = paletteColorsMap['primary.main'];
  const secondaryColor = paletteColorsMap['secondary.main'];
  const lighterColorPrimary = lighten(primaryColor, 0.8);
  const lighterColorSecondary = lighten(secondaryColor, 0.8);
  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2} p={{ md: 5, xs: 5 }} bgcolor="common.neutral" borderRadius={10}>
        <Stack direction="row" spacing={2}>
          <RHFTextField
            name="firstName"
            placeholder="First Name"
            required
            sx={{
              bgcolor: 'background.neutral',
              '& .MuiOutlinedInput-root': {
                '& .MuiInputBase-input::placeholder': {
                  color: 'text.primary',
                  opacity: 0.5,
                },
                '& .MuiInputBase-input::label': {
                  color: 'text.primary',
                  opacity: 0.5,
                },
              },
            }}
          />
          <RHFTextField
            name="lastName"
            placeholder="Last Name"
            required
            sx={{
              bgcolor: 'background.neutral',
              '& .MuiOutlinedInput-root': {
                '& .MuiInputBase-input::placeholder': {
                  color: 'text.primary',
                  opacity: 0.5,
                },
              },
            }}
          />
        </Stack>

        <RHFTextField
          name="email"
          placeholder="Email"
          type="email"
          required
          sx={{
            bgcolor: 'background.neutral',
            '& .MuiOutlinedInput-root': {
              '& .MuiInputBase-input::placeholder': {
                color: 'text.primary',
                opacity: 0.5,
              },
            },
          }}
        />

        <RHFTextField
          name="message"
          placeholder="Message"
          required
          multiline
          rows={7}
          sx={{
            bgcolor: 'background.neutral',
            '& .MuiOutlinedInput-root': {
              '& .MuiInputBase-input::placeholder': {
                color: 'text.primary',
                opacity: 0.5,
              },
            },
          }}
        />

        <EditButtonWrapper
          defaultValue={button}
          onSave={(v) => {
            setLocalData({ button: v });
          }}
          editMode={editMode}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LoadingButton
              variant="contained"
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              startIcon={<Iconify icon={button.icon} width="24" height="24" />}
              sx={{
                borderRadius: 3,
                color: button.color,
                background: `linear-gradient(to left, ${primaryColor}, ${secondaryColor})`,

                padding: { lg: '12px', xs: '15px' },
                width: { lg: '20%', xs: '40%' },
              }}
            >
              {button.text}
            </LoadingButton>
          </Box>
        </EditButtonWrapper>
      </Stack>
    </FormProvider>
  );

  const renderInfo = (
    <Grid container rowSpacing={4} columnSpacing={5} mt={1}>
      <Grid item lg={6} md={6} xs={12}>
        <Stack
          direction="row"
          spacing={{ lg: 2, xs: 0, md: 0 }}
          alignItems="center"
          justifyContent="space-around"
          sx={{
            borderRadius: 5,
            // background: `linear-gradient(to left, ${primaryColor} 10%, ${lighterColorPrimary} 60%)`,
            background: lighterColorPrimary,
          }}
        >
          <Stack spacing={1}>
            <EditTextWrapper
              label="Title"
              defaultValue={titleCardOne}
              onSave={(v) => {
                setLocalData({ titleCardOne: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'titleCardOne', sectionType: 'contact' })}
            >
              <Typography variant="h6" color={titleCardOne.color}>
                {titleCardOne.text}
              </Typography>
            </EditTextWrapper>
            <EditTextWrapper
              label="Number"
              defaultValue={number}
              onSave={(v) => {
                setLocalData({ number: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'number', sectionType: 'contact' })}
            >
              <Typography variant="body1" color={number.color}>
                {number.text}
              </Typography>
            </EditTextWrapper>
          </Stack>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              my: { lg: 6, md: 4, xs: 4 },
              mx: { lg: 6, md: 2, xs: 2 },
              width: 55,
              height: 55,
              borderRadius: 2,
              background: `linear-gradient(to bottom,${primaryColor}, ${secondaryColor})`,
            }}
          >
            <Iconify icon="ic:baseline-phone" width="40" height="40" color="common.white" />
          </Box>
        </Stack>
      </Grid>
      <Grid item lg={6} md={6} xs={12}>
        <Stack
          direction="row"
          spacing={{ lg: 2, xs: 0, md: 0 }}
          alignItems="center"
          justifyContent="space-around"
          sx={{
            borderRadius: 5,
            // background: `linear-gradient(to left, ${secondaryColor}, ${lighterColorSecondary})`,
            background: lighterColorSecondary,
          }}
        >
          <Stack spacing={1}>
            <EditTextWrapper
              label="Title"
              defaultValue={titleCardTwo}
              onSave={(v) => {
                setLocalData({ titleCardTwo: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'titleCardTwo', sectionType: 'contact' })}
            >
              <Typography variant="h6" color={titleCardTwo.color}>
                {titleCardTwo.text}
              </Typography>
            </EditTextWrapper>
            <EditTextWrapper
              label="Email"
              defaultValue={email}
              onSave={(v) => {
                setLocalData({ email: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'email', sectionType: 'contact' })}
            >
              <Typography variant="body1" color={email.color}>
                {email.text}
              </Typography>
            </EditTextWrapper>
          </Stack>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              my: { lg: 6, md: 4, xs: 4 },
              mx: { lg: 6, md: 2, xs: 2 },
              width: 55,
              height: 55,
              borderRadius: 2,
              background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`,
            }}
          >
            <Iconify icon="ic:outline-email" width="40" height="40" color="common.white" />
          </Box>
        </Stack>
      </Grid>
    </Grid>
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
        variant="h2"
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
    <Box sx={{ py: 4 }}>
      <Container>
        <Stack alignItems="center">{renderTitle}</Stack>

        <Grid
          container
          columnSpacing={0}
          rowSpacing={7}
          sx={{ paddingY: 10 }}
          justifyContent="center"
        >
          <Grid item xs={12} md={10} alignSelf="stretch">
            {renderInfo}
            {/* <Stack p={4} height={1} justifyContent="center" spacing={2}></Stack> */}
          </Grid>
          <Grid item xs={12} md={10}>
            {renderForm}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
