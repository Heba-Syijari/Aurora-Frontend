import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider from 'src/components/hook-form';
import { WebsiteStoryFields } from 'src/sections/common/website-story-fields';
import * as Yup from 'yup';
import { ActionsGroup, SectionTitle } from '../common';
import { IWebsiteStory } from '../view/types';

export type StoryProps = {
  data: IWebsiteStory;
  onSubmitClicked: (data: IWebsiteStory) => void;
  onCancelClicked: () => void;
};

export default function Story({ onSubmitClicked, data, onCancelClicked }: StoryProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const schema = Yup.object().shape({
    name: Yup.string().required('The project name is required'),
    description: Yup.string()
      .required('The description is required')
      .max(600, 'The description should not be more than 600 characters'),
    keywords: Yup.array()
      .of(Yup.string().required('The keyword is required'))
      .required('The keywords are required'),
    generateContentByAi: Yup.boolean().default(false),
  });

  const defaultValues = {
    name: data.name || '',
    description: data.description || '',
    keywords: data.keywords || [],
    generateContentByAi: data.generateContentByAi || false,
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { handleSubmit, watch } = methods;

  const onSubmit = handleSubmit(async (values) => {
    console.log(values, 'values');
    try {
      console.log(values, 'values');

      onSubmitClicked({
        name: values.name,
        description: values.description,
        keywords: values.keywords,
        generateContentByAi: values.generateContentByAi,
      });
    } catch (error) {
      console.error(error);
    }
  });

  const descriptionWatch = watch('description');

  return (
    <Stack spacing={4}>
      <SectionTitle title="Step 3" description="What is motivate you to initiate this website?" />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack justifyContent="space-between">
          <WebsiteStoryFields descriptionWatch={descriptionWatch} />
          <ActionsGroup
            primaryButtonProps={{ type: 'submit' }}
            secondaryButtonProps={{ onClick: onCancelClicked }}
          />
        </Stack>
      </FormProvider>
    </Stack>
  );
}
