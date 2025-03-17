import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditFeatureConfig } from 'src/sections/builder/editors/features';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FeatureComponentName, FeatureConfig, FeaureThirteenData } from '../types';
import FeatureThirteenItem from './feature-thirteen-item';

export type FeatureThirteenProps = {
  data: FeaureThirteenData;
  editMode?: boolean;
  setLocalData: (v: Partial<FeaureThirteenData>) => void;
};

export default function FeatureThirteen({ data, setLocalData, editMode }: FeatureThirteenProps) {
  const { config, title, description, subtitle } = data;

  return (
    <Box py={5}>
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
          <EditTextWrapper
            label="Subtitle"
            defaultValue={subtitle}
            onSave={(v) => {
              setLocalData({ subtitle: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'Feature' })}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              color={subtitle.color}
              letterSpacing="-0.02em"
              maxWidth={970}
              textTransform="capitalize"
            >
              {subtitle.text}
            </Typography>
          </EditTextWrapper>
          <EditTextWrapper
            label="Description"
            defaultValue={description}
            onSave={(v) => {
              setLocalData({ description: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'Feature' })}
          >
            <Typography
              variant="body2"
              fontWeight={700}
              color={description.color}
              textTransform="capitalize"
            >
              {description.text}
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
              justifyContent="flex-start"
            >
              {(config?.features || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <FeatureThirteenItem {...config} data={item} index={i} />
                </Grid>
              ))}
            </Grid>
          </EditFeatureConfig>
        </Box>
      </Container>
    </Box>
  );
}
