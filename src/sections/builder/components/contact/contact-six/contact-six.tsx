import { LoadingButton } from '@mui/lab';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { IIntellectualProperty } from 'src/types/intellectual-property';
import { useSendMessage } from '../common/hooks';
import { ContactSixData } from '../types';

export type ContactSixProps = {
  data: ContactSixData;
  setLocalData: (v: Partial<ContactSixData>) => void;
  projectId: string;
  intellectualProperty: IIntellectualProperty;
  editMode?: boolean;
};

export default function ContactSix({
  data,
  setLocalData,
  projectId,
  intellectualProperty,
  editMode,
}: ContactSixProps) {
  const { title, email, number, button, WhatsApp, telegram, subtitle } = data;

  const { isSubmitting, methods, onSubmit } = useSendMessage({ projectId });
  const theme = useTheme();

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack
        spacing={2}
        p={{ md: 5, xs: 5 }}
        bgcolor={theme.palette.background.secondary}
        borderRadius={10}
      >
        <Stack direction="row" spacing={2}>
          <RHFTextField
            name="firstName"
            placeholder="First Name"
            required
            sx={{
              '& .MuiInputBase-input': {
                color: 'secondary.main', // change the typed text colors
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  opacity: 0.8,
                  borderColor: 'common.neutral',
                  borderWidth: '1px',
                },
                '&:hover fieldset': {
                  borderColor: 'secondary.main',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'secondary.main',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'common.neutral',
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
              '& .MuiInputBase-input': {
                color: 'secondary.main',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  opacity: 0.8,

                  borderColor: 'common.neutral',
                  borderWidth: '1px',
                },
                '&:hover fieldset': {
                  borderColor: 'secondary.main',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'secondary.main',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'common.neutral',
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
            '& .MuiInputBase-input': {
              color: 'secondary.main',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                opacity: 0.8,

                borderColor: 'common.neutral',
                borderWidth: '1px',
              },
              '&:hover fieldset': {
                borderColor: 'secondary.main',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'secondary.main',
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'common.neutral',
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
            // maxHeight: 100,
            '& .MuiInputBase-input': {
              color: 'secondary.main',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                opacity: 0.8,

                borderColor: 'common.neutral',
                borderWidth: '1px',
              },
              '&:hover fieldset': {
                borderColor: 'secondary.main',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'secondary.main',
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'common.neutral',
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
          <LoadingButton
            variant="contained"
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
            startIcon={<Iconify icon={button.icon} width="24" height="24" />}
            sx={{
              borderRadius: 3,
              padding: '12px',
              color: button.color,
              // background: `linear-gradient(135deg,  ${lighterColor} , ${baseColor})`,
              backgroundColor: button.backgroundColor,
              // minWidth: 200,
              width: '30%',
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
                // color: button.backgroundColor,
                // outlineOffset: -1,
              },
            }}
          >
            {button.text}
          </LoadingButton>
        </EditButtonWrapper>
      </Stack>
    </FormProvider>
  );

  const renderInfo = (
    <Stack spacing={3} mt={1}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Iconify icon="tabler:phone-call" width="30 " height="35" color={number.color} />
        <EditTextWrapper
          label="Number"
          defaultValue={number}
          onSave={(v) => {
            setLocalData({ number: v });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'number', sectionType: 'contact' })}
        >
          <Typography variant="h6" fontWeight={200} color={number.color}>
            {number.text}
          </Typography>
        </EditTextWrapper>
      </Stack>
      {/* <br /> */}

      <Stack direction="row" alignItems="center" spacing={2}>
        <Iconify icon="ic:outline-email" width="30 " height="30" color={email.color} />
        <EditTextWrapper
          label="Email"
          defaultValue={email}
          onSave={(v) => {
            setLocalData({ email: v });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'email', sectionType: 'contact' })}
        >
          <Typography variant="h6" fontWeight={200} color={email.color}>
            {email.text}
          </Typography>
        </EditTextWrapper>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Iconify icon="ic:baseline-whatsapp" width="30 " height="35" color={WhatsApp.color} />{' '}
        <EditTextWrapper
          label="Whats App"
          defaultValue={WhatsApp}
          onSave={(v) => {
            setLocalData({ WhatsApp: v });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'WhatsApp', sectionType: 'contact' })}
        >
          <Typography variant="h6" fontWeight={200} color={WhatsApp.color}>
            {WhatsApp.text}
          </Typography>
        </EditTextWrapper>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Iconify icon="line-md:telegram" width="30 " height="35" color={telegram.color} />
        <EditTextWrapper
          label="telegram"
          defaultValue={telegram}
          onSave={(v) => {
            setLocalData({ telegram: v });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'telegram', sectionType: 'contact' })}
        >
          <Typography variant="h6" fontWeight={200} color={telegram.color}>
            {telegram.text}
          </Typography>
        </EditTextWrapper>
      </Stack>
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

  const renderSubtitle = (
    <EditTextWrapper
      label="Subtitle"
      defaultValue={subtitle}
      onSave={(v) => {
        setLocalData({ subtitle: v });
      }}
      editMode={editMode}
      getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'contact' })}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        color={subtitle.color}
        letterSpacing="-0.02em"
        maxWidth={970}
        textTransform="capitalize"
      >
        {subtitle.text}
      </Typography>
    </EditTextWrapper>
  );

  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: `${theme.palette.background.neutral}`,
      }}
    >
      <Container>
        <Stack spacing={1} alignItems="center">
          {renderSubtitle}
          {renderTitle}
        </Stack>

        <Grid container columnSpacing={5} rowSpacing={3} sx={{ paddingY: 10 }}>
          <Grid item xs={12} md={8}>
            {renderForm}
          </Grid>
          <Grid item xs={12} md={4} alignSelf="stretch">
            <Stack p={4} height={1} justifyContent="center" spacing={2}>
              {renderInfo}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
