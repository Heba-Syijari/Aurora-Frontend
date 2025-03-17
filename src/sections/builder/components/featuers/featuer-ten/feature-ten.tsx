import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditFeatureConfig } from 'src/sections/builder/editors/features';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FeatureComponentName, FeatureTenConfig, FeaureTenData } from '../types';
import FeatureTenItem from './feature-ten-item';

export type FeatureTenProps = {
  data: FeaureTenData;
  editMode?: boolean;
  setLocalData: (v: Partial<FeaureTenData>) => void;
};

export default function FeatureTen({ data, setLocalData, editMode }: FeatureTenProps) {
  const { config, image, title } = data;
  const featuresNumber = config?.features.length;
  return (
    <Box
      py={11}
      position="relative"
      sx={{
        backgroundImage: `url(${image.url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container sx={{ zIndex: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Feature" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          {editMode && (
            <EditImageWrapper
              defaultValue={image}
              onSave={(v) => {
                setLocalData({ image: v });
              }}
              editMode={editMode}
            >
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h6">Edit Background Image</Typography>
              </Box>
            </EditImageWrapper>
          )}
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

        <Box sx={{ mt: 7 }}>
          <EditFeatureConfig
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } as FeatureTenConfig });
            }}
            name={FeatureComponentName.FEATURE_TEN}
          >
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="flex-start">
              <Grid item sm={6} md={4} xs={12}>
                {(config?.features.slice(0, featuresNumber / 2) || []).map((item, i) => (
                  <Grid key={`group1${i}`} item md={12}>
                    <FeatureTenItem {...config} data={item} index={i + 1} />
                  </Grid>
                ))}
              </Grid>
              <Grid item sm={6} md={4} xs={12} mt={{ lg: 15, md: 15, sm: 15, xs: 0 }}>
                {(config?.features.slice(featuresNumber / 2, featuresNumber) || []).map(
                  (item, i) => (
                    <Grid key={`group2${i}`} md={12}>
                      <FeatureTenItem {...config} data={item} index={i} />
                    </Grid>
                  )
                )}
              </Grid>
            </Grid>
          </EditFeatureConfig>
        </Box>
      </Container>
    </Box>
  );
}
