'use client';

import { m } from 'framer-motion';
// @mui
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
// hooks
import { useGetMyNotifications, useMarkAllNotificationsAsRead } from 'src/api/notification';
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
// components
import { varHover } from 'src/components/animate';
import EmptyContent from 'src/components/empty-content';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
//
import NotificationItem from './notification-item';
import NotificationSkeleton from './notification-skeleton';

// ----------------------------------------------------------------------

export default function NotificationsPopover() {
  const drawer = useBoolean();

  const smUp = useResponsive('up', 'sm');

  const { notifications, refetch, isLoading, isEmpty } = useGetMyNotifications();

  const { markAllNotificationsAsRead } = useMarkAllNotificationsAsRead();

  const totalUnRead = notifications.filter((item) => !item.readAt).length;

  const handleMarkAllAsRead = async () => {
    try {
      await markAllNotificationsAsRead();

      await refetch();
    } catch (err) {
      console.error({ err });
    }
  };

  const renderHead = (
    <Stack direction="row" alignItems="center" sx={{ py: 2, pl: 2.5, pr: 1, minHeight: 68 }}>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Notifications
      </Typography>

      {!!totalUnRead && (
        <Tooltip title="Mark all as read">
          <IconButton color="primary" onClick={handleMarkAllAsRead}>
            <Iconify icon="eva:done-all-fill" />
          </IconButton>
        </Tooltip>
      )}

      {!smUp && (
        <IconButton onClick={drawer.onFalse}>
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      )}
    </Stack>
  );

  const renderList = (
    <Scrollbar>
      <List disablePadding>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </List>
    </Scrollbar>
  );

  const renderLoading = [...Array(3)].map((_, index) => <NotificationSkeleton key={index} />);

  const renderEmpty = <EmptyContent title="You have no notifications yet" sx={{ py: 10 }} />;

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        color={drawer.value ? 'primary' : 'default'}
        onClick={drawer.onTrue}
        sx={{
          height: 40,
          borderRadius: '5px',
          background: (theme) => theme.palette.background.paper,
        }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify icon="solar:bell-bing-bold-duotone" width={24} />
        </Badge>
      </IconButton>

      <Drawer
        open={drawer.value}
        onClose={drawer.onFalse}
        anchor="right"
        slotProps={{
          backdrop: { invisible: true },
        }}
        PaperProps={{
          sx: { width: 1, maxWidth: 420 },
        }}
      >
        {renderHead}

        <Divider />

        {isEmpty && renderEmpty}

        {isLoading ? renderLoading : renderList}

        {/* <Box sx={{ p: 1 }}>
          <Button fullWidth size="large">
            View All
          </Button>
        </Box> */}
      </Drawer>
    </>
  );
}
