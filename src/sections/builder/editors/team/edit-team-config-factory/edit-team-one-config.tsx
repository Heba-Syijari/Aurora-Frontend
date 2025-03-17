import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useUploadImage } from 'src/api/upload/use-upload-image';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, {
  RHFDynamicMultipleTextFields,
  RHFTextField,
  RHFUpload,
} from 'src/components/hook-form';
import { useFileDropHandler } from 'src/hooks/use-file-drop-handler';
import { TeamOneConfig } from 'src/sections/builder/components/team/types';
import * as Yup from 'yup';
import { ColorBox } from '../../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../../common/colors';
import { RHFColorsGroup } from '../../common/styled';

export interface EditTeamOneConfigProps {
  defaultValue: TeamOneConfig;
  onSave: (value: TeamOneConfig) => void;
  theme: Theme;
  onCloseClicked: () => void;
}

export default function EditTeamOneConfig({
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: EditTeamOneConfigProps) {
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const { uploadImage, isLoading } = useUploadImage();
  const schema = Yup.object().shape({
    nameTextColor: Yup.string().required('This field is required'),
    specializationTextColor: Yup.string().required('This field is required'),
    emailTextColor: Yup.string().required('This field is required'),
    numberTextColor: Yup.string().required('This field is required'),
    socialIconsColor: Yup.string().required('This field is required'),
    team: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required('This field is required'),
          specialization: Yup.string().required('This field is required'),
          image: Yup.string().nullable().required('This field is required'),
          email: Yup.string()
            .trim()
            .email('Email must be valid')
            .required('This field is required'),
          number: Yup.string().required('This field is required'),
          socials: Yup.object().shape({
            instagram: Yup.string().url('url must be valid').required('This field is required'),
            facebook: Yup.string().url('url must be valid').required('This field is required'),
            linkedin: Yup.string().url('url must be valid').required('This field is required'),
            twitter: Yup.string().url('url must be valid').required('This field is required'),
          }),
        })
      )
      .min(1, 'At least one team member is required')
      .required('Team members are required'),
  });

  const defaultValues = { ...defaultValue };

  const methods = useForm({ resolver: yupResolver<TeamOneConfig>(schema), defaultValues });

  const { handleSubmit, setValue } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      onSave(data);
      onCloseClicked();
    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useFileDropHandler<TeamOneConfig>(uploadImage, setValue, isLoading);

  return (
    <FormProvider id="edit-team-config-form" methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2} sx={{ py: 2 }}>
        <FormGroup label="Team member name color">
          <RHFColorsGroup
            name="nameTextColor"
            row
            options={paletteColors.map((color) => ({
              value: color,
              label: <ColorBox color={paletteColorsMap[color]} />,
            }))}
            sx={{ gap: theme.spacing(2) }}
          />
        </FormGroup>

        <FormGroup label="Team member specialization color">
          <RHFColorsGroup
            name="specializationTextColor"
            row
            options={paletteColors.map((color) => ({
              value: color,
              label: <ColorBox color={paletteColorsMap[color]} />,
            }))}
            sx={{ gap: theme.spacing(2) }}
          />
        </FormGroup>

        <FormGroup label="Team member email color">
          <RHFColorsGroup
            name="emailTextColor"
            row
            options={paletteColors.map((color) => ({
              value: color,
              label: <ColorBox color={paletteColorsMap[color]} />,
            }))}
            sx={{ gap: theme.spacing(2) }}
          />
        </FormGroup>

        <FormGroup label="Team member number color">
          <RHFColorsGroup
            name="numberTextColor"
            row
            options={paletteColors.map((color) => ({
              value: color,
              label: <ColorBox color={paletteColorsMap[color]} />,
            }))}
            sx={{ gap: theme.spacing(2) }}
          />
        </FormGroup>

        <FormGroup label="Team member social icons color">
          <RHFColorsGroup
            name="socialIconsColor"
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
            name="team"
            defaultValuesForNewField={{
              name: '',
              specialization: '',
              email: '',
              number: '',
              image: '',
              socials: { facebook: '', linkedin: '', twitter: '', instagram: '' },
            }}
            renderField={({ fieldNamePrefix, index }) => (
              <Stack spacing={2}>
                <RHFTextField label={`Name ${index + 1}`} name={`${fieldNamePrefix}.name`} />
                <RHFTextField
                  label={`Specialization ${index + 1}`}
                  name={`${fieldNamePrefix}.specialization`}
                  multiline
                  rows={3}
                />

                <RHFUpload
                  name={`${fieldNamePrefix}.image`}
                  // maxSize={3145728}
                  onDelete={() =>
                    setValue(`${fieldNamePrefix}.image` as `team.${number}.image`, '', {
                      shouldValidate: true,
                    })
                  }
                  onDrop={(value) =>
                    handleDrop(value, `${fieldNamePrefix}.image` as `team.${number}.image`)
                  }
                  isLoading={isLoading}
                  thumbnail
                  onUpload={() => console.info('ON UPLOAD')}
                />

                <RHFTextField
                  label={`Email ${index + 1}`}
                  name={`${fieldNamePrefix}.email`}
                  multiline
                  rows={3}
                />
                <RHFTextField
                  label={`Number ${index + 1}`}
                  name={`${fieldNamePrefix}.number`}
                  multiline
                  rows={3}
                />
                {['facebook', 'linkedin', 'twitter', 'instagram'].map((social, i) => (
                  <RHFTextField
                    key={social}
                    label={`${social.charAt(0).toUpperCase() + social.slice(1)} ${index + 1}`}
                    name={`${fieldNamePrefix}.socials.${social}`}
                    multiline
                    rows={3}
                  />
                ))}
              </Stack>
            )}
            numberOfStaticFields={1}
          />
        </Box>
      </Stack>
    </FormProvider>
  );
}
