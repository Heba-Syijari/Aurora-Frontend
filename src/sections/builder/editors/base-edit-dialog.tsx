import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Dialog, DialogProps, DialogTitle, IconButton, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Iconify from 'src/components/iconify';
import { useIFrameContext } from '../sections/iframe/iframe-context';

type Props = DialogProps & {
  dialogTitle: string;
  onClose: VoidFunction;
  disableClose?: boolean;
};

export default function BaseEditDialog({ children, dialogTitle, disableClose, ...props }: Props) {
  const { outerHead, outerTheme } = useIFrameContext();

  const cache = createCache({
    key: 'dialog-css',
    container: outerHead,
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={outerTheme}>
        <Dialog {...props}>
          <DialogTitle sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
            <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
              <Typography component="span" variant="h5">
                {dialogTitle}
              </Typography>

              <IconButton onClick={props.onClose} disabled={disableClose} sx={{ p: 0 }}>
                <Iconify icon="material-symbols:close" />
              </IconButton>
            </Stack>
          </DialogTitle>
          {children}
        </Dialog>
      </ThemeProvider>
    </CacheProvider>
  );
}
