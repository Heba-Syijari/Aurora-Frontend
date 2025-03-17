import { yupResolver } from '@hookform/resolvers/yup';
import { Box, DialogActions, DialogContent, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useUploadImage } from 'src/api/upload/use-upload-image';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, {
  RHFDynamicMultipleTextFields,
  RHFTextField,
  RHFUpload,
} from 'src/components/hook-form';
import { BaseButton } from 'src/components/styled/button';
import { useFileDropHandler } from 'src/hooks/use-file-drop-handler';
import * as Yup from 'yup';
import { GallerySevenConfig } from '../../components/gallery/types';
import BaseEditDialog from '../base-edit-dialog';
import { ColorBox } from '../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../common/colors';
import { RHFColorsGroup } from '../common/styled';

interface Props {
  defaultValue: GallerySevenConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (value: GallerySevenConfig) => void;
}

export function EditGallerySevenConfigDialog({
  defaultValue,
  open,
  onCloseClicked,
  onSave,
}: Props) {
  const theme = useTheme();

  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const { uploadImage, isLoading } = useUploadImage();

  const schema = Yup.object().shape({
    titleTextColor: Yup.string().required('This field is required'),
    slides: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required('This field is required'),
          // description: Yup.string().required('This field is required'),
          // subtitle: Yup.string().required('This field is required'),
          image: Yup.string().nullable().required('This field is required'),
        })
      )
      .min(4, 'At least one slide member is required')
      .required('Slides members are required'),
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

  const handleDrop = useFileDropHandler<GallerySevenConfig>(uploadImage, setValue, isLoading);

  return (
    <BaseEditDialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      scroll="body"
      dialogTitle="Edit Gallery "
    >
      <DialogContent>
        <FormProvider id="edit-gallery-config-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2} sx={{ py: 2 }}>
            <FormGroup label="Gallery title color">
              <RHFColorsGroup
                name="titleTextColor"
                row
                options={paletteColors.map((color) => ({
                  value: color,
                  label: <ColorBox color={paletteColorsMap[color]} />,
                }))}
                sx={{ gap: theme.spacing(2) }}
              />
            </FormGroup>

            <Box sx={{ pt: 2 }}>
              <RHFDynamicMultipleTextFields
                name="slides"
                defaultValuesForNewField={{
                  title: '',
                  image: '',
                }}
                renderField={({ fieldNamePrefix, index }) => (
                  <Stack spacing={2}>
                    <RHFTextField label={`Title ${index + 1}`} name={`${fieldNamePrefix}.title`} />
                    <RHFUpload
                      name={`${fieldNamePrefix}.image`}
                      // maxSize={3145728}
                      onDelete={() =>
                        setValue(`${fieldNamePrefix}.image` as `slides.${number}.image`, '', {
                          shouldValidate: true,
                        })
                      }
                      onDrop={(value) =>
                        handleDrop(value, `${fieldNamePrefix}.image` as `slides.${number}.image`)
                      }
                      thumbnail
                      onUpload={() => console.info('ON UPLOAD')}
                    />
                  </Stack>
                )}
                numberOfStaticFields={3}
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
          form="edit-gallery-config-form"
        >
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
