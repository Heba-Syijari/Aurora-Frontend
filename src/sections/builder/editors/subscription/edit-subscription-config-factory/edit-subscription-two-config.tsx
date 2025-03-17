import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, {
  RHFAutocomplete,
  RHFDynamicMultipleTextFields,
  RHFTextField,
} from 'src/components/hook-form';

import { icons } from 'src/assets/data';
import Iconify from 'src/components/iconify';
import { SubscriptionTwoConfig } from 'src/sections/builder/components/subscription/types';
import * as Yup from 'yup';
import { ColorBox } from '../../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../../common/colors';
import { RHFColorsGroup } from '../../common/styled';
// eslint-disable-next-line import/no-cycle
import { OptionType } from './edit-factory';

export interface EditSubscriptionTwoConfigProps {
  defaultValue: SubscriptionTwoConfig;
  onSave: (value: SubscriptionTwoConfig) => void;
  theme: Theme;
  onCloseClicked: () => void;
}

export default function EditSubscriptionTwoConfig({
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: EditSubscriptionTwoConfigProps) {
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    titleTextColor: Yup.string().required('This field is required'),
    priceTextColor: Yup.string().required('This field is required'),
    periodTextColor: Yup.string().required('This field is required'),
    iconColor: Yup.string().required('This field is required'),
    featuresTextColor: Yup.string().required('This field is required'),
    subscriptions: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required('This field is required'),
          price: Yup.string().nullable().required('This field is required'),
          period: Yup.string().nullable().required('This field is required'),
          icon: Yup.string().required('This field is required'),
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

  const methods = useForm({ resolver: yupResolver<SubscriptionTwoConfig>(schema), defaultValues });

  const { handleSubmit, setValue } = methods;

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

        <FormGroup label="Icon Color">
          <RHFColorsGroup
            name="iconColor"
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
              image: '',
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

                <RHFAutocomplete
                  name={`${fieldNamePrefix}.icon`}
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
                      `${fieldNamePrefix}.icon` as `subscriptions.${number}.icon`,
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
                      <Stack
                        key={option.value}
                        alignItems="center"
                        justifyContent="center"
                        width={1}
                      >
                        <Iconify icon={option.value} width={24} height={24} />
                      </Stack>
                    </li>
                  )}
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
