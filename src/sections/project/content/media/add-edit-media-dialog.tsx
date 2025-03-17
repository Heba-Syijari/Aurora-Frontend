import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify/iconify';
import { BaseButton, BaseLoadingButton } from 'src/components/styled/button';
import { PartialBy } from 'src/types';
import { IMedia, MediaType } from 'src/types/media';
import * as Yup from 'yup';

type Props = {
  open: boolean;
  onClose: () => void;
  onMediaSubmit: (media: PartialBy<IMedia, 'id'>) => Promise<void>;
  type: MediaType;
  media?: IMedia;
};

function getDefaultValues(media?: IMedia) {
  return {
    title: media?.title || '',
    url: media?.path || '',
  };
}

export default function AddEditMediaDialog({ open, onClose, onMediaSubmit, media, type }: Props) {
  const typeText = type.toLowerCase();

  const schema = Yup.object().shape({
    title: Yup.string().required('The title is required'),
    url: Yup.string().url('The url field should be a valid url').required('The url is required'),
  });

  const defaultValues = getDefaultValues(media);

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await onMediaSubmit({ title: data.title, path: data.url, type, id: media?.id });

      handleClose();
    } catch (error) {
      console.error(error);
    }
  });

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      reset(getDefaultValues());
    }
  };

  useEffect(() => {
    reset(getDefaultValues(media));
  }, [media, reset]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography component="span" variant="h5">
            {`${media ? 'Edit' : 'Add new'} ${typeText}`}
          </Typography>

          <IconButton onClick={handleClose} disabled={isSubmitting} sx={{ p: 0 }}>
            <Iconify icon="material-symbols:close" />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ pt: 2 }}>
          <FormProvider id="add-edit-media-form" methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2}>
              <FormGroup labelFor="title" label="Title">
                <RHFTextField id="title" name="title" placeholder="Title" disabled={isSubmitting} />
              </FormGroup>

              <FormGroup labelFor="url" label="URL">
                <RHFTextField id="url" name="url" placeholder="URL" disabled={isSubmitting} />
              </FormGroup>
            </Stack>
          </FormProvider>
        </Box>
      </DialogContent>

      <DialogActions>
        <BaseButton variant="outlined" onClick={handleClose} disabled={isSubmitting}>
          Cancel
        </BaseButton>

        <BaseLoadingButton
          color="primary"
          variant="contained"
          disabled={isSubmitting}
          loading={isSubmitting}
          form="add-edit-media-form"
          type="submit"
        >
          {media ? 'Edit' : 'Add'}
        </BaseLoadingButton>
      </DialogActions>
    </Dialog>
  );
}
