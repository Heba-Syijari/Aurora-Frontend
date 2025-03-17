import React from 'react';
import { Stack } from '@mui/material';
import FormProvider from 'src/components/hook-form';
import { BaseLoadingButton } from 'src/components/styled/button';
import { WebsiteAudienceFields } from 'src/sections/common/website-audience-fields';
import { useWebsiteAudienceForm } from './hooks/use-website-audience-form';

export default function WebsiteAudienceForm() {
  const { methods, onSubmit, isLoading } = useWebsiteAudienceForm();

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
        <WebsiteAudienceFields />

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
