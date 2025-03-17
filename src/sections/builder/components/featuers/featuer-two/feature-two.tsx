import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
// import { EditFeatureConfig } from 'src/sections/builder/editors/team';
import { LoadingButton } from '@mui/lab';
import Iconify from 'src/components/iconify';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditFeatureConfig } from 'src/sections/builder/editors/features';
import { EditServiceConfig } from 'src/sections/builder/editors/features/services';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FeatureComponentName, FeatureConfig, FeaureTwoData, ServicesConfig } from '../types';
import FeatureTwoItem from './feature-two-item';

export type FeatureTwoProps = {
  data: FeaureTwoData;
  editMode?: boolean;
  setLocalData: (v: Partial<FeaureTwoData>) => void;
};

export default function FeatureTwo({ data, setLocalData, editMode }: FeatureTwoProps) {
  const { config, title, button, servicesCongig, servicesTitle } = data;

  return (
    <Box
      sx={{
        py: 11,
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Feature" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              setLocalData({ title: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'Feature' })}
          >
            <Typography
              variant="h2"
              fontWeight={700}
              color={title.color}
              letterSpacing="-0.02em"
              maxWidth={970}
              textTransform="capitalize"
            >
              {title.text}
            </Typography>
          </EditTextWrapper>
        </Stack>

        <Grid
          container
          columnSpacing={{ md: 4, xs: 1 }}
          rowSpacing={7}
          mt={5}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={7}>
            <EditFeatureConfig
              defaultValue={config}
              editMode={editMode}
              onSave={(updatedConfig) => {
                setLocalData({ config: { ...config, ...updatedConfig } as FeatureConfig });
              }}
              name={FeatureComponentName.FEATURE_TWO}
            >
              <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
                {(config?.features || []).map((item, i) => (
                  <Grid key={i} item xs={12} md={6}>
                    <FeatureTwoItem {...config} data={item} />
                  </Grid>
                ))}
              </Grid>
            </EditFeatureConfig>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            md={4}
            alignItems={{ md: 'flex-start', xs: 'center' }}
          >
            <Stack spacing={2} alignItems="flex-start" textAlign="start">
              <EditTextWrapper
                label="Services Title"
                defaultValue={servicesTitle}
                onSave={(v) => {
                  setLocalData({ servicesTitle: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'servicesTitle', sectionType: 'Feature' })}
              >
                <Typography
                  variant="h3"
                  textAlign={{ md: 'start', xs: 'center' }}
                  fontWeight={700}
                  color={servicesTitle.color}
                  textTransform="capitalize"
                >
                  {servicesTitle.text}
                </Typography>
              </EditTextWrapper>
              <EditServiceConfig
                defaultValue={servicesCongig}
                editMode={editMode}
                onSave={(updatedConfig) => {
                  setLocalData({
                    servicesCongig: { ...servicesCongig, ...updatedConfig } as ServicesConfig,
                  });
                }}
              >
                {servicesCongig.services.map((service) => (
                  <Stack
                    spacing={2}
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Iconify icon="si:check-fill" color="primary.main" />
                    <Typography variant="body2" color={servicesCongig.servicesColor}>
                      {service}
                    </Typography>
                  </Stack>
                ))}
              </EditServiceConfig>
              <EditButtonWrapper
                defaultValue={button}
                onSave={(v) => {
                  setLocalData({ button: v });
                }}
                editMode={editMode}
              >
                <LoadingButton
                  variant="contained"
                  type="submit"
                  sx={{
                    padding: '16px 28px',
                    color: button.color,
                    backgroundColor: button.backgroundColor,
                    '&:hover': {
                      backgroundColor: button.color,
                      color: button.backgroundColor,
                      outline: `1px solid`,
                      outlineColor: button.backgroundColor,
                      outlineOffset: -1,
                    },
                    width: 250,
                    borderRadius: 20,
                    mt: 2,
                  }}
                >
                  {button.text}
                </LoadingButton>
              </EditButtonWrapper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
