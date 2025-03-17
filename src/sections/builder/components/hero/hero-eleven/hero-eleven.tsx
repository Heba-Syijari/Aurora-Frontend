import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { EditImageWrapper } from 'src/sections/builder/editors/image';

import Image from 'src/components/image/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { HeroElevenData } from '../types';

type Props = {
  data: HeroElevenData;
  setLocalData: (v: Record<string, any>) => void;
  // onEdit: (data: HeroSixData) => void;

  editMode?: boolean;
};

export default function HeroEleven({ data, editMode, setLocalData }: Props) {
  const theme = useTheme();
  const { title, image, backgroundImage } = data;

  return (
    <Box
      sx={{
        mb: { lg: 10, sm: 6, xs: 8 },

        backgroundColor: 'background.neutral',
        backgroundImage: `url('${backgroundImage.url}')`,
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
            defaultValue={backgroundImage}
            onSave={(v) => {
              setLocalData({ backgroundImage: v });
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

        <EditImageWrapper
          defaultValue={image}
          onSave={(v) => {
            setLocalData({ image: v });
          }}
          editMode={editMode}
        >
          <Stack sx={{ textAlign: 'center', mb: 2 }}>
            <Image
              alt={image.alt}
              src={image.url}
              sx={{
                height: 1,
                width: 1,
                maxHeight: '70px',
                objectFit: 'cover',
                borderRadius: '2px',
              }}
            />
          </Stack>
        </EditImageWrapper>

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
            sx={{
              textTransform: 'capitalize',
              // background: `-webkit-repeating-linear-gradient(135deg,  ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
              // WebkitBackgroundClip: 'text',
              // WebkitTextFillColor: 'transparent',
            }}
          >
            {title.text}
          </Typography>
        </EditTextWrapper>
      </Stack>
    </Box>
  );
}
