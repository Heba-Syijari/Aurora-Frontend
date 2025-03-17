import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  Stack,
} from '@mui/material';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify/iconify';
import { useSnackbar } from 'src/components/snackbar';
import { useUpdateAdamWidgetConfig } from 'src/api/plugin';
import { useProjectContext } from 'src/providers/project/project-context';
import { BaseButton, BaseLoadingButton } from 'src/components/styled/button';
import { IAdamWidgetConfig } from './types';

interface EditAdamWidgetConfigDialogProps {
  open: boolean;
  onCloseClicked: () => void;
  onSuccess: () => void;
  config: IAdamWidgetConfig;
}

export default function EditAdamWidgetConfigDialog({
  open,
  onCloseClicked,
  onSuccess,
  config,
}: EditAdamWidgetConfigDialogProps) {
  const { project } = useProjectContext();

  const { updateAdamWidgetConfig } = useUpdateAdamWidgetConfig();

  const { enqueueSnackbar } = useSnackbar();

  const schema = Yup.object().shape({
    primaryColor: Yup.string().required('The primary color is required'),
    secondaryColor: Yup.string().required('The secondary color is required'),
    fontSize: Yup.number()
      .required('The font size is required')
      .min(1, 'The font size should be a positive number'),
  });

  const defaultValues = {
    primaryColor: config.primaryColor || '',
    secondaryColor: config.secondaryColor || '',
    fontSize: +config.fontSize || 16,
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleClose = () => {
    if (!isSubmitting) {
      onCloseClicked();
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updateAdamWidgetConfig({
        fontSize: data.fontSize,
        primaryColor: data.primaryColor,
        secondaryColor: data.secondaryColor,
        projectId: project.id,
      });

      onSuccess();
      enqueueSnackbar('Update success!');
    } catch (error) {
      enqueueSnackbar({ variant: 'error', message: error.message });
      console.error({ error });
    }
  });

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Update Adam Widget Config</span>
          <IconButton onClick={handleClose}>
            <Iconify icon="material-symbols:close" />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <FormProvider id="adam-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2} sx={{ py: 1 }}>
            <RHFTextField name="primaryColor" label="Primary color" />
            <RHFTextField name="secondaryColor" label="Secondary color" />
            <RHFTextField
              name="fontSize"
              label="Font size"
              inputMode="numeric"
              type="number"
              InputProps={{
                endAdornment: <InputAdornment position="end">px</InputAdornment>,
                inputProps: { min: 1 },
              }}
            />
          </Stack>
        </FormProvider>
      </DialogContent>
      <DialogActions>
        <BaseButton variant="outlined" onClick={handleClose} disabled={isSubmitting}>
          Cancel
        </BaseButton>
        <BaseLoadingButton
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          loading={isSubmitting}
          type="submit"
          form="adam-form"
        >
          Update
        </BaseLoadingButton>
      </DialogActions>
    </Dialog>
  );
}
