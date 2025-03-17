import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditFAQConfig } from 'src/sections/builder/editors/faq';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FAQOneData } from '../types';
import { FAQOneItem } from './faq-one-item';

export type FAQOneProps = {
  data: FAQOneData;
  setLocalData: (v: Partial<FAQOneData>) => void;
  editMode?: boolean;
};

export default function FAQOne({ data, editMode, setLocalData }: FAQOneProps) {
  const { title, description, config } = data;

  return (
    <Box
      sx={{
        pt: 11,
        backgroundColor: 'background.neutral',
        pb: { xs: 6, md: 11 },
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="FAQs" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              setLocalData({ title: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'faq' })}
          >
            <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
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
            getMetadataInfo={() => ({ itemType: 'description', sectionType: 'faq' })}
          >
            <Typography variant="body1" fontSize={20} color={description.color} maxWidth={920}>
              {description.text}
            </Typography>
          </EditTextWrapper>
        </Stack>

        <Box sx={{ mt: 7 }}>
          <EditFAQConfig
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } });
            }}
          >
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
              {(config.items || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <FAQOneItem
                    data={item}
                    answerColor={config.answerTextColor}
                    questionColor={config.questionTextColor}
                  />
                </Grid>
              ))}
            </Grid>
          </EditFAQConfig>
        </Box>
      </Container>
    </Box>
  );
}
