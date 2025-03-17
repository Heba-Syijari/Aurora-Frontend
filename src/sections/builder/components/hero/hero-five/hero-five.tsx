import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { HeroFiveData } from '../types';

type Props = {
  data: HeroFiveData;
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function HeroFive({ data, editMode, setLocalData }: Props) {
  const { button, description, tagline, title, image } = data;
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.background.neutral}`,

        height: 600,
        maxHeight: 600,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${image.url})`,
        mb: { lg: 10, sm: 6, xs: 8 },
      }}
    >
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          maxWidth: 860,
          margin: 'auto',
          px: { xs: 1, sm: 4, lg: 9 },
        }}
      >
        <EditTextWrapper
          label="Tagline"
          defaultValue={tagline}
          onSave={(v) => {
            setLocalData({ tagline: v });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'tagline', sectionType: 'hero' })}
          disableEditColor
        >
          <Chip
            label={tagline.text}
            sx={{
              textTransform: 'capitalize',
              boxShadow: '0px 1px 2px 0px rgba(105, 81, 255, 0.05)',
            }}
          />
        </EditTextWrapper>
        {editMode && (
          <EditImageWrapper
            defaultValue={image}
            onSave={(v) => {
              setLocalData({ image: v });
            }}
            editMode={editMode}
          >
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ color: 'primary.main' }}>
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
            fontWeight={700}
            fontSize={{ xs: 48 }}
            lineHeight="60px"
            letterSpacing="-0.02em"
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
              textTransform: 'capitalize',
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
              variant="contained"
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
    </Box>
  );
}
