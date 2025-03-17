import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, DialogContent, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { icons } from 'src/assets/data';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFAutocomplete, RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify/iconify';
import { BaseButton } from 'src/components/styled/button';
import * as Yup from 'yup';
import { ButtonData } from '../../types';
import BaseEditDialog from '../base-edit-dialog';
import { ColorBox } from '../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../common/colors';
import { RHFColorsGroup } from '../common/styled';
import { OptionType } from '../features/edit-feature-config-factory/edit-factory';

interface EditButtonDialogProps {
  defaultValue: ButtonData;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (value: ButtonData) => void;
}

export default function EditButtonDialog({
  open,
  defaultValue,
  onCloseClicked,
  onSave,
}: EditButtonDialogProps) {
  const theme = useTheme();

  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    text: Yup.string().required('The text is required'),
    linkTo: Yup.string().default(''),
    color: Yup.string().required('The color is required'),
    backgroundColor: Yup.string().required('The background color is required'),
    //  hsn edits : add icon to the dialog
    icon: Yup.string().default(''),
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

  return (
    <BaseEditDialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      scroll="body"
      dialogTitle="Edit button"
    >
      <DialogContent>
        <FormProvider id="edit-button-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2} sx={{ py: 2 }}>
            <FormGroup label="Text" labelFor="text">
              <RHFTextField id="text" name="text" fullWidth variant="outlined" />
            </FormGroup>

            <FormGroup label="Link to" labelFor="linkTo">
              <RHFTextField
                id="linkTo"
                name="linkTo"
                fullWidth
                variant="outlined"
                placeholder=".e.g https://spreadislam.ai"
              />
            </FormGroup>

            {/* hsn Edits */}
            {/* add AutoComplete to the Icon inside Button  */}
            <RHFAutocomplete
              name="icon" // as the type
              label="Icon"
              options={icons}
              ListboxProps={{
                sx: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: 1,
                  padding: 1,
                },
              }}
              onChange={(_, option) => {
                setValue(
                  'icon' as 'icon',
                  typeof option === 'string' ? option : (option as OptionType)?.value
                );
              }}
              getOptionLabel={(option: OptionType | string) => {
                const label =
                  typeof option === 'string'
                    ? icons.find((item) => item.value === option)?.label || icons[0].label
                    : (option as OptionType).label;
                return label;
              }}
              isOptionEqualToValue={(option, value) => option.value === value.value}
              renderOption={(props, option) => (
                <li {...props} key={option.value}>
                  <Stack key={option.value} alignItems="center" justifyContent="center" width={1}>
                    <Iconify icon={option.value} width={24} height={24} />
                  </Stack>
                </li>
              )}
            />
            {/* add AutoComplete to the Icon inside Button  */}
            {/* hsn Edits */}

            <FormGroup label="Color" labelFor="color">
              <RHFColorsGroup
                id="color"
                name="color"
                row
                options={paletteColors.map((color) => ({
                  value: color,
                  label: <ColorBox color={paletteColorsMap[color]} />,
                }))}
              />
            </FormGroup>

            <FormGroup label="Background color" labelFor="backgroundColor">
              <RHFColorsGroup
                id="backgroundColor"
                name="backgroundColor"
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
        <BaseButton color="primary" variant="contained" type="submit" form="edit-button-form">
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
