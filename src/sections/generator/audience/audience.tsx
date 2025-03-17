import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider from 'src/components/hook-form';
import { WebsiteAudienceFields } from 'src/sections/common/website-audience-fields';
import * as Yup from 'yup';
import { ActionsGroup, SectionTitle } from '../common';
import { WebsiteAudience } from '../view/types';

export type AudienceProps = {
  data: WebsiteAudience;
  onSubmitClicked: (data: WebsiteAudience) => void;
  onCancelClicked: () => void;
};

export default function Audience({ data, onSubmitClicked, onCancelClicked }: AudienceProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);
  const schema = Yup.object().shape({
    age: Yup.array().of(Yup.string().required()).min(1).required(),
    gender: Yup.array().of(Yup.string().required()).min(1).required(),
    countries: Yup.array().of(Yup.string().required()),
  });

  const defaultValues = {
    age: data.age || [],
    gender: data.gender || [],
    countries: data.countries || [],
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    try {
      onSubmitClicked(values);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Stack spacing={4}>
      <SectionTitle
        title="Step 6"
        description="Target audience that will be use and browsing your site"
      />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <WebsiteAudienceFields />
        <ActionsGroup
          primaryButtonProps={{ type: 'submit' }}
          secondaryButtonProps={{ onClick: onCancelClicked }}
        />
      </FormProvider>
    </Stack>
  );
}
