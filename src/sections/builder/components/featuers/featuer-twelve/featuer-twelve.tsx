import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { EditFeatureConfig } from 'src/sections/builder/editors/features';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FeatureComponentName, FeatureConfig, FeatureTwelveData } from '../types';
import FeaturTwelveItem from './featuer-twelve-item';

export type FeatureTwelveProps = {
  data: FeatureTwelveData;
  editMode?: boolean;
  setLocalData: (v: Partial<FeatureTwelveData>) => void;
};

export default function FeatureTwelve({ data, setLocalData, editMode }: FeatureTwelveProps) {
  const theme = useTheme();
  const { config, title, postTitle } = data;
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap[title.color];
  const lighterColor = lighten(baseColor, 0.6);

  ///
  //      background: linear-gradient(135deg, ${baseColor}, ${lighterColor}),

  // ///

  //      background: linear-gradient(to bottom, ${baseColor}, ${lighterColor}),

  return (
    <Box
      sx={{
        py: 11,
        // backgroundColor: `${theme.palette.background.neutral}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <EditTextWrapper
            label="Post Title"
            defaultValue={postTitle}
            onSave={(v) => {
              setLocalData({ postTitle: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'postTitle', sectionType: 'Feature' })}
          >
            <Typography
              variant="body1"
              // fontWeight={700}
              color={postTitle.color}
              letterSpacing="0.1em"
              // maxWidth={970}
              textTransform="uppercase"
            >
              {postTitle.text}
            </Typography>
          </EditTextWrapper>
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
              // color={title.color}
              letterSpacing="-0.02em"
              maxWidth={970}
              textTransform="capitalize"
              sx={{
                background: `linear-gradient(to right,  ${lighterColor},${baseColor})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
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
            name={FeatureComponentName.FEATURE_TWELVE}
          >
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
              {(config?.features || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <FeaturTwelveItem {...config} data={item} />
                </Grid>
              ))}
            </Grid>
          </EditFeatureConfig>
        </Box>
      </Container>
    </Box>
  );
}
