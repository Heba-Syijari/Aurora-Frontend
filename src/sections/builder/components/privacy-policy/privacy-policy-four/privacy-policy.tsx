import { Box, Chip, Container, List, Stack, Typography } from '@mui/material';
import { EditTextWrapper } from 'src/sections/builder/editors/text';

import { EditPrivacyPolicyConfig } from 'src/sections/builder/editors/privacy-policy/edit-privacy-policy-config';
import { PrivacyPolicyFourData } from '../types';
import { PrivacyPolicyItem } from './privacy-policy-item';

export type PrivacyPolicyFourProps = {
  data: PrivacyPolicyFourData;
  setLocalData: (v: Partial<PrivacyPolicyFourData>) => void;
  editMode?: boolean;
};

export default function PrivacyPolicyFour({
  data,
  editMode,
  setLocalData,
}: PrivacyPolicyFourProps) {
  const { title, description, config } = data;

  return (
    <Box sx={{ pt: 11, pb: { xs: 6, md: 11 }, bgcolor: 'common.neutral' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Privacy Policy" />
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
          <EditPrivacyPolicyConfig
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } });
            }}
          >
            <List sx={{ pl: 2 }}>
              {(config.items || []).map((item, i) => (
                <li key={i} style={{ marginBottom: '16px' }}>
                  <PrivacyPolicyItem
                    index={i}
                    data={item}
                    titleColor={config.titleTextColor}
                    descriptionColor={config.descriptionTextColor}
                  />
                </li>
              ))}
            </List>
          </EditPrivacyPolicyConfig>
        </Box>
      </Container>
    </Box>
  );
}
