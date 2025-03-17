import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
// import { EditFeatureConfig } from 'src/sections/builder/editors/team';
import { EditSubscriptionConfig } from 'src/sections/builder/editors/subscription';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import {
  SubscriptionComponentName,
  SubscriptionThreeConfig,
  SubscriptionThreeData,
} from '../types';
import SubscriptionThreeItem from './subscription-three-item';

export type SubscriptionThreeProps = {
  data: SubscriptionThreeData;
  editMode?: boolean;
  setLocalData: (v: Partial<SubscriptionThreeData>) => void;
};

export default function SubscriptionOne({ data, setLocalData, editMode }: SubscriptionThreeProps) {
  const { config, title, subtitle } = data;

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

        <Stack spacing={2.5} alignItems="center" textAlign="center">
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
            getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'subseription' })}
          >
            <Typography variant="body1" fontSize={20} color={subtitle.color} maxWidth={920}>
              {subtitle.text}
            </Typography>
          </EditTextWrapper>
        </Stack>

        <EditSubscriptionConfig
          defaultValue={config}
          editMode={editMode}
          onSave={(updatedConfig) => {
            setLocalData({ config: { ...config, ...updatedConfig } as SubscriptionThreeConfig });
          }}
          name={SubscriptionComponentName.SUBSCRIPTION_THREE}
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
                  <SubscriptionThreeItem
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
