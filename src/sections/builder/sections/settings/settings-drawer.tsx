import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material';
import { useCallback, useEffect } from 'react';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify/iconify';
import { BaseLoadingButton } from 'src/components/styled/button';
import { WebsiteDesignFields } from 'src/sections/common/website-design-fields';
import { useSettingsDrawer } from './hooks/use-settings-drawer';
import { DrawerBody, DrawerHeader } from './styled';
import TabsWrapper from './tabs';

type SettingsDrawerProps = {
  open: boolean;
  onCloseClicked: VoidFunction;
  selectedPageId: number;
};

export default function SettingsDrawer({
  open,
  onCloseClicked,
  selectedPageId,
}: SettingsDrawerProps) {
  const {
    handleLogoTypeChange,
    handleLogoValueChange,
    handlePaletteValueChange,
    onSubmit,
    resetDefault,
    isLoading,
    methods,
    settings,
    isSuccess,
  } = useSettingsDrawer(selectedPageId);

  const handleClose = useCallback(() => {
    if (!isLoading) {
      onCloseClicked();
      resetDefault();
    }
  }, [isLoading, onCloseClicked, resetDefault]);

  useEffect(() => {
    if (isSuccess) {
      handleClose();
    }
  }, [handleClose, isSuccess]);

  const cache = createCache({
    key: 'settings-drawer-css',
    container: document.head,
  });

  return (
    <CacheProvider value={cache}>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: '472px', width: '100%' } }}
      >
        <DrawerHeader>
          <Typography component="h6" sx={{ fontWeight: 600, fontSize: '1rem', margin: 0 }}>
            Edit settings
          </Typography>
          <IconButton onClick={handleClose}>
            <Iconify icon="material-symbols:close" />
          </IconButton>
        </DrawerHeader>

        <DrawerBody sx={{ flex: 1 }}>
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <TabsWrapper
              tabs={[
                {
                  label: 'Info',
                  icon: <Iconify icon="ri:information-line" />,
                  panel: (
                    <Stack spacing={4}>
                      <Typography variant="body1" fontWeight={500}>
                        Page settings
                      </Typography>
                      <RHFTextField name="title" label="Page title" />
                      <RHFTextField
                        name="description"
                        label="Page description"
                        multiline
                        rows={8}
                      />
                    </Stack>
                  ),
                },
                {
                  label: 'Style',
                  icon: <Iconify icon="ri:paint-fill" />,
                  panel: (
                    <Box
                      sx={{
                        '.MuiFormGroup-root.MuiFormGroup-row': {
                          gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(2, 1fr)',
                          },
                        },
                      }}
                    >
                      <WebsiteDesignFields
                        defaultLogoType={settings.logoType}
                        onLogoTypeChange={handleLogoTypeChange}
                        onLogoValueChange={handleLogoValueChange}
                        onPaletteValueChange={handlePaletteValueChange}
                      />
                    </Box>
                  ),
                },
              ]}
            />

            <Stack flexDirection="row" justifyContent="flex-end" sx={{ mt: 4 }}>
              <BaseLoadingButton
                color="primary"
                variant="contained"
                type="submit"
                disabled={isLoading}
                loading={isLoading}
              >
                Save changes
              </BaseLoadingButton>
            </Stack>
          </FormProvider>
        </DrawerBody>
      </Drawer>
    </CacheProvider>
  );
}
