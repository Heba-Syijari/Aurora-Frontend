import { Stack, Box, Card, IconButton, MenuItem, Typography } from '@mui/material';
// routes
import { useRouter } from 'src/routes/hook';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// utils
import { fDate } from 'src/utils/format-time';
// components
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import Iconify from 'src/components/iconify/iconify';
import { IPost } from 'src/types/blog';
import { paths } from 'src/routes/paths';

type Props = {
  post: IPost;
  onDeleteClick: () => void;
  projectId: string;
};

export default function PostItem({ post, onDeleteClick, projectId }: Props) {
  const popover = usePopover();

  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const menus = [
    {
      label: 'Edit',
      icon: <Iconify icon="ri:edit-line" />,
      onClick: () => {
        router.push(paths.project(projectId).content.blogEdit(post.id));
      },
    },
    {
      label: 'Delete',
      icon: <Iconify icon="ri:delete-bin-6-line" />,
      onClick: onDeleteClick,
    },
  ];

  return (
    <>
      <Stack component={Card} direction="row" justifyContent="space-between">
        {mdUp && (
          <Box sx={{ width: 180, height: 240, position: 'relative', flexShrink: 0, p: 1 }}>
            <Image alt={post.title} src={post.imagePath} sx={{ height: 1, borderRadius: 1.5 }} />
          </Box>
        )}

        <Stack sx={{ p: (theme) => theme.spacing(3, 3, 2, 3) }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
            <Box component="span" sx={{ typography: 'caption', color: 'text.disabled' }}>
              {fDate(post.createdAt)}
            </Box>

            <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
              <Iconify icon="eva:more-horizontal-fill" />
            </IconButton>
          </Stack>

          <Stack spacing={1} flexGrow={1}>
            <TextMaxLine variant="subtitle2" line={2}>
              {post.title}
            </TextMaxLine>

            <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
              {post.description}
            </TextMaxLine>
          </Stack>
        </Stack>
      </Stack>

      <CustomPopover open={popover.open} onClose={popover.onClose} onClick={popover.onClose}>
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
