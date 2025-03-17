import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
// import { EditFeatureConfig } from 'src/sections/builder/editors/team';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { EditFeatureConfig } from 'src/sections/builder/editors/features';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FeatureComponentName, FeatureConfig, FeaureOneData } from '../types';
import FeatureOneItem from './feature-one-item';

export type FeatureOneProps = {
  data: FeaureOneData;
  editMode?: boolean;
  setLocalData: (v: Partial<FeaureOneData>) => void;
};

export default function FeatureOne({ data, setLocalData, editMode }: FeatureOneProps) {
  const { config, title } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const firstColor = paletteColorsMap['common.neutral'];
  const secondColor = paletteColorsMap['common.white'];
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
              setLocalData({ config: { ...config, ...updatedConfig } as FeatureConfig });
            }}
            name={FeatureComponentName.FEATURE_ONE}
          >
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
              {(config?.features || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={3}>
                  <FeatureOneItem {...config} data={item} />
                </Grid>
              ))}
            </Grid>
          </EditFeatureConfig>
        </Box>
      </Container>
    </Box>
  );
}
