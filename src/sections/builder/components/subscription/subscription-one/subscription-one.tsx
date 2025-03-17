import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
// import { EditFeatureConfig } from 'src/sections/builder/editors/team';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { EditSubscriptionConfig } from 'src/sections/builder/editors/subscription';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { SubscriptionComponentName, SubscriptionOneConfig, SubscriptionOneData } from '../types';
import SubscriptionOneItem from './subscription-one-item';

export type SubscriptionOneProps = {
  data: SubscriptionOneData;
  editMode?: boolean;
  setLocalData: (v: Partial<SubscriptionOneData>) => void;
};

export default function SubscriptionOne({ data, setLocalData, editMode }: SubscriptionOneProps) {
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
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Subscription" />
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

        <EditSubscriptionConfig
          defaultValue={config}
          editMode={editMode}
          onSave={(updatedConfig) => {
            setLocalData({ config: { ...config, ...updatedConfig } as SubscriptionOneConfig });
          }}
          name={SubscriptionComponentName.SUBSCRIPTION_ONE}
        >
          <Grid
            container
            columnSpacing={2}
            rowSpacing={2}
            mt={5}
            justifyContent="center"
            alignItems="center"
          >
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
              {(config?.subscriptions || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={3}>
                  <SubscriptionOneItem
                    config={config}
                    setLocalData={setLocalData}
                    editMode={editMode}
                    index={i}
                    data={item}
                    key={i}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </EditSubscriptionConfig>
        {/* </Grid> */}
      </Container>
    </Box>
  );
}
