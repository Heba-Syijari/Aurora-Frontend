import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import { EditFAQConfig } from 'src/sections/builder/editors/faq';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FAQFourData } from '../types';
import { FAQFourItem } from './faq-four-item';

export type FAQFourProps = {
  data: FAQFourData;
  setLocalData: (v: Partial<FAQFourData>) => void;
  editMode?: boolean;
};

export default function FAQFour({ data, editMode, setLocalData }: FAQFourProps) {
  const { title, description, config } = data;

  return (
    <Box
      sx={{
        pt: 11,
        pb: { xs: 6, md: 11 },
        // backgroundColor: `${theme.palette.background.neutral}`,

        // bgcolor: 'common.neutral'
      }}
    >
      <Container id="FAQ">
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

        <Box sx={{ mt: 8 }}>
          <EditFAQConfig
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } });
            }}
          >
            <Stack spacing={4}>
              {(config.items || []).map((item, i) => (
                <FAQFourItem
                  key={i}
                  data={item}
                  answerColor={config.answerTextColor}
                  questionColor={config.questionTextColor}
                />
              ))}
            </Stack>
          </EditFAQConfig>
        </Box>
      </Container>
    </Box>
  );
}
