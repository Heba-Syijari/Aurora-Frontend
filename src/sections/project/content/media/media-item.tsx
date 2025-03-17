import { Stack, Card, IconButton, MenuItem, Typography } from '@mui/material';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import Iconify from 'src/components/iconify/iconify';
import { IMedia } from 'src/types/media';

type Props = {
  media: IMedia;
  onDeleteClick: () => void;
  onEditClick: () => void;
};

export default function MediaItem({ media, onDeleteClick, onEditClick }: Props) {
  const popover = usePopover();

  const menus = [
    {
      label: 'Edit',
      icon: <Iconify icon="ri:edit-line" />,
      onClick: onEditClick,
    },
    {
      label: 'Delete',
      icon: <Iconify icon="ri:delete-bin-6-line" />,
      onClick: onDeleteClick,
    },
  ];

  return (
    <>
      <Stack
        component={Card}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ p: (theme) => theme.spacing(3, 3, 2, 3) }}
      >
        <Stack spacing={1} flexGrow={1} sx={{ width: 'calc(100% - 24px)' }}>
          <Typography variant="subtitle2">{media.title}</Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', wordWrap: 'break-word' }}>
            {media.path}
          </Typography>
        </Stack>

        <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </Stack>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        onClick={popover.onClose}
      >
        {menus.map((menu, i) => (
          <MenuItem key={i} onClick={menu.onClick}>
            {menu.icon}
            <Typography variant="body1" fontWeight={500}>
              {menu.label}
            </Typography>
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
