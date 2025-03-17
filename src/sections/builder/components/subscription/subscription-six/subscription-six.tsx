import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditSubscriptionConfig } from 'src/sections/builder/editors/subscription';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { SubscriptionComponentName, SubscriptionSixConfig, SubscriptionSixData } from '../types';
import SubscriptionSixItem from './subscription-six-item';

export type SubscriptionSixProps = {
  data: SubscriptionSixData;
  editMode?: boolean;
  setLocalData: (v: Partial<SubscriptionSixData>) => void;
};

export default function SubscriptionSix({ data, setLocalData, editMode }: SubscriptionSixProps) {
  const { config, title, description, subtitle } = data;

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
          <Stack>
            <EditTextWrapper
              label="Subtitle"
              defaultValue={subtitle}
              onSave={(v) => {
                setLocalData({ subtitle: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'subseription' })}
            >
              <Typography variant="h6" color={subtitle.color} maxWidth={920}>
                {subtitle.text}
              </Typography>
            </EditTextWrapper>
            <EditTextWrapper
              label="Description"
              defaultValue={description}
              onSave={(v) => {
                setLocalData({ subtitle: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'description', sectionType: 'subseription' })}
            >
              <Typography variant="body1" color={description.color} maxWidth={920}>
                {description.text}
              </Typography>
            </EditTextWrapper>
          </Stack>
        </Stack>

        <EditSubscriptionConfig
          defaultValue={config}
          editMode={editMode}
          onSave={(updatedConfig) => {
            setLocalData({ config: { ...config, ...updatedConfig } as SubscriptionSixConfig });
          }}
          name={SubscriptionComponentName.SUBSCRIPTION_SIX}
        >
          <Grid
            container
            columnSpacing={4}
            rowSpacing={4}
            mt={5}
            justifyContent="center"
            alignItems="center"
            px={2}
          >
            {(config?.subscriptions || []).map((item, i) => (
              <Grid key={i} item xs={12} sm={6} md={4} alignSelf="stretch">
                <SubscriptionSixItem
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
        </EditSubscriptionConfig>
      </Container>
    </Box>
  );
}
