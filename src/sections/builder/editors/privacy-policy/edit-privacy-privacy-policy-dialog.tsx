import { yupResolver } from '@hookform/resolvers/yup';
import { Box, DialogActions, DialogContent, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFDynamicMultipleTextFields, RHFTextField } from 'src/components/hook-form';
import { BaseButton } from 'src/components/styled/button';
import * as Yup from 'yup';
import { PrivacyPolicyConfig } from '../../components/privacy-policy/types';
import BaseEditDialog from '../base-edit-dialog';
import { ColorBox } from '../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../common/colors';
import { RHFColorsGroup } from '../common/styled';

interface Props {
  defaultValue: PrivacyPolicyConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (value: PrivacyPolicyConfig) => void;
}

export function EditPrivacyPolicyConfigDialog({
  defaultValue,
  open,
  onCloseClicked,
  onSave,
}: Props) {
  const theme = useTheme();

  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    titleTextColor: Yup.string().required('This field is required'),
    descriptionTextColor: Yup.string().required('This field is required'),
    items: Yup.array()
      .of(
        Yup.object()
          .shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
          })
          .required()
      )
      .min(1)
      .required(),
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
      maxWidth="sm"
      fullWidth
      scroll="body"
      dialogTitle="Edit FAQs"
    >
      <DialogContent>
        <FormProvider id="edit-privacy-policy-config-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2} sx={{ py: 2 }}>
            <FormGroup label="Privacy Policy title color">
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
            <FormGroup label="Privacy Policy description color">
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

            <Box sx={{ pt: 2 }}>
              <RHFDynamicMultipleTextFields
                name="items"
                defaultValuesForNewField={{ question: '', answer: '' }}
                renderField={({ fieldNamePrefix, index }) => (
                  <Stack spacing={2}>
                    <RHFTextField label={`Title ${index + 1}`} name={`${fieldNamePrefix}.title`} />
                    <RHFTextField
                      label={`Description ${index + 1}`}
                      name={`${fieldNamePrefix}.description`}
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
          form="edit-privacy-policy-config-form"
        >
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
