import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
// import { EditFeatureConfig } from 'src/sections/builder/editors/team';
import { EditFeatureConfig } from 'src/sections/builder/editors/features';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FeatureComponentName, FeatureConfig, FeaureEightData } from '../types';
import FeatureEightItem from './feature-eight-item';

export type FeatureEightProps = {
  data: FeaureEightData;
  editMode?: boolean;
  setLocalData: (v: Partial<FeaureEightData>) => void;
};

export default function FeatureOne({ data, setLocalData, editMode }: FeatureEightProps) {
  const { config, title } = data;

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
              textTransform="uppercase"
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
              setLocalData({ config: { ...config, ...updatedConfig } as FeatureConfig });
            }}
            name={FeatureComponentName.FEATURE_EIGHT}
          >
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
              {(config?.features || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={6}>
                  <FeatureEightItem {...config} data={item} />
                </Grid>
              ))}
            </Grid>
          </EditFeatureConfig>
        </Box>
      </Container>
    </Box>
  );
}
