import { Box, Button, Stack, Typography } from '@mui/material';

import Iconify from 'src/components/iconify/iconify';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { HeroEightData } from '../types';

type Props = {
  data: HeroEightData;
  setLocalData: (v: Record<string, any>) => void;
  // onEdit: (data: HeroSixData) => void;

  editMode?: boolean;
};

export default function HeroEigth({ data, editMode, setLocalData }: Props) {
  // hsn edits : to get the theme color so I can use them inside the UI
  const { button, description, title, image } = data;

  return (
    <Box
      sx={{
        mb: { lg: 10, sm: 6, xs: 8 },
        backgroundImage: `url('${image.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 600,
        maxHeight: 600,
        // margin: 2,
        // marginBottom: 10,
        padding: 2, // 4 * 8px matching to the layout by hsn
        borderRadius: 5, // matching to the layout by hsn
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
            fontSize={{ xs: 38, lg: 50 }}
            color={title.color}
            sx={{
              textTransform: 'capitalize',
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
          <Typography
            variant="body1" // ? edit this if not ok
            fontWeight={500}
            color={description.color}
            maxWidth={720}
            sx={{
              textTransform: 'capitalize',
            }}
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
              startIcon={<Iconify icon={button.icon} width={25} height={25} color={button.color} />} // to add icon in the start of btn
              sx={{
                padding: '10px 28px',
                borderRadius: '6px',
                color: button.color,
                backgroundColor: button.backgroundColor,
                // background: `# FFFFFF `,
                fontSize: 18,
                '&:hover': {
                  color: button.backgroundColor,
                  // backgroundColor: button.color,
                  // background: `-webkit-linear-gradient(45deg, ${theme.palette.primary.main}  30%, #FFFFFF  90%)`,
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
