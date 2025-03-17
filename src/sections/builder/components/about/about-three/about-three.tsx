import { Box, Button, Card, Chip, Stack, Typography } from '@mui/material';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { AboutThreeData } from '../types';

export type AboutThreeProps = {
  data: AboutThreeData;
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function AboutThree({ data, editMode, setLocalData }: AboutThreeProps) {
  const { button, description, title, image } = data;

  return (
    <Box my={5}>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Chip label="About" />
      </Box>
      <Box
        sx={{
          height: 600,
          maxHeight: 600,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${image.url})`,
        }}
      >
        <Stack
          height="100%"
          alignItems="center"
          justifyContent="center"
          sx={{
            maxWidth: 860,
            margin: 'auto',
          }}
        >
          <Card sx={{ p: 8, boxShadow: 0 }}>
            <Stack spacing={3} alignItems="center" justifyContent="center">
              <EditTextWrapper
                label="Title"
                defaultValue={title}
                onSave={(v) => {
                  setLocalData({ title: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'title', sectionType: 'hero' })}
              >
                <Typography variant="h3" fontWeight={700} textAlign="center" color={title.color}>
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
                getMetadataInfo={() => ({ itemType: 'description', sectionType: 'hero' })}
              >
                <Typography
                  variant="h6"
                  sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    textOverflow: 'ellipsis',
                    overflowY: 'hidden',
                    textAlign: 'center',
                    mx: 1,
                  }}
                  fontWeight={500}
                  color={description.color}
                >
                  {description.text}
                </Typography>
              </EditTextWrapper>

              <Box sx={{ mt: 1 }}>
                <EditButtonWrapper
                  defaultValue={button}
                  onSave={(v) => {
                    setLocalData({ button: v });
                  }}
                  editMode={editMode}
                >
                  <Button
                    variant="text"
                    href={button.linkTo}
                    sx={{
                      padding: '16px 28px',
                      borderRadius: '6px',
                      color: button.color,
                      backgroundColor: button.backgroundColor,
                      fontSize: 18,
                    }}
                  >
                    {button.text}
                  </Button>
                </EditButtonWrapper>
              </Box>
            </Stack>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}
