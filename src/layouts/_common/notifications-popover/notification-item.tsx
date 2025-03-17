// @mui
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
// utils
import { fToNow } from 'src/utils/format-time';
// components
import { Typography } from '@mui/material';
import Logo from 'src/components/logo';
import TextMaxLine from 'src/components/text-max-line/text-max-line';
import { INotification } from 'src/types/notification';

// ----------------------------------------------------------------------

type NotificationItemProps = {
  notification: INotification;
};

export default function NotificationItem({ notification }: NotificationItemProps) {
  const renderText = (
    <ListItemText
      disableTypography
      primary={reader(notification.title)}
      secondary={
        <Stack>
          <TextMaxLine variant="body2" sx={{ color: (theme) => theme.palette.grey[900] }}>
            {notification.description}
          </TextMaxLine>
          <Typography
            variant="caption"
            sx={{
              color: (theme) => theme.palette.primary.main,
            }}
          >
            {fToNow(notification.createdAt)}
          </Typography>
        </Stack>
      }
    />
  );

  const renderUnReadBadge = !notification.readAt && (
    <Box
      sx={{
        top: 26,
        width: 8,
        height: 8,
        right: 20,
        borderRadius: '50%',
        bgcolor: 'info.main',
        position: 'absolute',
      }}
    />
  );

  return (
    <ListItemButton
      disableRipple
      sx={{
        p: 2.5,
        alignItems: 'center',
        gap: 2,
        borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      {renderUnReadBadge}

      <Stack
        sx={{
          bgcolor: (theme) => theme.palette.background.secondary,
          height: 62,
          width: 62,
          borderRadius: '10px',
          flexGrow: 1,
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Logo />
      </Stack>
      <Stack
        sx={{
          maxWidth: 300,
        }}
      >
        {renderText}
      </Stack>
    </ListItemButton>
  );
}

// ----------------------------------------------------------------------

function reader(data: string) {
  return (
    <Typography variant="subtitle1">{data}</Typography>
    // <Box
    //   dangerouslySetInnerHTML={{ __html: data }}
    //   sx={{
    //     mb: 0.5,
    //     '& p': { typography: 'body2', m: 0 },
    //     '& a': { color: 'inherit', textDecoration: 'none' },
    //     '& strong': { typography: 'subtitle2' },
    //   }}
    // />
  );
}
