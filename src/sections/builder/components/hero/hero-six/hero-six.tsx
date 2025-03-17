import { Box, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { EditImageWrapper } from 'src/sections/builder/editors/image';

import Iconify from 'src/components/iconify/iconify';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { HeroSixData } from '../types';

type Props = {
  data: HeroSixData;
  setLocalData: (v: Record<string, any>) => void;
  // onEdit: (data: HeroSixData) => void;

  editMode?: boolean;
};

export default function HeroSix({ data, editMode, setLocalData }: Props) {
  const theme = useTheme(); // hsn edits : to get the theme color so I can use them inside the UI
  const { button, description, title, image } = data;

  // ------------------------------------ Hsn edits : to make the Image Ediable  -----------------------------------
  // const localData = _.omitBy(data, _.isEmpty) as HeroSixData;
  // ------------------------------------ Hsn edits : to make the Image Ediable  -----------------------------------

  return (
    <Box
      sx={{
        backgroundImage: `url('${image.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 600,
        maxHeight: 600,
        position: 'relative',
        '&::before': {
          content: "' '",
          position: 'absolute',
          opacity: 0.5,
          backgroundColor: 'common.black', // edit this if not suitable
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
        mb: { lg: 10, sm: 6, xs: 8 },
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          maxWidth: 860,
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
            fontSize={{ xs: 35, lg: 55 }}
            color={title.color}
            sx={{
              textTransform: 'capitalize',

              // make text Gradient 45deg white to Primary
              background: `-webkit-repeating-linear-gradient(135deg,${theme.palette.primary.main}  0%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              // make Neon effacte
              textShadow: `${theme.palette.primary.main} 0px 0px 5px`,
            }}
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
          <Typography variant="h5" fontWeight={500} color={description.color} maxWidth={720}>
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
              startIcon={<Iconify icon={button.icon} width={25} height={25} color={button.color} />} // to add icon in the start of btn
              sx={{
                //                 padding: { xs: '8px 14px', md: '16px 28px' },
                // fontSize: { xs: '14', md: '18' },
                padding: '10px 28px',
                borderRadius: '6px',
                transition: 'all 0.5s',
                // transitionDuration: '1',

                color: button.color,
                backgroundColor: button.backgroundColor,
                fontSize: 18,
                '&:hover': {
                  transition: 'all 0.5s',
                  backgroundColor: `${theme.palette.background.neutral}`,
                },
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
