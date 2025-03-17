import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'src/components/snackbar';
import { useProjectContext } from 'src/providers/project/project-context';
import { useUpdateProject } from 'src/api/project';
import {
  IIntellectualProperty,
  IntellectualPropertyVariation,
} from 'src/types/intellectual-property';
import {
  getIntellectualPropertyDefaultValues,
  getIntellectualPropertyPayload,
  getIntellectualPropertySchema,
} from 'src/sections/common/intellectual-property-fields/utils';
import { usePreventReload } from 'src/hooks/use-prevent-reload';

export const useIntellectualProperty = () => {
  const { project, refetch } = useProjectContext();

  const data = useMemo(
    () =>
      project.intellectualProperty || {
        type: IntellectualPropertyVariation.GENERAL,
        relatedLinks: [],
      },
    [project.intellectualProperty]
  );

  const { updateProject } = useUpdateProject();

  const { enqueueSnackbar } = useSnackbar();

  const schema = getIntellectualPropertySchema();

  const defaultValues = getIntellectualPropertyDefaultValues(data);

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
    watch,
  } = methods;

  usePreventReload(isDirty);

  const onSubmit = handleSubmit(async (values) => {
    try {
      const payload = getIntellectualPropertyPayload(values);

      await updateProject({
        id: project.id,
        intellectualProperty: payload,
      });

      await refetch();

      enqueueSnackbar('Successfully updated');
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message || 'Failed updating the project', { variant: 'error' });
    }
  });

  const typeWatch = watch('type');

  useEffect(() => {
    const values = getIntellectualPropertyDefaultValues({
      ...data,
      type: typeWatch,
    } as IIntellectualProperty);

    reset(values);
  }, [data, reset, typeWatch]);

  useEffect(() => {
    if (project?.intellectualProperty) {
      reset(getIntellectualPropertyDefaultValues(project.intellectualProperty));
    }
  }, [project?.intellectualProperty, reset]);

  return {
    isLoading: isSubmitting,
    projectId: project.id,
    projectName: project.name,
    methods,
    onSubmit,
    selectedType: typeWatch,
  };
};
