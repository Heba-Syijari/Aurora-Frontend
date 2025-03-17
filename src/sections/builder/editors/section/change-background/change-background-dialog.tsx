import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, DialogContent, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider from 'src/components/hook-form';
import { BaseButton } from 'src/components/styled/button';
import * as Yup from 'yup';
import BaseEditDialog from '../../base-edit-dialog';
import { ColorBox } from '../../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../../common/colors';
import { RHFColorsGroup } from '../../common/styled';

type DefaultValueType = {
  backgroundColor: string | undefined;
  backgroundImage: string | undefined;
};

interface ChangeBackgroundDialogProps {
  defaultValue: DefaultValueType;
  open: boolean;
  onClose: () => void;
  onSave: (value: DefaultValueType) => void;
}

export default function ChangeBackgroundDialog({
  open,
  defaultValue,
  onClose,
  onSave,
}: ChangeBackgroundDialogProps) {
  const theme = useTheme();

  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    backgroundColor: Yup.string(),
    backgroundImage: Yup.string(),
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
    onClose();
    reset();
  };

  return (
    <BaseEditDialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      scroll="body"
      dialogTitle="Change background"
    >
      <DialogContent>
        <FormProvider id="change-background-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2} sx={{ py: 2 }}>
            <FormGroup label="Background color">
              <RHFColorsGroup
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
        <BaseButton color="primary" variant="contained" type="submit" form="change-background-form">
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
