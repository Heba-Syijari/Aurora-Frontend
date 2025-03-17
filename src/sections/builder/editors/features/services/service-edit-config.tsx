import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import { RHFDynamicMultipleTextFields, RHFTextField } from 'src/components/hook-form';
import FormProvider from 'src/components/hook-form/form-provider';
import { ServicesConfig } from 'src/sections/builder/components/featuers/types';
import * as Yup from 'yup';
import { ColorBox } from '../../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../../common/colors';
import { RHFColorsGroup } from '../../common/styled';

export interface EditServicesConfigProps {
  defaultValue: ServicesConfig;
  onSave: (value: ServicesConfig) => void;
  theme: Theme;
  onCloseClicked: () => void;
}

export default function ServicesEditConfig({
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: EditServicesConfigProps) {
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    servicesColor: Yup.string().required('This field is required'),
    services: Yup.array()
      .of(Yup.string().required('This field is required'))
      .min(1, 'At least one team member is required')
      .required('Team members are required'),
  });

  const defaultValues = { ...defaultValue };

  const methods = useForm({ resolver: yupResolver<ServicesConfig>(schema), defaultValues });

  const { handleSubmit, watch } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      onSave(data);
      onCloseClicked();
    } catch (error) {
      console.error(error);
    }
  });
  console.log(watch());

  return (
    <FormProvider id="edit-Services-config-form" methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2} sx={{ py: 2 }}>
        <FormGroup label="Services color">
          <RHFColorsGroup
            name="servicesColor"
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
            name="services"
            defaultValuesForNewField=""
            renderField={({ fieldNamePrefix, index }) => (
              <Stack spacing={2}>
                <RHFTextField
                  label={`Service ${index + 1}`}
                  name={`${fieldNamePrefix}`}
                  multiline
                  defaultValue=""
                  rows={2}
                />
              </Stack>
            )}
            numberOfStaticFields={1}
          />
        </Box>
      </Stack>
    </FormProvider>
  );
}
