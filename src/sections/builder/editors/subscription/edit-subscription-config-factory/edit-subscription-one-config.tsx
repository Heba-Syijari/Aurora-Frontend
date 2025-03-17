import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFDynamicMultipleTextFields, RHFTextField } from 'src/components/hook-form';

import { SubscriptionOneConfig } from 'src/sections/builder/components/subscription/types';
import * as Yup from 'yup';
import { ColorBox } from '../../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../../common/colors';
import { RHFColorsGroup } from '../../common/styled';
// eslint-disable-next-line import/no-cycle

export interface EditSubscriptionOneConfigProps {
  defaultValue: SubscriptionOneConfig;
  onSave: (value: SubscriptionOneConfig) => void;
  theme: Theme;
  onCloseClicked: () => void;
}

export default function EditSubscriptionOneConfig({
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: EditSubscriptionOneConfigProps) {
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    titleTextColor: Yup.string().required('This field is required'),
    descriptionTextColor: Yup.string().required('This field is required'),
    priceTextColor: Yup.string().required('This field is required'),
    periodTextColor: Yup.string().required('This field is required'),
    featuresTextColor: Yup.string().required('This field is required'),
    subscriptions: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required('This field is required'),
          description: Yup.string().nullable().required('This field is required'),
          price: Yup.string().nullable().required('This field is required'),
          period: Yup.string().nullable().required('This field is required'),
          features: Yup.array()
            .of(
              Yup.string()
                .required('Each feature must be a string')
                .nullable()
                .required('This field is required')
            )
            .nullable()
            .required('This field is required'),
        })
      )
      .min(1, 'At least one Subscription member is required')
      .required('Subscription members are required'),
  });

  const defaultValues = { ...defaultValue };

  const methods = useForm({ resolver: yupResolver<SubscriptionOneConfig>(schema), defaultValues });

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
    <FormProvider id="edit-subscription-config-form" methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2} sx={{ py: 2 }}>
        <FormGroup label="Title color">
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

        <FormGroup label="Description color">
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

        <FormGroup label="Price Text Color">
          <RHFColorsGroup
            name="priceTextColor"
            row
            options={paletteColors.map((color) => ({
              value: color,
              label: <ColorBox color={paletteColorsMap[color]} />,
            }))}
            sx={{ gap: theme.spacing(2) }}
          />
        </FormGroup>

        <FormGroup label="Period Text Color">
          <RHFColorsGroup
            name="periodTextColor"
            row
            options={paletteColors.map((color) => ({
              value: color,
              label: <ColorBox color={paletteColorsMap[color]} />,
            }))}
            sx={{ gap: theme.spacing(2) }}
          />
        </FormGroup>

        <FormGroup label="Features Text Color">
          <RHFColorsGroup
            name="featuresTextColor"
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
            name="subscriptions"
            defaultValuesForNewField={{
              title: '',
              description: '',
              price: '',
              period: '',
              features: [''],
            }}
            renderField={({ fieldNamePrefix, index }) => (
              <Stack spacing={2} py={2}>
                <RHFTextField
                  label={`Title ${index + 1}`}
                  name={`${fieldNamePrefix}.title`}
                  multiline
                  rows={3}
                />

                <RHFTextField
                  label={`Description ${index + 1}`}
                  name={`${fieldNamePrefix}.description`}
                  multiline
                  rows={3}
                />

                <RHFTextField
                  label={`Price ${index + 1}`}
                  name={`${fieldNamePrefix}.price`}
                  multiline
                  rows={3}
                />
                <RHFTextField
                  label={`Period ${index + 1}`}
                  name={`${fieldNamePrefix}.period`}
                  multiline
                  rows={3}
                />

                <RHFDynamicMultipleTextFields
                  name={`${fieldNamePrefix}.features`}
                  defaultValuesForNewField=""
                  renderField={({ fieldNamePrefix: featurePrefix, index: featureIndex }) => (
                    <Stack spacing={2}>
                      <RHFTextField
                        label={`Feature ${featureIndex + 1}`}
                        name={`${featurePrefix}`}
                        multiline
                        rows={3}
                      />
                    </Stack>
                  )}
                  numberOfStaticFields={1}
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
