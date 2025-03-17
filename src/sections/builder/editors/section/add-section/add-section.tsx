import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, Stack, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGetComponents } from 'src/api/component';
import FormProvider from 'src/components/hook-form';
import Iconify from 'src/components/iconify/iconify';
import Image from 'src/components/image/image';
import { BaseLoadingButton } from 'src/components/styled/button';
import { StyledRHFTabsGroup } from 'src/components/styled/radio';
import * as Yup from 'yup';
import { IconWrapper, StyledTab } from './styled';
import { TabPanel, a11yProps, tabs } from './tabs';

type AddSectionProps = {
  onAdd: (componentId: number) => Promise<void>;
};

export default function AddSection({ onAdd }: AddSectionProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const { components } = useGetComponents();

  const schema = Yup.object().shape({
    componentId: Yup.number().required('The component is required'),
  });

  const defaultValues = { componentId: 0 };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log({ data });
    await onAdd(data.componentId);
  });

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  useEffect(() => {
    const firstComponent = components.find((c) => c.type === tabs[tabIndex].type);
    if (firstComponent) {
      setValue('componentId', firstComponent.id);
    }
  }, [components, setValue, tabIndex]);

  return (
    <Grid container sx={{ backgroundColor: (theme) => theme.palette.background.default }}>
      <Grid item xs={12} md={6}>
        <Tabs
          orientation="vertical"
          value={tabIndex}
          onChange={handleChange}
          aria-label="component-tabs"
          TabIndicatorProps={{ sx: { display: 'none' } }}
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {tabs.map((tab, i) => (
            <StyledTab
              disabled={isSubmitting}
              sx={{ maxWidth: 1000, width: 1 }}
              label={
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  flex={1}
                >
                  <Stack alignItems="flex-start">
                    <Typography variant="h6">{tab.title}</Typography>

                    <Typography variant="body2" color="text.tertiary" fontWeight={500}>
                      {tab.description}
                    </Typography>
                  </Stack>

                  <Iconify icon="ri:arrow-right-s-line" width={24} />
                </Stack>
              }
              icon={<IconWrapper>{tab.icon}</IconWrapper>}
              iconPosition="start"
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </Grid>

      <Grid item xs={12} md={6}>
        <FormProvider id="add-section-form" methods={methods} onSubmit={onSubmit}>
          {tabs.map((tab, i) => (
            <TabPanel value={tabIndex} index={i} key={i}>
              <StyledRHFTabsGroup
                name="componentId"
                options={components
                  .filter((component) => component.type === tab.type)
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
            </TabPanel>
          ))}

          <Stack alignItems="flex-end" sx={{ px: 2 }}>
            <BaseLoadingButton
              color="primary"
              variant="contained"
              type="submit"
              form="add-section-form"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Add
            </BaseLoadingButton>
          </Stack>
        </FormProvider>
      </Grid>
    </Grid>
  );
}
