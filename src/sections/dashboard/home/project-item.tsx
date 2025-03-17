import { Avatar, Box, IconButton, MenuItem, Stack, Typography } from '@mui/material';
import { useCallback, useMemo } from 'react';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { ConfirmDialog } from 'src/components/dialog';
import Iconify from 'src/components/iconify/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { DeleteImage } from 'src/layouts/_common';

// ----------------------------------------

function getLogo(name: string, logo: string): string {
  return logo.startsWith('http') && name.length < logo.length ? name : logo;
}

// ----------------------------------------

type ProjectItemProps = {
  name: string;
  logo: string;
  onEditClick: VoidFunction;
  onViewClick: VoidFunction;
  onPublishClick: VoidFunction;
  onDeleteClick: () => Promise<void>;
  projectId: string;
  disabled?: boolean;
};

export function ProjectItem({
  name,
  logo,
  onDeleteClick,
  onEditClick,
  onViewClick,
  onPublishClick,
  projectId,
  disabled,
}: ProjectItemProps) {
  const deleteProjectDialogOpen = useBoolean();

  const popover = usePopover();

  const menus = useMemo(
    () => [
      {
        label: 'Go To Dashboard',
        icon: <Iconify icon="tdesign:app" />,
        onClick: onViewClick,
      },
      {
        label: 'Edit',
        icon: <Iconify icon="material-symbols:rebase-edit-outline-rounded" />,
        onClick: onEditClick,
      },
      {
        label: 'Delete',
        icon: <Iconify icon="ri:delete-bin-6-line" />,
        onClick: deleteProjectDialogOpen.onTrue,
      },
    ],
    [deleteProjectDialogOpen.onTrue, onEditClick, onViewClick]
  );

  const handleDelete = useCallback(async () => {
    await onDeleteClick();

    deleteProjectDialogOpen.onFalse();
  }, [deleteProjectDialogOpen, onDeleteClick]);

  return (
    <>
      <Stack spacing={2} alignItems="center" width={1}>
        <Box
          sx={{
            borderRadius: '20px',
            width: 1,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Avatar
            alt={logo}
            src={logo}
            variant="square"
            sx={{
              width: 1,
              height: 197,
              fontSize: 24,
              backgroundColor: (theme) => theme.palette.background.secondary,
              color: 'text.primary',
              textDecoration: 'none',
              '& img': { objectFit: 'scale-down!important', maxWidth: 100 },
            }}
          // component={RouterLink}
          // href={paths.project(projectId).root}
          >
            {getLogo(name, logo)}
          </Avatar>
          <IconButton
            color={popover.open ? 'inherit' : 'default'}
            onClick={popover.onOpen}
            sx={{
              position: 'absolute',
              top: 5,
              right: 5,
              color: (theme) => theme.palette.common.black,
              bgcolor: (theme) => theme.palette.background.paper,
            }}
            disabled={disabled}
          >
            <Iconify icon="eva:more-horizontal-fill" width={24} />
          </IconButton>
        </Box>
        <Typography variant="h6">{name}</Typography>
      </Stack>
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        onClick={popover.onClose}
        arrow="top-right"
      >
        {menus.map((menu, i) => (
          <MenuItem
            key={i}
            sx={{ color: i === 3 ? 'error.main' : 'common.black' }}
            onClick={menu.onClick}
            disabled={disabled}
          >
            {menu.icon}
            <Typography variant="body1" fontWeight={500}>
              {menu.label}
            </Typography>
          </MenuItem>
        ))}
      </CustomPopover>

      <ConfirmDialog
        image={<DeleteImage />}
        title="Delete Project"
        description="Do you really want to delete this project?"
        open={deleteProjectDialogOpen.value}
        onClose={deleteProjectDialogOpen.onFalse}
        onConfirm={handleDelete}
        confirmColor="error"
      />
    </>
  );
}
