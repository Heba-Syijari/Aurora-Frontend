import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Drawer, IconButton, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useCallback } from 'react';
import Iconify from 'src/components/iconify/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { useIFrameContext } from 'src/sections/builder/sections/iframe/iframe-context';
import { DrawerHeader } from 'src/sections/builder/sections/settings/styled';
import AddSection from './add-section';

interface AddSectionDrawerProps {
  open: boolean;
  onClose: () => void;
  onAdd: (componentId: number) => Promise<void>;
}

export default function AddSectionDrawer({ open, onClose, onAdd }: AddSectionDrawerProps) {
  const { outerHead, outerTheme } = useIFrameContext();

  const cache = createCache({
    key: 'dialog-css',
    container: outerHead,
  });

  const addSectionLoading = useBoolean();

  const handleClose = () => {
    if (!addSectionLoading.value) {
      onClose();
    }
  };

  const handleAdd = useCallback(
    async (componentId: number) => {
      try {
        addSectionLoading.onTrue();
        await onAdd(componentId);
      } finally {
        addSectionLoading.onFalse();
      }
    },
    [addSectionLoading, onAdd]
  );

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={outerTheme}>
        <Drawer
          anchor="left"
          open={open}
          onClose={handleClose}
          PaperProps={{ sx: { maxWidth: 730, width: '100%' } }}
        >
          <DrawerHeader>
            <Typography variant="h6" sx={{ margin: 0 }}>
              Add section
            </Typography>

            <IconButton onClick={handleClose}>
              <Iconify icon="material-symbols:close" />
            </IconButton>
          </DrawerHeader>

          <AddSection onAdd={handleAdd} />
        </Drawer>
      </ThemeProvider>
    </CacheProvider>
  );
}
