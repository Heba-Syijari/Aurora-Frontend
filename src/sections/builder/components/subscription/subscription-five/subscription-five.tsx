import { Box, Chip, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { EditSubscriptionConfig } from 'src/sections/builder/editors/subscription';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { SubscriptionComponentName, SubscriptionFiveConfig, SubscriptionFiveData } from '../types';
import SubscriptionFiveItem from './subscription-five-item';

export type SubscriptionFiveProps = {
  data: SubscriptionFiveData;
  editMode?: boolean;
  setLocalData: (v: Partial<SubscriptionFiveData>) => void;
};

export default function SubscriptionFive({ data, setLocalData, editMode }: SubscriptionFiveProps) {
  const { config, title, subtitle } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap['background.neutral'];
  const lighterColor1 = lighten(baseColor, 0.3);
  const lighterColor2 = lighten(baseColor, 0.9);
  const renderFeaturesList = () => (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${lighterColor1}, ${lighterColor2} , ${lighterColor2})`,
      }}
    >
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'background.neutral',
          borderRadius: '2px 2px 16px 16px',
          p: 2,
          height: 115,
        }}
      >
        <EditTextWrapper
          label="Title"
          defaultValue={title}
          onSave={(v) => {
            setLocalData({ title: v });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'title', sectionType: 'subseription' })}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="left"
            color="text.primary"
            maxWidth={50}
            sx={{ textTransform: 'uppercase' }}
          >
            {title.text}
          </Typography>
        </EditTextWrapper>
        <EditTextWrapper
          label="Subtitle"
          defaultValue={subtitle}
          onSave={(v) => {
            setLocalData({ title: v });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'subseription' })}
        >
          <Typography
            ml={0.4}
            variant="caption"
            display="block"
            textAlign="start"
            color={subtitle.color}
          >
            {subtitle.text}
          </Typography>
        </EditTextWrapper>
      </Box>
      <Stack spacing={2} p={2}>
        {config.subscriptions
          .flatMap((item1) => item1.features)
          .map((item, index) => (
            <Stack key={index} spacing={3}>
              <Typography
                variant="body2"
                color={config.featuresTextColor!}
                sx={{ textAlign: 'start', fontWeight: 'medium' }}
              >
                {item}
              </Typography>
              {index < config.subscriptions.flatMap((item2) => item2.features).length - 1 && (
                <Divider sx={{ borderColor: 'grey.300' }} />
              )}
            </Stack>
          ))}
      </Stack>
    </Box>
  );
  return (
    <Box
      sx={{
        py: 11,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Subscription" />
        </Box>

        <EditSubscriptionConfig
          defaultValue={config}
          editMode={editMode}
          onSave={(updatedConfig) => {
            setLocalData({ config: { ...config, ...updatedConfig } as SubscriptionFiveConfig });
          }}
          name={SubscriptionComponentName.SUBSCRIPTION_FIVE}
        >
          <Grid
            container
            columnSpacing={2}
            rowSpacing={2}
            mt={5}
            justifyContent="center"
            alignItems="center"
            sx={{
              zoom: {
                lg: 1,
                md: 0.9,
                sm: 0.7,
                xs: 0.4,
              },
            }}
          >
            <Grid container columnSpacing={7} rowSpacing={7} justifyContent="center">
              <Grid item xs={3}>
                {renderFeaturesList()}
              </Grid>
              <Grid container columnSpacing={4} rowSpacing={7} item xs={9}>
                {(config?.subscriptions || []).map((item, i) => (
                  <Grid key={i} item xs={3}>
                    <SubscriptionFiveItem
                      config={config}
                      setLocalData={setLocalData}
                      editMode={editMode}
                      index={i}
                      data={item}
                      key={i}
                      featursList={config.subscriptions.flatMap((feature) => feature.features)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </EditSubscriptionConfig>
        {/* </Grid> */}
      </Container>
    </Box>
  );
}
