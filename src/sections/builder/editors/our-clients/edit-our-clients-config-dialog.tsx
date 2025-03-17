import { yupResolver } from '@hookform/resolvers/yup';
import { Box, DialogActions, DialogContent, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useUploadImage } from 'src/api/upload/use-upload-image';
import FormProvider, {
  RHFDynamicMultipleTextFields,
  RHFTextField,
  RHFUpload,
} from 'src/components/hook-form';
import { BaseButton } from 'src/components/styled/button';
import { useFileDropHandler } from 'src/hooks/use-file-drop-handler';
import * as Yup from 'yup';
import { OurClientsConfig } from '../../components/our-clients/types';
import BaseEditDialog from '../base-edit-dialog';

interface Props {
  defaultValue: OurClientsConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (value: OurClientsConfig) => void;
}

export function EditOurClientsConfigDialog({ defaultValue, open, onCloseClicked, onSave }: Props) {
  const { uploadImage, isLoading } = useUploadImage();
  const schema = Yup.object().shape({
    clients: Yup.array()
      .of(
        Yup.object()
          .shape({
            link: Yup.string().required('This field is required'),
            image: Yup.string().required('This field is required'),
          })
          .required()
      )
      .min(1)
      .required(),
  });

  const defaultValues = { ...defaultValue };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const { handleSubmit, reset, setValue } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      onSave(data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleClose = () => {
    onCloseClicked();
    reset();
  };

  const handleDrop = useFileDropHandler<OurClientsConfig>(uploadImage, setValue, isLoading);

  return (
    <BaseEditDialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      scroll="body"
      dialogTitle="Edit Our Clients"
    >
      <DialogContent>
        <FormProvider id="edit-clients-config-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2} sx={{ py: 2 }}>
            <Box sx={{ pt: 2 }}>
              <RHFDynamicMultipleTextFields
                name="clients"
                defaultValuesForNewField={{ link: '', image: '' }}
                renderField={({ fieldNamePrefix, index }) => (
                  <Stack spacing={2}>
                    <RHFUpload
                      name={`${fieldNamePrefix}.image`}
                      // maxSize={3145728}
                      onDelete={() =>
                        setValue(`${fieldNamePrefix}.image` as `clients.${number}.image`, '', {
                          shouldValidate: true,
                        })
                      }
                      onDrop={(value) =>
                        handleDrop(value, `${fieldNamePrefix}.image` as `clients.${number}.image`)
                      }
                      isLoading={isLoading}
                      thumbnail
                      onUpload={() => console.info('ON UPLOAD')}
                    />
                    <RHFTextField
                      label={`Link ${index + 1}`}
                      name={`${fieldNamePrefix}.link`}
                      multiline
                      rows={3}
                    />
                  </Stack>
                )}
                numberOfStaticFields={1}
              />
            </Box>
          </Stack>
        </FormProvider>
      </DialogContent>

      <DialogActions>
        <BaseButton
          color="primary"
          variant="contained"
          type="submit"
          form="edit-clients-config-form"
        >
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
