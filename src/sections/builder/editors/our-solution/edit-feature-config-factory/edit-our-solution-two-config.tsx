import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useUploadImage } from 'src/api/upload/use-upload-image';
import { FormGroup } from 'src/components/custom/form-group';
import { RHFDynamicMultipleTextFields, RHFTextField, RHFUpload } from 'src/components/hook-form';
import FormProvider from 'src/components/hook-form/form-provider';
import { useFileDropHandler } from 'src/hooks/use-file-drop-handler';
import { OurSolutionTwoConfig } from 'src/sections/builder/components/our-solution/types';
import * as Yup from 'yup';
import { ColorBox } from '../../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../../common/colors';
import { RHFColorsGroup } from '../../common/styled';
// eslint-disable-next-line import/no-cycle

export interface EditOurSolutionTwoConfigProps {
  defaultValue: OurSolutionTwoConfig;
  onSave: (value: OurSolutionTwoConfig) => void;
  theme: Theme;
  onCloseClicked: () => void;
  // name: OurSolutionComponentName;
}

export default function OurSolutionTwoEditConfig({
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: // name,
EditOurSolutionTwoConfigProps) {
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const { uploadImage, isLoading } = useUploadImage();
  const schema = Yup.object().shape({
    titleColor: Yup.string().required('This field is required'),
    descriptionColor: Yup.string().required('This field is required'),
    content: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required('This field is required'),
          description: Yup.string().required('This field is required'),
          image: Yup.string().nullable().required('This field is required'),
        })
      )
      .min(1, 'At least one solution  is required')
      .required('solutions  are required'),
  });

  const defaultValues = { ...defaultValue };

  const methods = useForm({ resolver: yupResolver<OurSolutionTwoConfig>(schema), defaultValues });

  const { handleSubmit, setValue } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      onSave(data);
      onCloseClicked();
    } catch (error) {
      console.error(error);
    }
  });
  const handleDrop = useFileDropHandler<OurSolutionTwoConfig>(uploadImage, setValue, isLoading);
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

        <Box sx={{ pt: 2 }}>
          <RHFDynamicMultipleTextFields
            name="content"
            // numberOfStaticFields={name === FeatureComponentName.FEATURE_FOUR ? 4 : 1}
            numberOfStaticFields={1}
            defaultValuesForNewField={{
              title: '',
              description: '',
              // icon: '',
            }}
            renderField={({ fieldNamePrefix, index }) => (
              <Stack spacing={2}>
                <RHFUpload
                  name={`${fieldNamePrefix}.image`}
                  // maxSize={3145728}
                  onDelete={() =>
                    setValue(`${fieldNamePrefix}.image` as `content.${number}.image`, '', {
                      shouldValidate: true,
                    })
                  }
                  onDrop={(value) =>
                    handleDrop(value, `${fieldNamePrefix}.image` as `content.${number}.image`)
                  }
                  isLoading={isLoading}
                  thumbnail
                  onUpload={() => console.info('ON UPLOAD')}
                />
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
              </Stack>
            )}
          />
        </Box>
      </Stack>
    </FormProvider>
  );
}
