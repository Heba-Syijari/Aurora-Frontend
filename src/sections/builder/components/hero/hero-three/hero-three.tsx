import { Box, Button, Stack, Typography } from '@mui/material';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { HeroThreeData } from '../types';

type Props = {
  data: HeroThreeData;
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function HeroThree({ data, editMode, setLocalData }: Props) {
  const { button, description, title } = data;

  return (
    <Box
      sx={{
        bgcolor: 'background.nuteral',
        height: 600,
        maxHeight: 768,
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
          textAlign: 'center',
          px: { xs: 1 },
        }}
      >
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
            maxWidth={720}
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
