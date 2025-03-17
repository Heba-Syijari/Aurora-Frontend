import { Container, Grid, Stack, Typography } from '@mui/material';
import { EditFAQConfig } from 'src/sections/builder/editors/faq';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FAQSixData } from '../types';
import { FAQSixItem } from './faq-six-item';

export type FAQSixProps = {
  data: FAQSixData;
  setLocalData: (v: Partial<FAQSixData>) => void;
  editMode?: boolean;
};

export default function FAQSix({ data, editMode, setLocalData }: FAQSixProps) {
  const { title, description, config } = data;

  return (
    <Container
      sx={{
        paddingY: 11,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Stack spacing={2} alignItems="flex-start" sx={{ height: '100%', paddingRight: 7 }}>
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
              <Typography variant="body1" fontSize={20} color={description.color}>
                {description.text}
              </Typography>
            </EditTextWrapper>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <EditFAQConfig
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } });
            }}
          >
            <Stack
              spacing={2.5}
              sx={{
                height: '100%',
                // maxHeight: 374,
                overflowY: 'auto',
              }}
            >
              {(config.items || []).map((item, i) => (
                <FAQSixItem
                  key={i}
                  data={item}
                  answerColor={config.answerTextColor}
                  questionColor={config.questionTextColor}
                />
              ))}
            </Stack>
          </EditFAQConfig>
        </Grid>
      </Grid>
    </Container>
  );
}
