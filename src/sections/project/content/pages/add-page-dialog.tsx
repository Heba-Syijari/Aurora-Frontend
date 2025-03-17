import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Box,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useGetComponents } from 'src/api/component';
import { useCreatePage } from 'src/api/page';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify/iconify';
import { useSnackbar } from 'src/components/snackbar';
import { BaseButton, BaseLoadingButton } from 'src/components/styled/button';
import { useProjectContext } from 'src/providers/project/project-context';
import { SectionSelection } from 'src/sections/generator/section-selection';
import { WebsiteSectionsType } from 'src/sections/generator/view/types';
import { ComponentVariation } from 'src/types/project';
import * as Yup from 'yup';

type Props = {
  open: boolean;
  onClose: () => void;
};

type PageType = 'blank' | 'customized';

export default function AddPageDialog({ open, onClose }: Props) {
  const { project, refetch } = useProjectContext();

  const { components } = useGetComponents();

  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();

  const { createPage } = useCreatePage();
  const [pageType, setPageType] = useState<PageType>('customized');
  const [selectedTabs, setSelectedTabs] = useState<WebsiteSectionsType>([
    {
      component: components.find((component) => component.type === ComponentVariation.HERO)?.id!,
      type: ComponentVariation.HERO,
    },
  ]);

  const schema = Yup.object().shape({
    title: Yup.string().required('The title is required'),
    description: Yup.string().required('The description is required'),
    sections: Yup.array()
      .of(
        Yup.object()
          .shape({
            order: Yup.number().required(),
            componentId: Yup.number().required(),
          })
          .required()
      )
      .min(1)
      .required(),
    generateAI: Yup.boolean().default(false),
  });

  const defaultValues = {
    title: '',
    description: '',
    generateAI: false,
    sections: [
      {
        order: 1,
        componentId: components.find((component) => component.type === ComponentVariation.HERO)
          ?.id!,
      },
    ],
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
    reset,
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data, 'data');
      await createPage({
        title: data.title,
        description: data.description,
        projectId: project.id,
        generateAI: data.generateAI,
        sections: data.sections,
      });

      await refetch();

      handleClose();
      enqueueSnackbar('Page successfully added');
    } catch (error) {
      console.error(error);
      enqueueErrorSnackbar(error.message, { autoHideDuration: 2500 });
    }
  });

  const handlePageTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPageType(event.target.value as PageType);
    const homePage = project.pages.find((item) => item.slug === 'home-page')!;
    const currentFooter = homePage.components.find(
      (component) => component.component.type === ComponentVariation.FOOTER
    );
    const footerInfo = {
      componentId: currentFooter!.componentId,
      order: 0,
    };
    setValue('sections', [footerInfo]);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setPageType('customized');
      reset();
    }
  };

  const renderAlert = (text: string) => (
    // eslint-disable-next-line react/jsx-no-undef
    <Alert
      severity="info"
      sx={{
        mb: 2,
        boxShadow: '0 0 0 1px #4E92FF',
        backgroundColor: '#EBF3FF',
        color: '#4E92FF',
        '& .MuiAlert-icon': {
          color: '#4E92FF',
        },
      }}
    >
      {text}
    </Alert>
  );
  // const { control } = useFormContext();

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography component="span" variant="h5">
            Add new page
          </Typography>

          <IconButton onClick={handleClose} disabled={isSubmitting} sx={{ p: 0 }}>
            <Iconify icon="material-symbols:close" />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ pt: 2 }}>
          <FormProvider id="add-page-form" methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2}>
              <FormGroup label="Title" labelFor="title">
                <RHFTextField
                  id="title"
                  name="title"
                  placeholder="Page title .e.g About us"
                  disabled={isSubmitting}
                />
              </FormGroup>

              <FormGroup label="Description" labelFor="description">
                <RHFTextField
                  id="description"
                  name="description"
                  placeholder="Page description"
                  multiline
                  rows={4}
                  disabled={isSubmitting}
                />
              </FormGroup>

              <FormGroup label="Menu for page or external link?" labelFor="menu-type">
                <RadioGroup
                  aria-labelledby="menu-type"
                  name="menu-type"
                  value={pageType}
                  onChange={handlePageTypeChange}
                >
                  <FormControlLabel value="black" control={<Radio />} label="Black Page" />
                  <FormControlLabel
                    value="customized"
                    control={<Radio />}
                    label="Customized Page"
                  />
                </RadioGroup>
              </FormGroup>

              {/* // {renderAlert('You can Generate all Content By Ai ')} */}
              <FormGroup
                label="Generate page content throughout Ai"
                labelFor="generateAI"
                sx={{ margin: 0 }}
              >
                <Controller
                  name="generateAI"
                  // control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      label="I need to generate content from Ai"
                      sx={{
                        marginX: '0px',
                        '.MuiFormControlLabel-label ': { marginX: 1 },
                      }}
                      control={<Checkbox {...field} checked={field.value} />}
                    />
                  )}
                />
              </FormGroup>

              {pageType === 'customized' && (
                <SectionSelection
                  data={selectedTabs}
                  onCancelClicked={() => {}}
                  withActionsGroup={false}
                  onSubmitClicked={(values) => {
                    setSelectedTabs(values);
                    setValue(
                      'sections',
                      values.map((tab, index) => ({ componentId: tab.component, order: index }))
                    );
                  }}
                />
              )}
            </Stack>
          </FormProvider>
        </Box>
      </DialogContent>

      <DialogActions>
        <BaseButton variant="outlined" onClick={handleClose} disabled={isSubmitting}>
          Cancel
        </BaseButton>

        <BaseLoadingButton
          color="primary"
          variant="contained"
          disabled={isSubmitting}
          loading={isSubmitting}
          form="add-page-form"
          type="submit"
        >
          Add
        </BaseLoadingButton>
      </DialogActions>
    </Dialog>
  );
}
