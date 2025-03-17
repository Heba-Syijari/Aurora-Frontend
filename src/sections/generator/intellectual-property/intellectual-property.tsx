import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider from 'src/components/hook-form';
import { IntellectualPropertyFields } from 'src/sections/common/intellectual-property-fields';
import {
  getIntellectualPropertyDefaultValues,
  getIntellectualPropertyPayload,
  getIntellectualPropertySchema,
} from 'src/sections/common/intellectual-property-fields/utils';
import { IIntellectualProperty } from 'src/types/intellectual-property';
import { ActionsGroup, SectionTitle } from '../common';

export type IntellectualPropertyProps = {
  data: IIntellectualProperty;
  onSubmitClicked: (data: IIntellectualProperty) => void;
  onCancelClicked: () => void;
};

export default function IntellectualProperty({
  data,
  onSubmitClicked,
  onCancelClicked,
}: IntellectualPropertyProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);
  const schema = getIntellectualPropertySchema();

  const defaultValues = getIntellectualPropertyDefaultValues(data);

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const { handleSubmit, reset, watch } = methods;

  const typeWatch = watch('type');

  const onSubmit = handleSubmit(async (values) => {
    try {
      const payload = getIntellectualPropertyPayload(values);

      onSubmitClicked(payload);
    } catch (error) {
      console.error(error);
    }
  });

  useEffect(() => {
    const values = getIntellectualPropertyDefaultValues({
      ...data,
      type: typeWatch,
    } as IIntellectualProperty);

    reset(values);
  }, [data, reset, typeWatch]);

  return (
    <Stack spacing={4}>
      <SectionTitle
        title="Step 5"
        description="The intellectual property rights to the content within the site"
      />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack justifyContent="space-between">
          <IntellectualPropertyFields type={typeWatch} />
          <ActionsGroup
            primaryButtonProps={{ type: 'submit' }}
            secondaryButtonProps={{ onClick: onCancelClicked }}
          />
        </Stack>
      </FormProvider>
    </Stack>
  );
}
