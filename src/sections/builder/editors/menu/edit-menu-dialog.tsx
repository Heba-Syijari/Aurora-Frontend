import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, DialogContent, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider from 'src/components/hook-form';
import { BaseButton } from 'src/components/styled/button';
import * as Yup from 'yup';

import { MenusConfig } from '../../components/footer/types';
import BaseEditDialog from '../base-edit-dialog';
import { ColorBox } from '../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../common/colors';
import { RHFColorsGroup } from '../common/styled';

interface EditMenuDialogProps {
  defaultValue: MenusConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (value: MenusConfig) => void;
}

export default function EditMenuDialog({
  open,
  defaultValue,
  onCloseClicked,
  onSave,
}: EditMenuDialogProps) {
  const theme = useTheme();

  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    headingColor: Yup.string().required('The color is required'),
    childrenColor: Yup.string().required('The color is required'),
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
      dialogTitle="Edit Socilas"
    >
      <DialogContent>
        <FormProvider id="edit-menu-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={3} sx={{ py: 2 }}>
            <FormGroup label="Heading color" labelFor="headingColor">
              <RHFColorsGroup
                id="headingColor"
                name="headingColor"
                row
                options={paletteColors.map((color) => ({
                  value: color,
                  label: <ColorBox color={paletteColorsMap[color]} />,
                }))}
              />
            </FormGroup>
            <FormGroup label="Children color" labelFor="childrenColor">
              <RHFColorsGroup
                id="childrenColor"
                name="childrenColor"
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
        <BaseButton color="primary" variant="contained" type="submit" form="edit-menu-form">
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
