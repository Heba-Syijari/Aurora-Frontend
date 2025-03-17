import { Box, Card, Chip, Container, Grid, Stack, Typography } from '@mui/material';
// import { EditFeatureConfig } from 'src/sections/builder/editors/team';
import { EditFeatureConfig } from 'src/sections/builder/editors/features';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FeatureComponentName, FeatureThreeConfig, FeatureThreeData } from '../types';
import FeatureThreeItem from './feature-three-item';

export type FeatureThreeProps = {
  data: FeatureThreeData;
  editMode?: boolean;
  setLocalData: (v: Partial<FeatureThreeData>) => void;
};

export default function FeatureThree({ data, setLocalData, editMode }: FeatureThreeProps) {
  const { config, title, subTitle } = data;

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
          {subTitle && (
            <EditTextWrapper
              label="Subtitle"
              defaultValue={subTitle}
              onSave={(v) => {
                setLocalData({ subTitle: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'team' })}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                color={subTitle.color}
                letterSpacing="-0.02em"
                maxWidth={970}
                textTransform="capitalize"
              >
                {subTitle.text}
              </Typography>
            </EditTextWrapper>
          )}
        </Stack>

        <Box sx={{ mt: 7 }}>
          <EditFeatureConfig
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } as FeatureThreeConfig });
            }}
            name={FeatureComponentName.FEATURE_THREE}
          >
            <Card>
              <Grid container rowSpacing={7} justifyContent="center">
                {(config?.features || []).map((item, i) => (
                  <Grid key={i} item xs={12} sm={6} md={4}>
                    <FeatureThreeItem {...config} data={item} index={i} />
                  </Grid>
                ))}
              </Grid>
            </Card>
          </EditFeatureConfig>
        </Box>
      </Container>
    </Box>
  );
}
