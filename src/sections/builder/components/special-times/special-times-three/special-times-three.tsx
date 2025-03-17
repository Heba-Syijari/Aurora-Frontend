import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { SpecialTimesThreeData } from '../types';
import { SpecialTimesThreeContent } from './special-times-three-content';

export type SpecialTimesThreeProps = {
  data: SpecialTimesThreeData;
  setLocalData: (v: Partial<SpecialTimesThreeData>) => void;
  editMode?: boolean;
};

export default function SpecialTimesThree({
  data,
  editMode,
  setLocalData,
}: SpecialTimesThreeProps) {
  const { topic, title, description, image } = data;

  return (
    <Box sx={{ bgcolor: 'common.white' }}>
      <SpecialTimesThreeContent imageURL={image.url}>
        <Grid container justifyContent="space-between" rowSpacing={{ xs: 5, md: 0 }}>
          <Grid item xs={12} md={6}>
            <Stack spacing={3} alignItems="center">
              <Chip label="Special times" />

              <EditTextWrapper
                label="Topic"
                defaultValue={topic}
                onSave={(v) => {
                  setLocalData({ topic: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'topic', sectionType: 'special-time' })}
              >
                <Typography
                  variant="h3"
                  fontSize={{ sm: 40, md: 44, lg: 56 }}
                  fontWeight={600}
                  lineHeight="64px"
                  color={topic.color}
                >
                  {topic.text}
                </Typography>
              </EditTextWrapper>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack
              spacing={1}
              sx={{ p: 3.5, textAlign: 'center', bgcolor: 'common.white', borderRadius: '12px' }}
            >
              <EditTextWrapper
                label="Title"
                defaultValue={title}
                onSave={(v) => {
                  setLocalData({ title: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'title', sectionType: 'special-time' })}
              >
                <Typography variant="h4" fontWeight={600} color={title.color}>
                  {title.text}
                </Typography>
              </EditTextWrapper>

              <EditTextWrapper
                label="Description"
                defaultValue={description}
                onSave={(v) => {
                  setLocalData({ description: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'description', sectionType: 'special-time' })}
              >
                <Typography
                  variant="body1"
                  color={description.color}
                  sx={{ letterSpacing: '0.32px' }}
                >
                  {description.text}
                </Typography>
              </EditTextWrapper>
            </Stack>
          </Grid>
        </Grid>
      </SpecialTimesThreeContent>
    </Box>
  );
}
