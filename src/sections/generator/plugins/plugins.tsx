import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider from 'src/components/hook-form';
import { WebsitePluginsFields } from 'src/sections/common/website-plugins-fields';
import { supportedPlugins } from 'src/types/project';
import * as Yup from 'yup';
import { ActionsGroup, SectionTitle } from '../common';
import { IWebsitePlugins } from '../view/types';

type PluginsProps = {
  data: IWebsitePlugins;
  onSubmitClicked: (data: IWebsitePlugins) => void;
  onCancelClicked: () => void;
};

export default function Plugins({ data, onSubmitClicked, onCancelClicked }: PluginsProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const schema = Yup.object().shape({
    plugins: Yup.array().of(Yup.string().oneOf(supportedPlugins).required()),
  });

  const defaultValues = {
    plugins: data.plugins,
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.info('DATA', values);
      onSubmitClicked({
        plugins: values.plugins || [],
      });
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Stack spacing={4}>
      <SectionTitle
        title="Step 7"
        description="Select the plugins that you want to integrate with your website"
      />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <WebsitePluginsFields />

        <ActionsGroup
          primaryButtonProps={{ type: 'submit' }}
          secondaryButtonProps={{ onClick: onCancelClicked }}
        />
      </FormProvider>
    </Stack>
  );
}
