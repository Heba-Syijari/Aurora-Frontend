import { Box, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { EditFAQConfig } from 'src/sections/builder/editors/faq';
import { EditTextWrapper } from 'src/sections/builder/editors/text';

import { FAQFiveData } from '../types';
import { FAQFiveItem } from './faq-five-item';

export type FAQFiveProps = {
  data: FAQFiveData;
  setLocalData: (v: Partial<FAQFiveData>) => void;
  editMode?: boolean;
};

export default function FAQFive({ data, editMode, setLocalData }: FAQFiveProps) {
  const { title, description, config } = data;
  const theme = useTheme();
  // const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  // const baseColor = paletteColorsMap['common.neutral'];
  return (
    <Box
      sx={{
        paddingY: 7,
      }}
    >
      <Container>
        <Stack spacing={10} alignItems="center">
          <Box>
            <Stack spacing={2} alignItems="center">
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
                  sx={{
                    backgroundImage: `linear-gradient(45deg,${theme.palette.primary.main} 0%,${theme.palette.secondary.main} 90%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                  variant="h2"
                  fontWeight={700}
                  color={title.color}
                  letterSpacing="-0.02em"
                >
                  {title.text}
                </Typography>
              </EditTextWrapper>
            </Stack>
          </Box>

          <Box
            sx={{
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'background.secondary',
              maxWidth: '60%',
              maxHeight: '100%',
              p: 2,
              borderTop: 5,
              borderTopColor: 'secondary.main',
              borderRadius: 1,
            }}
          >
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
                  transition: 'all ease-in-out 0.5s',
                }}
              >
                {(config.items || []).map((item, i) => (
                  <FAQFiveItem
                    key={i}
                    data={item}
                    answerColor={config.answerTextColor}
                    questionColor={config.questionTextColor}
                  />
                ))}
              </Stack>
            </EditFAQConfig>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
