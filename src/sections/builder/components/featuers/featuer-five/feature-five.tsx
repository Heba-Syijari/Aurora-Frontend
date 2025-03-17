import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
// import { EditFeatureConfig } from 'src/sections/builder/editors/team';
import { useResponsive } from 'src/hooks/use-responsive';
import { EditFeatureConfig } from 'src/sections/builder/editors/features';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FeatureComponentName, FeatureConfig, FeaureFiveData } from '../types';
import FeatureFiveItem from './feature-five-item';

export type FeatureFiveProps = {
  data: FeaureFiveData;
  editMode?: boolean;
  setLocalData: (v: Partial<FeaureFiveData>) => void;
};

export default function FeatureFive({ data, setLocalData, editMode }: FeatureFiveProps) {
  const { config, title } = data;
  const mdUp = useResponsive('up', 'md');
  return (
    <Box py={11}>
      <Container maxWidth={mdUp ? 'md' : 'lg'}>
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
              setLocalData({ config: { ...config, ...updatedConfig } as FeatureConfig });
            }}
            name={FeatureComponentName.FEATURE_FIVE}
          >
            <Grid
              container
              columnSpacing={4}
              rowSpacing={4}
              alignItems="flex-start"
              justifyContent="center"
            >
              {(config?.features || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={4} md={4}>
                  <FeatureFiveItem {...config} data={item} />
                </Grid>
              ))}
            </Grid>
          </EditFeatureConfig>
        </Box>
      </Container>
    </Box>
  );
}
