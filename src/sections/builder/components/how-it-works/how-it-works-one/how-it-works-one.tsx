import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { HowItWorksOneData } from '../types';
import HowItWorksOneDataItem from './how-it-works-one-item';

export type HowItWorksOneProps = {
  data: HowItWorksOneData;
  editMode?: boolean;
  setLocalData: (v: Partial<HowItWorksOneData>) => void;
};

export default function HowItWorksOne({ data, setLocalData, editMode }: HowItWorksOneProps) {
  const { stages, title } = data;

  return (
    <Box py={15}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="How It works" />
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
          <Grid
            container
            columnSpacing={4}
            rowSpacing={4}
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            {stages.map((item, i) => (
              <Grid key={i} item xs={12} sm={6} md={3}>
                <HowItWorksOneDataItem
                  index={i}
                  editMode={editMode}
                  setLocalData={setLocalData}
                  data={stages}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
