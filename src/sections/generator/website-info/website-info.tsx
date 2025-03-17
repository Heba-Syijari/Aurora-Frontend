import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { languages } from 'src/assets/data';
import FormProvider from 'src/components/hook-form';
import { WebsiteInfoFields } from 'src/sections/common/website-info-fields';
import * as Yup from 'yup';
import { ActionsGroup, SectionTitle } from '../common';
import { IWebsiteInfo } from '../view/types';

export type WebsiteInfoProps = {
  data: IWebsiteInfo;
  onSubmitClicked: (data: IWebsiteInfo) => void;
  onCancelClicked: () => void;
};

export default function WebsiteInfo({ data, onSubmitClicked, onCancelClicked }: WebsiteInfoProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const schema = Yup.object().shape({
    similarWebsitesLinks: Yup.array().of(
      Yup.object().shape({
        value: Yup.string()
          .url('The filed must be a valid link')
          .required('This field is required'),
      })
    ),
    location: Yup.string().required('The location is required'),
    websiteLanguage: Yup.string().required('The language is required'),
  });

  const defaultValues = {
    similarWebsitesLinks: (data.similarWebsites.length > 0 ? data.similarWebsites : []).map(
      (link) => ({ value: link })
    ),
    location: data.websiteLocation,
    websiteLanguage: data.mainLanguage || languages[1].value,
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.info('DATA', values);

      const similarWebsites = Array.isArray(values.similarWebsitesLinks)
        ? values.similarWebsitesLinks.map(({ value }) => value)
        : [];

      onSubmitClicked({
        websiteLocation: values.location,
        mainLanguage: values.websiteLanguage,
        similarWebsites,
      });
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Stack spacing={4}>
      <SectionTitle title="Step 4" description="Related website's information" />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack justifyContent="space-between">
          <WebsiteInfoFields />

          <ActionsGroup
            primaryButtonProps={{ type: 'submit' }}
            secondaryButtonProps={{ onClick: onCancelClicked }}
          />
        </Stack>
      </FormProvider>
    </Stack>
  );
}
