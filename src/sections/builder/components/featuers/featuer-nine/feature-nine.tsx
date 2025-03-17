import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditFeatureConfig } from 'src/sections/builder/editors/features';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FeatureComponentName, FeaureNineData } from '../types';
import { FeatureNineContent } from './feature-nine-content';
import FeatureNineItem from './feature-nine-item';

export type FeatureNineProps = {
  data: FeaureNineData;
  editMode?: boolean;
  setLocalData: (v: Partial<FeaureNineData>) => void;
};

export default function FeatureSeven({ data, setLocalData, editMode }: FeatureNineProps) {
  const { config, title } = data;

  return (
    <Box py={11}>
      <FeatureNineContent>
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

          <Box sx={{ mt: 7 }}>
            <EditFeatureConfig
              defaultValue={config}
              editMode={editMode}
              onSave={(updatedConfig) => {
                setLocalData({ config: { ...config, ...updatedConfig } });
              }}
              name={FeatureComponentName.FEATURE_NINE}
            >
              <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
                {(config?.features || []).map((item, i) => (
                  <Grid key={i} item xs={12} sm={6} md={3}>
                    <FeatureNineItem {...config} data={item} />
                  </Grid>
                ))}
              </Grid>
            </EditFeatureConfig>
          </Box>
        </Container>
      </FeatureNineContent>
    </Box>
  );
}
