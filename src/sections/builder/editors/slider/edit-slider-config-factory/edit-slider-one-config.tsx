import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, {
  RHFDynamicMultipleTextFields,
  RHFTextField,
  RHFUpload,
} from 'src/components/hook-form';
import { SilderOneConfig } from 'src/sections/builder/components/slider/types';
import * as Yup from 'yup';
import { ColorBox } from '../../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../../common/colors';
import { RHFColorsGroup } from '../../common/styled';

export interface EditSilderOneConfigProps {
  defaultValue: SilderOneConfig;
  onSave: (value: SilderOneConfig) => void;
  theme: Theme;
  onCloseClicked: () => void;
}

export default function EditSilderOneConfig({
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: EditSilderOneConfigProps) {
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    titleTextColor: Yup.string().required('This field is required'),
    subtitleTextColor: Yup.string().required('This field is required'),
    descriptionTextColor: Yup.string().required('This field is required'),
    slides: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required('This field is required'),
          description: Yup.string().required('This field is required'),
          subtitle: Yup.string().required('This field is required'),
          image: Yup.string().nullable().required('This field is required'),
        })
      )
      .min(1, 'At least one slide member is required')
      .required('Slides members are required'),
  });

  const defaultValues = { ...defaultValue };

  const methods = useForm({ resolver: yupResolver<SilderOneConfig>(schema), defaultValues });

  const { handleSubmit, setValue } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      onSave(data);
      onCloseClicked();
    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles: File[], name: `slides.${number}.image`) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      if (file) {
        setValue(name, newFile.preview, { shouldValidate: true });
      }
    },
    [setValue]
  );

  return (
    <FormProvider id="edit-slider-config-form" methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2} sx={{ py: 2 }}>
        <FormGroup label="Slider title color">
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

        <FormGroup label="Slider subtitle color">
          <RHFColorsGroup
            name="subtitleTextColor"
            row
            options={paletteColors.map((color) => ({
              value: color,
              label: <ColorBox color={paletteColorsMap[color]} />,
            }))}
            sx={{ gap: theme.spacing(2) }}
          />
        </FormGroup>

        <FormGroup label="Slider dedcription color">
          <RHFColorsGroup
            name="dedcriptionTextColor"
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
            name="slides"
            defaultValuesForNewField={{
              title: '',
              dedcription: '',
              subtitle: '',
              image: '',
            }}
            renderField={({ fieldNamePrefix, index }) => (
              <Stack spacing={2}>
                <RHFTextField label={`Title ${index + 1}`} name={`${fieldNamePrefix}.title`} />
                <RHFTextField
                  label={`Subtitle ${index + 1}`}
                  name={`${fieldNamePrefix}.subtitle`}
                  multiline
                  rows={3}
                />

                <RHFTextField
                  label={`Description ${index + 1}`}
                  name={`${fieldNamePrefix}.description`}
                  multiline
                  rows={3}
                />
                <RHFUpload
                  name={`${fieldNamePrefix}.image`}
                  // maxSize={3145728}
                  onDelete={() =>
                    setValue(`${fieldNamePrefix}.image` as `slides.${number}.image`, '', {
                      shouldValidate: true,
                    })
                  }
                  onDrop={(value) =>
                    handleDrop(value, `${fieldNamePrefix}.image` as `slides.${number}.image`)
                  }
                  thumbnail
                  onUpload={() => console.info('ON UPLOAD')}
                />
              </Stack>
            )}
            numberOfStaticFields={3}
          />
        </Box>
      </Stack>
    </FormProvider>
  );
}
