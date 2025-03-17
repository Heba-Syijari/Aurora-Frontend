import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { ConfirmDialog } from 'src/components/dialog';
import Iconify from 'src/components/iconify/iconify';
import { BaseButton } from 'src/components/styled/button';
import { useBoolean } from 'src/hooks/use-boolean';
import { DeleteImage } from 'src/layouts/_common';
import { PartialBy } from 'src/types';
import { IMedia, MediaType } from 'src/types/media';
import AddEditMediaDialog from './add-edit-media-dialog';
import MediaItem from './media-item';

type Props = {
  type: MediaType;
  items: IMedia[];
  handleMediaDelete: (id: number) => Promise<void>;
  handleMediaSubmit: (media: PartialBy<IMedia, 'id'>) => Promise<void>;
};

export default function MediaList({ type, items, handleMediaDelete, handleMediaSubmit }: Props) {
  const typeText = type.toLowerCase();

  const [selectedMedia, setSelectedMedia] = useState<IMedia>();

  const addEditMediaDialogOpen = useBoolean();
  const deleteMediaDialogOpen = useBoolean();

  const handleAddEditMediaClose = () => {
    addEditMediaDialogOpen.onFalse();
    setSelectedMedia(undefined);
  };

  const handleDeleteMediaClose = () => {
    deleteMediaDialogOpen.onFalse();
    setSelectedMedia(undefined);
  };

  const handleConfirmDelete = async () => {
    if (!selectedMedia) return;

    await handleMediaDelete(selectedMedia.id);

    handleDeleteMediaClose();
  };

  const renderList = (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
    >
      {items.map((item) => (
        <MediaItem
          key={item.id}
          media={item}
          onEditClick={() => {
            addEditMediaDialogOpen.onTrue();
            setSelectedMedia({ ...item });
          }}
          onDeleteClick={() => {
            deleteMediaDialogOpen.onTrue();
            setSelectedMedia({ ...item });
          }}
        />
      ))}
    </Box>
  );

  const renderNoMedia = (
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
        <Iconify icon="ri:video-line" width={40} />
      </Box>
      <Typography color="text.secondary" textAlign="center" fontSize="1.25rem">
        You do not have any {typeText}s yet, click on add new to start adding {typeText}s
      </Typography>
    </Stack>
  );

  return (
    <>
      <Stack spacing={3}>
        <BaseButton
          color="primary"
          variant="contained"
          onClick={addEditMediaDialogOpen.onTrue}
          sx={{ alignSelf: 'flex-end' }}
          startIcon={<Iconify icon="mdi:plus" />}
        >
          Add {typeText}
        </BaseButton>
        {items.length > 0 ? renderList : renderNoMedia}
      </Stack>

      <AddEditMediaDialog
        open={addEditMediaDialogOpen.value}
        onClose={handleAddEditMediaClose}
        media={selectedMedia}
        type={type}
        onMediaSubmit={handleMediaSubmit}
      />

      <ConfirmDialog
        image={<DeleteImage />}
        title={`Delete ${typeText}`}
        description={`Do you really want to delete this ${typeText}?`}
        open={deleteMediaDialogOpen.value}
        onClose={deleteMediaDialogOpen.onFalse}
        onConfirm={handleConfirmDelete}
        confirmColor="error"
      />
    </>
  );
}
