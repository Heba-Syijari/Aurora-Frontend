import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { HeroOneData } from '../types';

type Props = {
  data: HeroOneData;
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function HeroOne({ data, editMode, setLocalData }: Props) {
  const { button, description, title, image } = data;

  return (
    <Box
      sx={{
        height: 768,
        maxHeight: 768,
        mt: 10,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${image.url})`,
        // mb: 2,
        mb: { lg: 10, sm: 6, xs: 8 },

        // position: 'relative',
      }}
    >
      {/* <Box position="absolute" sx={{ top: 0, width: 1, height: 1, zIndex: 4 }}>
        <BackgroundImage />
      </Box> */}
      <Stack
        height="100%"
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: { xs: 300, sm: 600, md: 860 },
          margin: 'auto',
          // position: 'relative',
          // zIndex: 10,
        }}
      >
        <Card sx={{ p: 8, boxShadow: 0 }}>
          <Stack spacing={3} alignItems="center" justifyContent="center">
            {editMode && (
              <EditImageWrapper
                defaultValue={image}
                onSave={(v) => {
                  setLocalData({ image: v });
                }}
                editMode={editMode}
              >
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ color: '#000' }}>
                    Edit Background Image
                  </Typography>
                </Box>
              </EditImageWrapper>
            )}
            <EditTextWrapper
              label="Title"
              defaultValue={title}
              onSave={(v) => {
                setLocalData({ title: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'title', sectionType: 'hero' })}
            >
              <Typography
                variant="h1"
                letterSpacing="-1.2px"
                fontWeight={700}
                textAlign="center"
                fontSize={{ xs: 48, lg: 60 }}
                color={title.color}
              >
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
                variant="h5"
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
                    padding: '10px 28px',
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
  );
}
