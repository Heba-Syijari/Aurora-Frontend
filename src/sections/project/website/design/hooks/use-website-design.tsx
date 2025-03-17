import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateProject } from 'src/api/project';
import { useUploadImage } from 'src/api/upload/use-upload-image';
import { useSnackbar } from 'src/components/snackbar';
import { usePreventReload } from 'src/hooks/use-prevent-reload';
import { useProjectContext } from 'src/providers/project/project-context';
import { LogoType, LogoValue } from 'src/sections/generator/view/types';
import { IProjectSettings } from 'src/types/project';
import * as Yup from 'yup';

function getDefaultValues(settings: IProjectSettings) {
  return {
    logoType: settings.logoType,
    logoValue: settings.logoValue,
    palette: JSON.stringify(settings.palette),
    fontFamily: settings.fontFamily,
  };
}

export const useWebsiteDesign = () => {
  const { project, refetch } = useProjectContext();

  const { updateProject } = useUpdateProject();
  const { uploadImage } = useUploadImage();

  const { enqueueSnackbar } = useSnackbar();

  const schema = Yup.object().shape({
    logoType: Yup.string().required('The logo type is required'),
    logoValue: Yup.lazy((value) => {
      switch (typeof value) {
        case 'string':
          return Yup.string().trim().required('The logo value is required');
        default:
          return Yup.mixed<File>().nonNullable().required('The logo value is required');
      }
    }),
    palette: Yup.string().required('The palette is required'),
    fontFamily: Yup.string().required('The font family is required'),
  });

  const defaultValues = getDefaultValues(project.settings ?? {});

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting, isDirty },
    reset,
  } = methods;

  usePreventReload(isDirty);

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.info('DATA', values);
      const logoValue = await getLogoValue(values.logoValue);
      await updateProject({
        id: project.id,
        design: {
          fontFamily: values.fontFamily,
          palette: JSON.parse(values.palette),
          logoType: values.logoType,
          logoValue,
          // mode: '',
        },
      });

      await refetch();

      enqueueSnackbar('Successfully updated');
    } catch (error) {
      console.error(error);
      enqueueSnackbar({
        variant: 'error',
        message: error.message,
        autoHideDuration: 2500,
      });
    }
  });

  const getLogoValue = async (value: LogoValue): Promise<string> => {
    if (value instanceof File) {
      const result = await uploadImage(value);
      return result.fileURL;
    }

    return value;
  };

  const handleLogoValueChange = (value: LogoValue) => {
    setValue('logoValue', value, { shouldValidate: true });
  };

  const handleLogoTypeChange = (type: LogoType) => {
    setValue('logoType', type);
    setValue('logoValue', '');
  };

  const handlePaletteValueChange = (value: string) => {
    setValue('palette', value);
  };

  useEffect(() => {
    if (project.settings) {
      reset(getDefaultValues(project.settings));
    }
  }, [project.settings, reset]);

  return {
    projectId: project.id,
    projectName: project.name,
    onSubmit,
    handleLogoValueChange,
    handlePaletteValueChange,
    handleLogoTypeChange,
    isLoading: isSubmitting,
    methods,
    data: project.settings,
  };
};
