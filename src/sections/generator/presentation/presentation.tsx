import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, Typography } from '@mui/material';
import FormProvider from 'src/components/hook-form';
import { PresentationVolume, PresentationVolumeType } from 'src/types/website-presentation';
import { RHFRadioGroupRect } from 'src/components/styled/radio';
import { useGetVisualTypes } from 'src/api/project/use-get-visual-types';
import { ActionsGroup, SectionTitle } from '../common';
import { WebsitePresentation } from '../view/types';
import VisualTypesSection from './visual-types-section';

type PresentationOptionType = {
  type: PresentationVolumeType;
  title: string;
  description: string;
};

const options: PresentationOptionType[] = [
  {
    type: PresentationVolume.SIMPLE,
    title: 'Simple',
    description: '1 page',
  },
  {
    type: PresentationVolume.BALANCED,
    title: 'Balanced',
    description: '3 pages',
  },
  {
    type: PresentationVolume.COMPLICATED,
    title: 'Complicated',
    description: '5 pages',
  },
];

export type PresentationProps = {
  presentationData: WebsitePresentation;
  onSubmitClicked: (data: WebsitePresentation) => void;
  onCancelClicked: () => void;
};

export default function Presentation({
  presentationData,
  onSubmitClicked,
  onCancelClicked,
}: PresentationProps) {
  const { visualTypes: visualTypesOptions } = useGetVisualTypes();

  const schema = Yup.object().shape({
    volume: Yup.mixed<PresentationVolumeType>()
      .oneOf(Object.values(PresentationVolume))
      .required('The volume is required'),
    visualTypeIds: Yup.array()
      .of(Yup.number().required())
      .min(1)
      .required('The visual types are required'),
  });

  const defaultValues = {
    volume: presentationData.volume || PresentationVolume.SIMPLE,
    visualTypeIds: presentationData.visualTypeIds || [],
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      onSubmitClicked({ volume: data.volume, visualTypeIds: data.visualTypeIds });
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Stack spacing={4}>
      <SectionTitle title="Website Presentation" description="What is the volume of the content?" />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack spacing={4}>
          <RHFRadioGroupRect
            name="volume"
            options={options.map((option) => ({
              value: option.type,
              label: (
                <>
                  <Typography variant="h6">{option.title}</Typography>
                  <Typography variant="body2">{option.description}</Typography>
                </>
              ),
            }))}
            row
          />

          <VisualTypesSection options={visualTypesOptions} />

          <ActionsGroup
            primaryButtonProps={{ type: 'submit' }}
            secondaryButtonProps={{ onClick: onCancelClicked }}
          />
        </Stack>
      </FormProvider>
    </Stack>
  );
}
