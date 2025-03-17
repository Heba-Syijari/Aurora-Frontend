import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { EditImageWrapper } from 'src/sections/builder/editors/image';

import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { HeroTenData } from '../types';

type Props = {
  data: HeroTenData;
  setLocalData: (v: Record<string, any>) => void;
  // onEdit: (data: HeroSixData) => void;

  editMode?: boolean;
};

export default function HeroTen({ data, editMode, setLocalData }: Props) {
  const theme = useTheme();
  const { title, image, tagline } = data;

  return (
    <Box
      sx={{
        mb: { lg: 10, sm: 6, xs: 8 },

        backgroundColor: 'background.neutral',
        backgroundImage: `url('${image.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: 600,
        maxHeight: 600,
        position: 'relative',
        '&::before': {
          content: "' '",
          position: 'absolute',
          opacity: 0.5,
          // backgroundColor: 'common.black', // edit this if not suitable
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
      }}
    >
      <Stack
        spacing={0}
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          // maxWidth: 860,
          margin: 'auto',
          textAlign: 'center',
          px: { xs: 1 },
          position: 'relative',
        }}
      >
        {editMode && (
          <EditImageWrapper
            defaultValue={image}
            onSave={(v) => {
              setLocalData({ image: v });
            }}
            editMode={editMode}
          >
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ color: 'white' }}>
                Edit Background Image
              </Typography>
            </Box>
          </EditImageWrapper>
        )}
        <EditTextWrapper
          label="Tagline"
          defaultValue={tagline}
          onSave={(v) => {
            setLocalData({ tagline: v });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'tagline', sectionType: 'hero' })}
        >
          <Typography
            variant="body1"
            letterSpacing="-0.02em"
            color={tagline.color}
            textTransform="uppercase"
          >
            {tagline.text}
          </Typography>
        </EditTextWrapper>

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
            // color={title.color}
            sx={{
              textTransform: 'capitalize',
              background: `-webkit-repeating-linear-gradient(135deg,  ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title.text}
          </Typography>
        </EditTextWrapper>
      </Stack>
    </Box>
  );
}
