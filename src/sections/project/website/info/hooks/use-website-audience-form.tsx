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
    // audience
    age: project.audience?.age || [],
    knowledge: project.audience?.knowledge || [],
    gender: project.audience?.gender || [],
    language: project.audience?.language || [],
    countries: project.audience?.countries || [],
  };
}

export const useWebsiteAudienceForm = () => {
  const { project, refetch } = useProjectContext();

  const { updateProject } = useUpdateProject();

  const { enqueueSnackbar } = useSnackbar();

  const schema = Yup.object().shape({
    // audience
    age: Yup.array().of(Yup.string().required()).min(1).required(),
    knowledge: Yup.array().of(Yup.string().required()).min(1).required(),
    gender: Yup.array().of(Yup.string().required()).min(1).required(),
    language: Yup.array().of(Yup.string().required()).required(),
    countries: Yup.array().of(Yup.string().required()),
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
      await updateProject({
        id: project.id,

        // audience
        audience: {
          age: values.age,
          gender: values.gender,
          countries: values.countries,
        },
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
    id: project.id,
    isLoading: isSubmitting,
    methods,
    onSubmit,
    watch,
  };
};
