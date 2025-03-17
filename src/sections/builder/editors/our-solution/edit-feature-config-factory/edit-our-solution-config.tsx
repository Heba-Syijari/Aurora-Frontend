import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { icons } from 'src/assets/data';
import { FormGroup } from 'src/components/custom/form-group';
import {
  RHFAutocomplete,
  RHFDynamicMultipleTextFields,
  RHFTextField,
} from 'src/components/hook-form';
import FormProvider from 'src/components/hook-form/form-provider';
import Iconify from 'src/components/iconify';
import {
  OurSolutionComponentName,
  OurSolutionConfig,
} from 'src/sections/builder/components/our-solution/types';
import * as Yup from 'yup';
import { ColorBox } from '../../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../../common/colors';
import { RHFColorsGroup } from '../../common/styled';
// eslint-disable-next-line import/no-cycle
import { OptionType } from './edit-factory';

export interface EditOurSolutionConfigProps {
  defaultValue: OurSolutionConfig;
  onSave: (value: OurSolutionConfig) => void;
  theme: Theme;
  onCloseClicked: () => void;
  name: OurSolutionComponentName;
}

export default function OurSolutionEditConfig({
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
  name,
}: EditOurSolutionConfigProps) {
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    titleColor: Yup.string().required('This field is required'),
    descriptionColor: Yup.string().required('This field is required'),
    iconColor: Yup.string().required('This field is required'),
    items: Yup.array()
      .of(
        Yup.object().shape({
          icon: Yup.string().required('This field is required'),
          title: Yup.string().required('This field is required'),
          description: Yup.string().nullable().required('This field is required'),
        })
      )
      .min(1, 'At least one feature member is required')
      .required('solutions  are required'),
  });

  const defaultValues = { ...defaultValue };

  const methods = useForm({ resolver: yupResolver<OurSolutionConfig>(schema), defaultValues });

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
    <FormProvider id="edit-our-solution-config-form" methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2} sx={{ py: 2 }}>
        <FormGroup label="Title color">
          <RHFColorsGroup
            name="titleColor"
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
            name="descriptionColor"
            row
            options={paletteColors.map((color) => ({
              value: color,
              label: <ColorBox color={paletteColorsMap[color]} />,
            }))}
            sx={{ gap: theme.spacing(2) }}
          />
        </FormGroup>

        <FormGroup label="Icon color">
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

        <Box sx={{ pt: 2 }}>
          <RHFDynamicMultipleTextFields
            name="items"
            // numberOfStaticFields={name === FeatureComponentName.FEATURE_FOUR ? 4 : 1}
            numberOfStaticFields={1}
            defaultValuesForNewField={{
              title: '',
              description: '',
              icon: '',
            }}
            renderField={({ fieldNamePrefix, index }) => (
              <Stack spacing={2}>
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
                      `${fieldNamePrefix}.icon` as `items.${number}.icon`,
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
              </Stack>
            )}
          />
        </Box>
      </Stack>
    </FormProvider>
  );
}
