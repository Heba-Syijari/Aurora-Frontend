import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import { EditTextWrapper } from 'src/sections/builder/editors/text';

import { CopyWriteTwoData } from '../types';

export type CopyWriteTwoProps = {
  data: CopyWriteTwoData;
  setLocalData: (v: Partial<CopyWriteTwoData>) => void;
  editMode?: boolean;
};

export default function CopyWriteTwo({ data, editMode, setLocalData }: CopyWriteTwoProps) {
  const { title, parabraph1, parabraph2, subtitle } = data;
  console.log(data);

  return (
    <Box sx={{ pt: 11, pb: { xs: 6, md: 11 }, bgcolor: 'common.neutral' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Privacy Policy" />
        </Box>

        <Stack spacing={2.5} alignItems="flex-start" textAlign="left">
          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              setLocalData({ title: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'faq' })}
          >
            <Typography
              variant="h2"
              textTransform="capitalize"
              fontWeight={700}
              color={title.color}
              letterSpacing="-0.02em"
            >
              {title.text}
            </Typography>
          </EditTextWrapper>

          <EditTextWrapper
            label="First Paragraph"
            defaultValue={parabraph1}
            onSave={(v) => {
              setLocalData({ parabraph1: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'parabraph1', sectionType: 'privacy policy' })}
          >
            <Typography variant="body1" fontSize={20} color={parabraph1.color} maxWidth={920}>
              {parabraph1.text}
            </Typography>
          </EditTextWrapper>
        </Stack>
        <br />
        <Stack spacing={2.5} alignItems="flex-start" textAlign="left">
          <EditTextWrapper
            label="SubTitle"
            defaultValue={subtitle}
            onSave={(v) => {
              setLocalData({ subtitle: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'privacy policy' })}
          >
            <Typography
              variant="h3"
              fontWeight={700}
              color={subtitle.color}
              letterSpacing="-0.02em"
              textTransform="capitalize"
            >
              {subtitle.text}
            </Typography>
          </EditTextWrapper>

          <EditTextWrapper
            label="Second Parabraph"
            defaultValue={parabraph2}
            onSave={(v) => {
              setLocalData({ parabraph2: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'parabraph2', sectionType: 'privacy policy' })}
          >
            <Typography variant="body1" fontSize={20} color={parabraph2.color} maxWidth={920}>
              {parabraph1.text}
            </Typography>
          </EditTextWrapper>
        </Stack>
      </Container>
    </Box>
  );
}
