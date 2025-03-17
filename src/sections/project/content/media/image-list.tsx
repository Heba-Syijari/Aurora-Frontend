import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { ConfirmDialog } from 'src/components/dialog';
import Iconify from 'src/components/iconify/iconify';
import { BaseButton } from 'src/components/styled/button';
import { useBoolean } from 'src/hooks/use-boolean';
import { DeleteImage } from 'src/layouts/_common';
import EditImageDialog from 'src/sections/builder/editors/image/edit-image-dialog';
import { ImageData } from 'src/sections/builder/types';
import { PartialBy } from 'src/types';
import { IMedia } from 'src/types/media';
import ImageItem from './image-item';

type Props = {
  images: IMedia[];
  handleMediaDelete: (id: number) => Promise<void>;
  handleMediaSubmit: (media: PartialBy<IMedia, 'id'>) => Promise<void>;
};

export default function ImageList({ images, handleMediaDelete, handleMediaSubmit }: Props) {
  const [selectedImage, setSelectedImage] = useState<IMedia>();

  const addImageDialogOpen = useBoolean();

  const deleteImageDialogOpen = useBoolean();

  const handleDeleteImageClose = () => {
    deleteImageDialogOpen.onFalse();
    setSelectedImage(undefined);
  };

  const handleConfirmDelete = async () => {
    if (!selectedImage) return;

    await handleMediaDelete(selectedImage.id);

    handleDeleteImageClose();
  };

  const handleAddImage = async (data: ImageData) => {
    try {
      await handleMediaSubmit({
        title: 'image title',
        path: data.url,
        type: 'VIDEO', // TODO: this should be replaced with IMAGE
        //  type: 'IMAGE'
      });

      addImageDialogOpen.onFalse();
    } catch (error) {
      console.error(error);
    }
  };

  const renderList = (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(4, 1fr)',
        lg: 'repeat(5, 1fr)',
      }}
    >
      {images.map((image) => (
        <ImageItem
          key={image.id}
          image={image}
          onDeleteClick={() => {
            deleteImageDialogOpen.onTrue();
            setSelectedImage({ ...image });
          }}
        />
      ))}
    </Box>
  );

  const renderNoImage = (
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
        <Iconify icon="ri:image-fill" width={32} />
      </Box>
      <Typography color="text.secondary" textAlign="center" fontSize="1.25rem">
        You do not have images yet, click on add image to start adding images
      </Typography>
    </Stack>
  );

  return (
    <>
      <Stack spacing={3}>
        <BaseButton
          color="primary"
          variant="contained"
          onClick={addImageDialogOpen.onTrue}
          startIcon={<Iconify icon="mdi:plus" />}
          sx={{ alignSelf: 'flex-end' }}
        >
          Add image
        </BaseButton>
        {images.length > 0 ? renderList : renderNoImage}
      </Stack>

      <EditImageDialog
        defaultValue={{ alt: 'generate an image for an islamic website', url: '' }}
        onCloseClicked={addImageDialogOpen.onFalse}
        open={addImageDialogOpen.value}
        onSave={handleAddImage}
      />

      <ConfirmDialog
        image={<DeleteImage />}
        title="Delete image"
        description="Do you really want to delete this image?"
        open={deleteImageDialogOpen.value}
        onClose={deleteImageDialogOpen.onFalse}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
