import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { EditFeatureConfig } from 'src/sections/builder/editors/features';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FeatureComponentName, FeatureSevenConfig, FeaureSevenData } from '../types';
import FeatureSevenItem from './feature-seven-item';

export type FeatureSevenProps = {
  data: FeaureSevenData;
  editMode?: boolean;
  setLocalData: (v: Partial<FeaureSevenData>) => void;
};

export default function FeatureSeven({ data, setLocalData, editMode }: FeatureSevenProps) {
  const { config, title } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const firstColor = paletteColorsMap['common.white'];
  const secondColor = paletteColorsMap['common.neutral'];
  return (
    <Box
      sx={{
        py: 11,
        background: `linear-gradient(to bottom,${firstColor} 50%, ${secondColor}  50%)`,
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
              setLocalData({ config: { ...config, ...updatedConfig } as FeatureSevenConfig });
            }}
            name={FeatureComponentName.FEATURE_SEVEN}
          >
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
              {(config?.features || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={3}>
                  <FeatureSevenItem {...config} data={item} index={i} />
                </Grid>
              ))}
            </Grid>
          </EditFeatureConfig>
        </Box>
      </Container>
    </Box>
  );
}
