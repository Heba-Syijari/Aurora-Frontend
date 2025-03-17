import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import { RHFDynamicMultipleTextFields, RHFTextField } from 'src/components/hook-form';
import FormProvider from 'src/components/hook-form/form-provider';
import { AboutComponentName, AboutFiveConfig } from 'src/sections/builder/components/about/types';
import * as Yup from 'yup';
import { ColorBox } from '../../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../../common/colors';
import { RHFColorsGroup } from '../../common/styled';
// eslint-disable-next-line import/no-cycle

export interface EditAboutFiveConfigProps {
  defaultValue: AboutFiveConfig;
  onSave: (value: AboutFiveConfig) => void;
  theme: Theme;
  onCloseClicked: () => void;
  name: AboutComponentName;
}

export default function aboutEditConfig({
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
  name,
}: EditAboutFiveConfigProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    textColor: Yup.string().required('This field is required'),
    items: Yup.array()
      .of(
        Yup.object().shape({
          text: Yup.string().required('This field is required'),
        })
      )
      .min(1, 'At least one feature member is required')
      .required('Discription are required'),
  });

  const defaultValues = { ...defaultValue };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const methods = useForm({ resolver: yupResolver<AboutFiveConfig>(schema), defaultValues });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      onSave(data);
      onCloseClicked();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider id="edit-about-config-form" methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2} sx={{ py: 2 }}>
        <FormGroup label="Text color">
          <RHFColorsGroup
            name="textColor"
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
            // numberOfStaticFields={name === FeatureComponentName.FEATURE_FOUR ? 4 : 1}
            numberOfStaticFields={1}
            defaultValuesForNewField={{
              text: '',
            }}
            renderField={({ fieldNamePrefix, index }) => (
              <Stack spacing={2}>
                <RHFTextField
                  label={`Text ${index + 1}`}
                  name={`${fieldNamePrefix}.text`}
                  multiline
                  rows={3}
                />
              </Stack>
            )}
          />
        </Box>
      </Stack>
    </FormProvider>
  );
}
