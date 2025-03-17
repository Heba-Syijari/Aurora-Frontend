import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { EditTextWrapper } from 'src/sections/builder/editors/text';

import { EditPrivacyPolicyConfig } from 'src/sections/builder/editors/privacy-policy/edit-privacy-policy-config';
import { PrivacyPolicyOneData } from '../types';
import { PrivacyPolicyItem } from './privacy-policy-item';

export type PrivacyPolicyOneProps = {
  data: PrivacyPolicyOneData;
  setLocalData: (v: Partial<PrivacyPolicyOneData>) => void;
  editMode?: boolean;
};

export default function PrivacyPolicyOne({ data, editMode, setLocalData }: PrivacyPolicyOneProps) {
  const { title, description, config } = data;
  // console.log(data);
  const theme = useTheme();
  return (
    <Box
      sx={{
        pt: 11,
        pb: { xs: 6, md: 11 },
        backgroundColor: `${theme.palette.background.neutral}`,

        // bgcolor: 'common.neutral'
      }}
    >
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
            <Stack spacing={4}>
              {(config.items || []).map((item, i) => (
                <PrivacyPolicyItem
                  key={i}
                  data={item}
                  titleColor={config.titleTextColor}
                  descriptionColor={config.descriptionTextColor}
                />
              ))}
            </Stack>
          </EditPrivacyPolicyConfig>
        </Box>
      </Container>
    </Box>
  );
}
