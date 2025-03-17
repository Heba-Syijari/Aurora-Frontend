import { Stack } from '@mui/material';
import FormProvider from 'src/components/hook-form';
import { BaseLoadingButton } from 'src/components/styled/button';
import { WebsiteInfoFields } from 'src/sections/common/website-info-fields';
import { WebsiteStoryFields } from 'src/sections/common/website-story-fields';
import { useWebsiteInfoForm } from './hooks/use-website-info-form';

export default function WebsiteInfoForm() {
  const { methods, onSubmit, isLoading, watch } = useWebsiteInfoForm();

  const descriptionWatch = watch('description');

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack
        spacing={3}
        sx={{
          borderRadius: (theme) => theme.spacing(2),
          backgroundColor: (theme) => theme.palette.background.neutral,
          padding: (theme) => theme.spacing(3),
        }}
      >
        <WebsiteInfoFields />

        <WebsiteStoryFields descriptionWatch={descriptionWatch} />

        <BaseLoadingButton
          color="primary"
          variant="contained"
          size="large"
          loading={isLoading}
          disabled={isLoading}
          type="submit"
          sx={{ alignSelf: 'flex-start' }}
        >
          Save Changes
        </BaseLoadingButton>
      </Stack>
    </FormProvider>
  );
}
