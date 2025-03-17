import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateProjectSettings } from 'src/api/project';
import { useUploadImage } from 'src/api/upload/use-upload-image';
import { useSnackbar } from 'src/components/snackbar';
import { useProjectContext } from 'src/providers/project/project-context';
import { LogoType, LogoValue } from 'src/sections/generator/view/types';
import { IPage, IProjectSettings } from 'src/types/project';
import * as Yup from 'yup';

function getDefaultValues(settings: IProjectSettings, page: IPage) {
  return {
    logoType: settings.logoType,
    logoValue: settings.logoValue,
    palette: JSON.stringify(settings.palette),
    fontFamily: settings.fontFamily,
    title: page.title,
    description: page.description,
  };
}

export const useSettingsDrawer = (pageId: number) => {
  const { project, refetch } = useProjectContext();
  const { settings } = project;
  const page = project.pages.find(({ id }) => id === pageId) || project.pages[0];

  const { updateProjectSettings } = useUpdateProjectSettings();
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
    title: Yup.string().required('The title is required'),
    description: Yup.string().required('The description is required'),
  });

  const defaultValues = getDefaultValues(settings, page);

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting, isSubmitSuccessful },
    reset,
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const logoValue = await getLogoValue(data.logoValue);

      await updateProjectSettings({
        projectId: project.id,
        pageId: page.id,
        pageTitle: data.title,
        pageDescription: data.description,
        palette: JSON.parse(data.palette),
        fontFamily: data.fontFamily,
        logoType: data.logoType,
        logoValue,
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
    setValue('palette', value, { shouldValidate: true });
  };

  const resetDefault = useCallback(() => {
    reset({ ...getDefaultValues(settings, page) });
  }, [page, reset, settings]);

  useEffect(() => {
    resetDefault();
  }, [resetDefault]);

  return {
    onSubmit,
    handleLogoValueChange,
    handleLogoTypeChange,
    handlePaletteValueChange,
    resetDefault,
    isLoading: isSubmitting,
    isSuccess: isSubmitSuccessful,
    methods,
    settings,
  };
};
