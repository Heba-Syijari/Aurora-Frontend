import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, DialogContent, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFSlider } from 'src/components/hook-form';
import { BaseButton } from 'src/components/styled/button';
import { IPostConfig } from 'src/sections/builder/components/blogs/types';
import * as Yup from 'yup';
import BaseEditDialog from '../../base-edit-dialog';
import { ColorBox } from '../../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../../common/colors';
import { RHFColorsGroup } from '../../common/styled';

interface EditPostConfigDialogProps {
  defaultValue: IPostConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (value: IPostConfig) => void;
}

export function EditPostConfigDialog({
  defaultValue,
  open,
  onCloseClicked,
  onSave,
}: EditPostConfigDialogProps) {
  const theme = useTheme();

  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    titleTextColor: Yup.string().required('This field is required'),
    descriptionTextColor: Yup.string().required('This field is required'),
    itemsCount: Yup.number().required('This field is required'),
    itemsPerRowCount: Yup.number().required('This field is required'),
  });

  const defaultValues = { ...defaultValue };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const { handleSubmit, reset } = methods;

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

  return (
    <BaseEditDialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      scroll="body"
      dialogTitle="Edit post config"
    >
      <DialogContent>
        <FormProvider id="edit-post-config-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2} sx={{ py: 2 }}>
            <FormGroup label="Post title color">
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

            <FormGroup label="Post description color">
              <RHFColorsGroup
                name="descriptionTextColor"
                row
                options={paletteColors.map((color) => ({
                  value: color,
                  label: <ColorBox color={paletteColorsMap[color]} />,
                }))}
                sx={{ gap: theme.spacing(2) }}
              />
            </FormGroup>

            <FormGroup label="Max displayed posts">
              <RHFSlider
                name="itemsCount"
                step={1}
                marks
                min={2}
                max={4}
                size="medium"
                sx={{ color: '#1976d2' }}
                color="secondary"
              />
            </FormGroup>

            <FormGroup label="Posts per row count">
              <RHFSlider
                name="itemsPerRowCount"
                step={1}
                marks
                min={2}
                max={4}
                size="medium"
                sx={{ color: '#1976d2' }}
              />
            </FormGroup>
          </Stack>
        </FormProvider>
      </DialogContent>

      <DialogActions>
        <BaseButton color="primary" variant="contained" type="submit" form="edit-post-config-form">
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
