import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider from 'src/components/hook-form';
import { WebsiteDesignFields } from 'src/sections/common/website-design-fields';
import { fontFamilyOptions, paletteOptions } from 'src/sections/common/website-design-fields/data';
import * as Yup from 'yup';
import { ActionsGroup, SectionTitle } from '../common';
import { LogoType, LogoValue, WebsiteDesignType } from '../view/types';

export type WebsiteDesignProps = {
  data: WebsiteDesignType;
  onSubmitClicked: (data: WebsiteDesignType) => void;
  onCancelClicked: () => void;
};

export default function WebsiteDesign({
  data,
  onSubmitClicked,
  onCancelClicked,
}: WebsiteDesignProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const schema = Yup.object().shape({
    logoType: Yup.string().required('logo type is required'),
    logoValue: Yup.lazy((value) => {
      switch (typeof value) {
        case 'string':
          return Yup.string().trim().required('The logo value is required');
        default:
          return Yup.mixed<File>().nonNullable().required('The logo value is required');
      }
    }),
    palette: Yup.string().required(),
    mode: Yup.string().required(),
    fontFamily: Yup.string().required(),
    themeId: Yup.number().required(),
  });

  const defaultValues = {
    logoType: data.logoType as string,
    logoValue: data.logoValue,
    palette: JSON.stringify(data.palette.primary ? data.palette : paletteOptions[0].colors),
    fontFamily: data.fontFamily || fontFamilyOptions[0].name,
    themeId: data.themeId,
    mode: data.mode,
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const { handleSubmit, setValue } = methods;

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.info('DATA', values);
      onSubmitClicked({
        logoType: values.logoType as LogoType,
        logoValue: values.logoValue,
        fontFamily: values.fontFamily,
        palette: JSON.parse(values.palette),
        mode: 'light',
        themeId: values.themeId,
      });
    } catch (error) {
      console.error(error);
    }
  });

  const handleLogoValueChange = (value: LogoValue) => {
    setValue('logoValue', value, { shouldValidate: true });
  };

  const handleLogoTypeChange = (type: LogoType) => {
    setValue('logoType', type);
    setValue('logoValue', '');
  };
  const handlePaletteValueChange = (value: string) => {
    setValue('palette', value);
  };

  return (
    <Stack spacing={3}>
      <SectionTitle title="Step 9" description="Customize your website design" />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <WebsiteDesignFields
          defaultLogoType={data.logoType}
          onLogoTypeChange={handleLogoTypeChange}
          onLogoValueChange={handleLogoValueChange}
          onPaletteValueChange={handlePaletteValueChange}
        />
        <ActionsGroup
          primaryButtonProps={{ type: 'submit' }}
          secondaryButtonProps={{ onClick: onCancelClicked }}
        />
      </FormProvider>
    </Stack>
  );
}
