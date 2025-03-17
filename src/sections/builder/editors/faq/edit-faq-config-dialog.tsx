import { yupResolver } from '@hookform/resolvers/yup';
import { Box, DialogActions, DialogContent, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFDynamicMultipleTextFields, RHFTextField } from 'src/components/hook-form';
import { BaseButton } from 'src/components/styled/button';
import { FAQConfig } from 'src/sections/builder/components/faq/types';
import * as Yup from 'yup';
import BaseEditDialog from '../base-edit-dialog';
import { ColorBox } from '../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../common/colors';
import { RHFColorsGroup } from '../common/styled';

interface Props {
  defaultValue: FAQConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (value: FAQConfig) => void;
}

export function EditFAQConfigDialog({ defaultValue, open, onCloseClicked, onSave }: Props) {
  const theme = useTheme();

  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    questionTextColor: Yup.string().required('This field is required'),
    answerTextColor: Yup.string().required('This field is required'),
    items: Yup.array()
      .of(
        Yup.object()
          .shape({
            question: Yup.string().required(),
            answer: Yup.string().required(),
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
        <FormProvider id="edit-faq-config-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2} sx={{ py: 2 }}>
            <FormGroup label="FAQ question color">
              <RHFColorsGroup
                name="questionTextColor"
                row
                options={paletteColors.map((color) => ({
                  value: color,
                  label: <ColorBox color={paletteColorsMap[color]} />,
                }))}
                sx={{ gap: theme.spacing(2) }}
              />
            </FormGroup>

            <FormGroup label="FAQ answer color">
              <RHFColorsGroup
                name="answerTextColor"
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
                    <RHFTextField
                      label={`Question ${index + 1}`}
                      name={`${fieldNamePrefix}.question`}
                    />
                    <RHFTextField
                      label={`Answer ${index + 1}`}
                      name={`${fieldNamePrefix}.answer`}
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
        <BaseButton color="primary" variant="contained" type="submit" form="edit-faq-config-form">
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
