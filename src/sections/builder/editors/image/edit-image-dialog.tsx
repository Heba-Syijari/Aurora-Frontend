import { DialogActions, DialogContent, Stack, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useGenerateImage } from 'src/api/content';
import { useUploadImage } from 'src/api/upload/use-upload-image';
import { FormGroup } from 'src/components/custom/form-group';
import { BaseLoadingButton } from 'src/components/styled/button';
import { Upload } from 'src/components/upload';
import { ImageData } from '../../types';
import BaseEditDialog from '../base-edit-dialog';
import GeneratedImagesList from './generated-images-list';

interface EditImageDialogProps {
  open: boolean;
  defaultValue: ImageData;
  onCloseClicked: () => void;
  onSave: (value: ImageData) => void;
}

export default function EditImageDialog({
  open,
  defaultValue,
  onCloseClicked,
  onSave,
}: EditImageDialogProps) {
  const [image, setImage] = useState(defaultValue.url);
  const [uploadedFile, setUploadedFile] = useState<any>(null);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [sizeError, setSizeError] = useState<string>('');

  const { generateImage, isLoading: generateImageLoading } = useGenerateImage();
  const { uploadImage, uploadImageURL, isLoading: uploadImageLoading } = useUploadImage();

  const isLoading = generateImageLoading || uploadImageLoading;

  const handleGenerate = async () => {
    try {
      const generatedImage = await generateImage(defaultValue.alt);
      setGeneratedImages((prev) => [...prev, generatedImage]);
    } catch (err) {
      console.log({ err });
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      setSizeError('');

      onCloseClicked();
    }
  };

  const handleDrop = useCallback((acceptedFiles: File[]) => {
    setSizeError('');
    const file = acceptedFiles[0];

    // console.log(file.size);
    if (file.size > 2000000) {
      setSizeError('The uploaded image is too large. Maximum allowed size: 2MB');
    } else {
      setSizeError('');
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        console.log({ newFile });
        // if()
        setUploadedFile(newFile);
      }
    }
  }, []);

  const handleSave = async () => {
    if (uploadedFile) {
      const { fileURL } = await uploadImage(uploadedFile);
      onSave({ url: fileURL, alt: defaultValue.alt });
    } else if (image !== defaultValue.url) {
      const { fileURL } = await uploadImageURL(image);
      onSave({ url: fileURL, alt: defaultValue.alt });
    } else {
      onSave({ ...defaultValue });
    }
  };

  useEffect(() => {
    if (!open) {
      setImage(defaultValue.url);
      setUploadedFile(null);
      setGeneratedImages([]);
    }
  }, [open, defaultValue]);

  return (
    <BaseEditDialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      scroll="body"
      dialogTitle="Edit image"
    >
      <DialogContent>
        <Stack spacing={2} sx={{ pt: 2 }}>
          <FormGroup label="Upload Image">
            <Upload
              file={uploadedFile}
              onDrop={handleDrop}
              accept={{ 'image/*': [] }}
              disabled={isLoading}
              placeholderVariant="custom"
            />
          </FormGroup>

          {generatedImages.length > 0 && (
            <GeneratedImagesList
              items={generatedImages}
              onItemSelect={setImage}
              selectedItem={image}
            />
          )}
        </Stack>
      </DialogContent>
      <Typography
        variant="body2"
        fontWeight={100}
        color="red"
        maxWidth={720}
        sx={{
          textTransform: 'capitalize',
          textAlign: 'center',
          p: 2,
        }}
      >
        {sizeError}
      </Typography>
      <DialogActions>
        <BaseLoadingButton
          variant="outlined"
          onClick={handleGenerate}
          disabled={isLoading}
          loading={generateImageLoading}
        >
          Generate
          {generatedImages.length > 0 ? ' more' : ''}
        </BaseLoadingButton>
        <BaseLoadingButton
          color="primary"
          variant="contained"
          onClick={handleSave}
          disabled={isLoading}
          loading={uploadImageLoading}
        >
          Save
        </BaseLoadingButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
