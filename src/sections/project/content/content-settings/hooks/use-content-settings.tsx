import { useCallback, useEffect, useMemo } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'src/components/snackbar';
import { useProjectContext } from 'src/providers/project/project-context';
import { IProjectContentType } from 'src/types/project';
import { useUpdateProject, useGetProjectContentTypes } from 'src/api/project';
import { ContentTypeVariation, ContentTypeVariationType } from 'src/types/website-content-type';
import { usePreventReload } from 'src/hooks/use-prevent-reload';

type ContentSettingsData = {
  type: ContentTypeVariationType;
  contentTypes: IProjectContentType[];
};

function hasMainCategory(data: ContentSettingsData): boolean {
  return (
    data.type === ContentTypeVariation.SPECIALIST &&
    data.contentTypes.some(({ parentId }) => !!parentId)
  );
}

function getMainCategory(data: ContentSettingsData) {
  let mainCategoryId = 0;

  if (hasMainCategory(data)) {
    mainCategoryId = data.contentTypes.find((item) => !item.parentId)?.id || 0;
  }

  return mainCategoryId;
}

function getDefaultValues(data: ContentSettingsData) {
  const mainCategory = getMainCategory(data);
  const categories = data.contentTypes.map((item) => item.id).filter((id) => id !== mainCategory);

  return {
    type: data.type,
    mainCategory,
    categories: data.type === ContentTypeVariation.DIVERSIFIED ? categories : [],
    subCategories: data.type === ContentTypeVariation.SPECIALIST ? categories : [],
  };
}

export const useContentSettings = () => {
  const { project, refetch } = useProjectContext();

  const { updateProject } = useUpdateProject();

  const { contentTypes, refetch: refetchContentTypes } = useGetProjectContentTypes(project.id);

  const data = useMemo(
    () => ({ contentTypes, type: project.contentType }),
    [contentTypes, project.contentType]
  );

  const { enqueueSnackbar } = useSnackbar();

  const schema = Yup.object().shape({
    type: Yup.mixed<ContentTypeVariationType>()
      .oneOf(Object.values(ContentTypeVariation))
      .required('The type is required'),

    categories: Yup.array()
      .of(Yup.number().required())
      .when('type', {
        is: (type: ContentTypeVariationType) => type === ContentTypeVariation.DIVERSIFIED,
        then: (sch) => sch.min(1, 'You should at least select one category'),
        otherwise: (sch) => sch,
      })
      .required('The categories are required'),

    mainCategory: Yup.number().when('type', {
      is: (type: ContentTypeVariationType) => type === ContentTypeVariation.SPECIALIST,
      then: (sch) => sch.min(1, 'The main category is required').required(),
      otherwise: (sch) => sch,
    }),

    subCategories: Yup.array()
      .of(Yup.number().required())
      .when('type', {
        is: (type: ContentTypeVariationType) => type === ContentTypeVariation.SPECIALIST,
        then: (sch) => sch.min(1, 'You should at least select one category'),
        otherwise: (sch) => sch,
      })
      .required('The categories are required'),
  });

  const defaultValues = getDefaultValues(data);

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { isSubmitting, isDirty },
  } = methods;

  usePreventReload(isDirty);

  const typeWatch = watch('type');
  const mainCategoryWatch = watch('mainCategory');

  const onSubmit = handleSubmit(async (values) => {
    try {
      let categoriesIds = values.categories;

      if (values.type === ContentTypeVariation.SPECIALIST) {
        categoriesIds = [...values.subCategories, values.mainCategory!];
      }

      await updateProject({
        id: project.id,
        contentType: {
          type: values.type,
          categoriesIds,
        },
      });

      await refetch();

      await refetchContentTypes();

      enqueueSnackbar('Successfully updated', { variant: 'success' });
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message || 'Failed updating the project', { variant: 'error' });
    }
  });

  const resetCategories = useCallback(() => {
    setValue('categories', []);
  }, [setValue]);

  useEffect(() => {
    const values = getDefaultValues({ ...data, type: typeWatch });

    reset(values);
  }, [data, reset, typeWatch]);

  useEffect(() => {
    if (mainCategoryWatch) {
      resetCategories();
    }
  }, [mainCategoryWatch, resetCategories]);

  return {
    projectId: project.id,
    projectName: project.name,
    type: typeWatch,
    methods,
    onSubmit,
    isLoading: isSubmitting,
    mainCategoryId: mainCategoryWatch,
  };
};
