import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { HeroTwoData } from '../types';

type Props = {
  data: HeroTwoData;
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function HeroTwo({ data, editMode, setLocalData }: Props) {
  const { button, description, title } = data;

  return (
    <Box
      sx={{
        m: 1,
        mt: 0.7,
        bgcolor: 'primary.main',
        borderRadius: 6,
        height: 500,
        maxHeight: 768,
        mb: { lg: 10, sm: 6, xs: 8 },
      }}
    >
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          maxWidth: 860,
          margin: 'auto',
          px: { xs: 1, md: 4, sm: 4, lg: 4 },
        }}
      >
        <Grid
          container
          columnSpacing={4}
          rowSpacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={5}>
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
          </Grid>
          <Grid item xs={12} md={7}>
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
                  textAlign: 'start',
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
                    mt: '20px',
                    ml: 1,
                    padding: '10px 28px',
                    borderRadius: '0px',
                    color: button.color,
                    borderTop: '1px solid',
                    borderColor: button.color,
                    backgroundColor: button.backgroundColor,
                    fontSize: 18,
                  }}
                >
                  {button.text}
                </Button>
              </EditButtonWrapper>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
