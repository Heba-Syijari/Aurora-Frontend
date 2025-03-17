import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateProject } from 'src/api/project';
import { useSnackbar } from 'src/components/snackbar';
import { usePreventReload } from 'src/hooks/use-prevent-reload';
import { useProjectContext } from 'src/providers/project/project-context';
import { IProject } from 'src/types/project';
import * as Yup from 'yup';

function getDefaultValues(project: IProject) {
  return {
    // website info
    similarWebsitesLinks: (project.similarWebsites?.length > 0 ? project.similarWebsites : []).map(
      (value) => ({ value })
    ),
    location: project.websiteLocation || '',
    websiteLanguage: project.mainLanguage || '',

    // story
    name: project.name || '',
    description: project.description || '',
    keywords: project.keywords || [],
  };
}

export const useWebsiteInfoForm = () => {
  const { project, refetch } = useProjectContext();

  const { updateProject } = useUpdateProject();

  const { enqueueSnackbar } = useSnackbar();

  const schema = Yup.object().shape({
    // website info
    similarWebsitesLinks: Yup.array().of(
      Yup.object().shape({
        value: Yup.string()
          .url('The filed must be a valid link')
          .required('This field is required'),
      })
    ),
    location: Yup.string().required('The location is required'),
    websiteLanguage: Yup.string().required('The language is required'),

    // story
    name: Yup.string().required('The project name is required'),
    description: Yup.string()
      .required('The description is required')
      .max(600, 'The description should not be more than 600 characters'),
    keywords: Yup.array()
      .of(Yup.string().required('The keyword is required'))
      .required('The keywords are required'),
  });

  const defaultValues = getDefaultValues(project);

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting, isDirty },
  } = methods;

  usePreventReload(isDirty);

  const onSubmit = handleSubmit(async (values) => {
    try {
      const similarWebsites = (values.similarWebsitesLinks || []).map(({ value }) => value);

      await updateProject({
        id: project.id,
        // info
        websiteLocation: values.location,
        mainLanguage: values.websiteLanguage,
        similarWebsites,

        // story
        name: values.name,
        description: values.description,
        keywords: values.keywords,
      });

      await refetch();

      enqueueSnackbar('Successfully updated');
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message || 'Failed updating the project', { variant: 'error' });
    }
  });

  useEffect(() => {
    if (project) {
      reset(getDefaultValues(project));
    }
  }, [project, reset]);

  return {
    isLoading: isSubmitting,
    methods,
    onSubmit,
    watch,
  };
};
