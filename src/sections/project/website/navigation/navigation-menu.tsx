import { Box, Button, Stack, Typography } from '@mui/material';
import React, { ForwardedRef, useState } from 'react';
import { ConfirmDialog } from 'src/components/dialog';
import Iconify from 'src/components/iconify/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { DeleteImage } from 'src/layouts/_common';
import { IMenu } from 'src/types/menu';
import AddEditMenuDialog from './add-edit-menu-dialog';
import { MenusList } from './menus-list';

type Props = {
  menus: IMenu[];
  onMenuDelete: (id: number) => Promise<void>;
  onMenuSubmit: () => Promise<void>;
};

const NavigationMenu = (
  { menus, onMenuDelete, onMenuSubmit }: Props,
  addMenuButtonRef: ForwardedRef<HTMLButtonElement>
) => {
  const [selectedMenu, setSelectedMenu] = useState<IMenu>();

  const addEditMenuDialogOpen = useBoolean();
  const deleteMenuDialogOpen = useBoolean();

  const handleAddEditMenuClose = () => {
    addEditMenuDialogOpen.onFalse();
    setSelectedMenu(undefined);
  };

  const handleDeleteMenuClose = () => {
    deleteMenuDialogOpen.onFalse();
    setSelectedMenu(undefined);
  };

  const handleConfirmDelete = async () => {
    if (!selectedMenu) return;

    await onMenuDelete(selectedMenu.id);

    handleDeleteMenuClose();
  };

  const renderNoMenus = (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ maxWidth: 450, m: 'auto' }}
    >
      <Box
        sx={{
          width: 72,
          height: 72,
          bgcolor: 'background.neutral',
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          color: 'text.disabled',
        }}
      >
        <Iconify icon="ri:menu-line" width={40} />
      </Box>
      <Typography color="text.secondary" textAlign="center" fontSize="1.25rem">
        You have no menus yet, click on Add menu button to start adding menus
      </Typography>
    </Stack>
  );

  const renderMenus = (
    <MenusList
      menus={menus.filter(({ parentId }) => !parentId)}
      onEdit={(menu) => {
        addEditMenuDialogOpen.onTrue();
        setSelectedMenu({ ...menu });
      }}
      onDelete={(menu) => {
        deleteMenuDialogOpen.onTrue();
        setSelectedMenu({ ...menu });
      }}
    />
  );

  return (
    <>
      <Button
        ref={addMenuButtonRef}
        onClick={addEditMenuDialogOpen.onTrue}
        sx={{ display: 'none' }}
      />

      {menus.length > 0 ? renderMenus : renderNoMenus}

      <AddEditMenuDialog
        open={addEditMenuDialogOpen.value}
        onClose={handleAddEditMenuClose}
        menu={selectedMenu}
        menus={menus}
        onMenuSubmit={onMenuSubmit}
      />

      <ConfirmDialog
        image={<DeleteImage />}
        open={deleteMenuDialogOpen.value}
        onClose={handleDeleteMenuClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Delete"
        description="Do you really want to delete this menu?"
        confirmColor="error"
      />
    </>
  );
};

export default React.forwardRef(NavigationMenu);
