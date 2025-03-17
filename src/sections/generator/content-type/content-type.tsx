import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider from 'src/components/hook-form';
import { WebsiteContentTypeFields } from 'src/sections/common/website-content-type-fields';
import {
  ContentTypeVariation,
  ContentTypeVariationType,
  IWebsiteContentType,
} from 'src/types/website-content-type';
import * as Yup from 'yup';
import { ActionsGroup, SectionTitle } from '../common';

function getDefaultValues(data: IWebsiteContentType) {
  return {
    type: data.type,
    categories: data.categories,
    mainCategory: data.mainCategoryId || 0,
    subCategories: data.subCategories,
  };
}

export type ContentTypeProps = {
  data: IWebsiteContentType;
  onSubmitClicked: (data: IWebsiteContentType) => void;
  onCancelClicked: () => void;
};

export default function ContentType({ data, onSubmitClicked, onCancelClicked }: ContentTypeProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

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

  const { handleSubmit, setValue, watch, reset } = methods;

  const typeWatch = watch('type');
  const mainCategoryWatch = watch('mainCategory');

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.info('DATA', values);

      onSubmitClicked({
        type: values.type,
        categories: values.categories,
        mainCategoryId: values.mainCategory,
        subCategories: values.subCategories,
      });
    } catch (error) {
      console.error(error);
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

  return (
    <Stack spacing={4}>
      <SectionTitle
        title="Content Type"
        description="What is the type of content you want to add?"
      />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <WebsiteContentTypeFields type={typeWatch} mainCategoryId={mainCategoryWatch} />

        <ActionsGroup
          primaryButtonProps={{ type: 'submit' }}
          secondaryButtonProps={{ onClick: onCancelClicked }}
        />
      </FormProvider>
    </Stack>
  );
}
