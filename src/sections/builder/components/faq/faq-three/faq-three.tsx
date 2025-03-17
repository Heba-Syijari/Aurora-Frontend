import { Box, Chip, Stack, Typography } from '@mui/material';
import { EditFAQConfig } from 'src/sections/builder/editors/faq';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { FAQThreeData } from '../types';
import { FAQThreeContent } from './faq-three-content';
import { FAQThreeItem } from './faq-three-item';

export type FAQThreeProps = {
  data: FAQThreeData;
  setLocalData: (v: Partial<FAQThreeData>) => void;
  editMode?: boolean;
};

export default function FAQThree({ data, editMode, setLocalData }: FAQThreeProps) {
  const { title, description, config } = data;

  return (
    <FAQThreeContent>
      <Stack spacing={3} alignItems="flex-start">
        <Box>
          <Chip label="FAQs" />

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
        </Box>

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

      <Box sx={{ mt: 5 }}>
        <EditFAQConfig
          defaultValue={config}
          editMode={editMode}
          onSave={(updatedConfig) => {
            setLocalData({ config: { ...config, ...updatedConfig } });
          }}
        >
          <Stack spacing={2.5} sx={{ mt: 5 }}>
            {(config.items || []).map((item, i) => (
              <FAQThreeItem
                key={i}
                data={item}
                answerColor={config.answerTextColor}
                questionColor={config.questionTextColor}
              />
            ))}
          </Stack>
        </EditFAQConfig>
      </Box>
    </FAQThreeContent>
  );
}
