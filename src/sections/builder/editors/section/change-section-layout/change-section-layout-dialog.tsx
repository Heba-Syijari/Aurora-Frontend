import { yupResolver } from '@hookform/resolvers/yup';
import { Box, DialogActions, DialogContent } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useGetComponents } from 'src/api/component';
import FormProvider from 'src/components/hook-form';
import Image from 'src/components/image/image';
import { BaseLoadingButton } from 'src/components/styled/button';
import { StyledRHFTabsGroup } from 'src/components/styled/radio';
import { IComponent } from 'src/types/project';
import * as Yup from 'yup';
import BaseEditDialog from '../../base-edit-dialog';

type ChangeSectionLayoutDialogProps = {
  open: boolean;
  onClose: () => void;
  onChange: (componentId: number) => Promise<void>;
  currentComponent: IComponent;
};

export default function ChangeSectionLayoutDialog({
  open,
  onClose,
  onChange,
  currentComponent,
}: ChangeSectionLayoutDialogProps) {
  const { components } = useGetComponents();

  const schema = Yup.object().shape({
    componentId: Yup.number().required('The component is required'),
  });

  const defaultValues = { componentId: currentComponent.id };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log({ data });
    await onChange(data.componentId);
  });

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  useEffect(() => {
    const component = components.find((c) => c.name === currentComponent.name);
    if (component) {
      setValue('componentId', component.id);
    }
  }, [components, currentComponent.name, setValue]);

  return (
    <BaseEditDialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      dialogTitle="Section Layout"
    >
      <DialogContent>
        <Box sx={{ py: 2 }}>
          <FormProvider id="change-section-layout-form" methods={methods} onSubmit={onSubmit}>
            <StyledRHFTabsGroup
              name="componentId"
              options={components
                .filter((component) => component.type === currentComponent.type)
                .map((component) => ({
                  value: component.id,
                  label: (
                    <Box key={component.id}>
                      <Image src={component.image} alt={component.name} width="100%" />
                    </Box>
                  ),
                }))}
              sx={{ gap: (theme) => theme.spacing(2) }}
            />
          </FormProvider>
        </Box>
      </DialogContent>

      <DialogActions>
        <BaseLoadingButton
          color="primary"
          variant="contained"
          type="submit"
          form="change-section-layout-form"
          disabled={isSubmitting}
          loading={isSubmitting}
        >
          Save changes
        </BaseLoadingButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
