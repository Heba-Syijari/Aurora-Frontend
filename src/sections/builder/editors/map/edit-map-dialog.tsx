import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, DialogContent, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { BaseButton } from 'src/components/styled/button';
import * as Yup from 'yup';
import { MapConfig } from '../../components/contact/types';
import BaseEditDialog from '../base-edit-dialog';
import { ColorBox } from '../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../common/colors';
import { RHFColorsGroup } from '../common/styled';

interface EditMapDialogProps {
  defaultValue: MapConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (value: MapConfig) => void;
}

export default function EditMapDialog({
  open,
  defaultValue,
  onCloseClicked,
  onSave,
}: EditMapDialogProps) {
  const theme = useTheme();

  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    markerPosition: Yup.array()
      .of(
        Yup.number()
          .typeError('Each position must be a number')
          .required('Position values are required')
      )
      .length(2)
      .required('Position values are required'),
    markerColor: Yup.string().required('The color is required'),
  });

  const defaultValues = { ...defaultValue };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const { handleSubmit, reset, formState } = methods;
  console.log(formState.errors);

  const onSubmit = handleSubmit(async (data) => {
    try {
      onSave(data as MapConfig);
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
      dialogTitle="Edit Socilas"
    >
      <DialogContent>
        <FormProvider id="edit-social-icon-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={3} sx={{ py: 2 }}>
            <Stack spacing={3} direction="row">
              <RHFTextField
                label="Marker Position : X "
                name="markerPosition[0]"
                multiline
                rows={1}
                type="number"
              />
              <RHFTextField
                label="Marker Position : Y "
                name="markerPosition[1]"
                multiline
                rows={1}
                type="number"
              />
            </Stack>
            <FormGroup label="Marker color" labelFor="Marker color">
              <RHFColorsGroup
                id="markerColor"
                name="markerColor"
                row
                options={paletteColors.map((color) => ({
                  value: color,
                  label: <ColorBox color={paletteColorsMap[color]} />,
                }))}
              />
            </FormGroup>
          </Stack>
        </FormProvider>
      </DialogContent>

      <DialogActions>
        <BaseButton color="primary" variant="contained" type="submit" form="edit-social-icon-form">
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
