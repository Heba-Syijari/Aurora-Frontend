import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { EditFeatureConfig } from 'src/sections/builder/editors/features';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FeatureComponentName, FeatureConfig, FeatureElevenData } from '../types';
import FeaturElevenItem from './featuer-eleven-item';

export type FeatureElevenProps = {
  data: FeatureElevenData;
  editMode?: boolean;
  setLocalData: (v: Partial<FeatureElevenData>) => void;
};

export default function FeatureSix({ data, setLocalData, editMode }: FeatureElevenProps) {
  const { config, title } = data;

  return (
    <Box
      sx={{
        py: 11,
        // bgcolor: 'common.white',
      }}
    >
      <Container maxWidth="lg">
        {/* <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Feature" />
        </Box> */}

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
              setLocalData({ config: { ...config, ...updatedConfig } as FeatureConfig });
            }}
            name={FeatureComponentName.FEATURE_ELEVEN}
          >
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
              {(config?.features || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <FeaturElevenItem {...config} data={item} />
                </Grid>
              ))}
            </Grid>
          </EditFeatureConfig>
        </Box>
      </Container>
    </Box>
  );
}
