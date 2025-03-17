import { Box, Divider, IconButton, Typography } from '@mui/material';
import { m } from 'framer-motion';
import { useAuthContext } from 'src/auth/hooks';
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import Iconify from 'src/components/iconify';

export default function UserCredits() {
  const { subscription } = useAuthContext();
  const popover = usePopover();

  if (!subscription) return null;

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          height: 40,
          borderRadius: '5px',
          background: (theme) => theme.palette.background.paper,
        }}
      >
        <Iconify icon="solar:subtitles-bold-duotone" width={24} />
      </IconButton>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ p: 0 }}>
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Typography variant="subtitle2" noWrap>
            Subscription Credits
          </Typography>

          <Divider sx={{ borderStyle: 'dashed', my: 1 }} />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto auto',
              columnGap: '4px',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="body2">Image credits:</Typography>
            <Typography variant="body2">{subscription.imageGenerations}</Typography>

            <Typography variant="body2">Text credits:</Typography>
            <Typography variant="body2">{subscription.textGenerations}</Typography>
          </Box>
        </Box>
      </CustomPopover>
    </>
  );
}
