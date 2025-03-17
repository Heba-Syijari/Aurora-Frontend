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
  RHFUpload,
} from 'src/components/hook-form';

import { useUploadImage } from 'src/api/upload/use-upload-image';
import { icons } from 'src/assets/data';
import Iconify from 'src/components/iconify';
import { useFileDropHandler } from 'src/hooks/use-file-drop-handler';
import { FeatureThreeConfig } from 'src/sections/builder/components/featuers/types';
import * as Yup from 'yup';
import { ColorBox } from '../../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../../common/colors';
import { RHFColorsGroup } from '../../common/styled';
// eslint-disable-next-line import/no-cycle
import { OptionType } from './edit-factory';

export interface EditFeatureThreeConfigProps {
  defaultValue: FeatureThreeConfig;
  onSave: (value: FeatureThreeConfig) => void;
  theme: Theme;
  onCloseClicked: () => void;
}

export default function EditFeatureThreeConfig({
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: EditFeatureThreeConfigProps) {
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const { uploadImage, isLoading } = useUploadImage();
  const schema = Yup.object().shape({
    titleTextColor: Yup.string().required('This field is required'),
    descriptionTextColor: Yup.string().required('This field is required'),
    iconColor: Yup.string().required('This field is required'),
    features: Yup.array()
      .of(
        Yup.object().shape({
          icon: Yup.string().required('This field is required'),
          title: Yup.string().required('This field is required'),
          description: Yup.string().nullable().required('This field is required'),
          image: Yup.string().nullable().required('This field is required'),
        })
      )
      .min(1, 'At least one feature member is required')
      .required('Feature members are required'),
  });

  const defaultValues = { ...defaultValue };

  const methods = useForm({ resolver: yupResolver<FeatureThreeConfig>(schema), defaultValues });

  const { handleSubmit, setValue } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      onSave(data);
      onCloseClicked();
    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useFileDropHandler<FeatureThreeConfig>(uploadImage, setValue, isLoading);

  return (
    <FormProvider id="edit-feature-config-form" methods={methods} onSubmit={onSubmit}>
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
            name="features"
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
                      `${fieldNamePrefix}.icon` as `features.${number}.icon`,
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
                <RHFUpload
                  name={`${fieldNamePrefix}.image`}
                  // maxSize={3145728}
                  onDelete={() =>
                    setValue(`${fieldNamePrefix}.image` as `features.${number}.image`, '', {
                      shouldValidate: true,
                    })
                  }
                  onDrop={(value) =>
                    handleDrop(value, `${fieldNamePrefix}.image` as `features.${number}.image`)
                  }
                  isLoading={isLoading}
                  thumbnail
                  onUpload={() => console.info('ON UPLOAD')}
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
