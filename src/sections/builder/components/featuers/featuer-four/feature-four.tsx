import { Box, Card, Chip, Container, Grid, Stack, Typography } from '@mui/material';
// import { EditFeatureConfig } from 'src/sections/builder/editors/team';
import { EditFeatureConfig } from 'src/sections/builder/editors/features';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FeatureComponentName, FeaureFourData } from '../types';
import FeatureFourItem from './feature-four-item';

export type FeatureFourProps = {
  data: FeaureFourData;
  editMode?: boolean;
  setLocalData: (v: Partial<FeaureFourData>) => void;
};

export default function FeatureThree({ data, setLocalData, editMode }: FeatureFourProps) {
  const { config, title, images } = data;
  const featuresNumber = config?.features.length;
  return (
    <Box py={11}>
      <Container maxWidth="md">
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

        <Box sx={{ mt: 7 }}>
          <EditFeatureConfig
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } });
            }}
            name={FeatureComponentName.FEATURE_FOUR}
          >
            <Card>
              <Grid container rowSpacing={7} justifyContent="center">
                <Grid item xs={12} sm={6} md={6}>
                  <FeatureFourItem
                    {...config}
                    data={config?.features.slice(0, featuresNumber / 2)}
                    image={images[0]}
                    index={0}
                    images={images}
                    setLocalData={setLocalData}
                    editMode={editMode}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FeatureFourItem
                    {...config}
                    data={config?.features.slice(featuresNumber / 2, featuresNumber)}
                    image={images[1]}
                    index={1}
                    images={images}
                    setLocalData={setLocalData}
                    editMode={editMode}
                  />
                </Grid>
              </Grid>
            </Card>
          </EditFeatureConfig>
        </Box>
      </Container>
    </Box>
  );
}
