import { Box, Button, Chip, Divider, Grid, Stack, Typography } from '@mui/material';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { AboutOneData } from '../types';

export type AboutOneProps = {
  data: AboutOneData;
  setLocalData: (v: Partial<AboutOneData>) => void;
  editMode?: boolean;
};

export default function AboutOne({ data, setLocalData, editMode }: AboutOneProps) {
  const { title, description, subtitle, button } = data;

  return (
    <Box my={5}>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Chip label="About" />
      </Box>

      <Grid container columnSpacing={4} rowSpacing={1}>
        <Grid item xs={12} md={6} bgcolor={button.backgroundColor}>
          <Stack
            spacing={3}
            alignItems="center"
            justifyContent="center"
            sx={{ height: '100%' }}
            p={4}
            width={{ xs: '100%', lg: '70%' }}
          >
            <EditTextWrapper
              label="Title"
              defaultValue={title}
              onSave={(v) => {
                setLocalData({ title: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'title', sectionType: 'features' })}
            >
              <Typography
                variant="h3"
                fontWeight={400}
                color={title.color}
                maxWidth={{ xs: 1, lg: 150 }}
                textAlign={{ xs: 'center', lg: 'start' }}
              >
                {title.text}
              </Typography>
            </EditTextWrapper>
            <Divider
              sx={{
                width: 50,
                height: '1px',
                bgcolor: '#ffff',
              }}
            />
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
                  padding: '5px',
                  borderRadius: '0px',
                  color: button.color,
                  backgroundColor: button.backgroundColor,
                  fontSize: 18,
                }}
              >
                {button.text}
              </Button>
            </EditButtonWrapper>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack
            spacing={3}
            alignItems={{ xs: 'center', lg: 'flex-start' }}
            justifyContent="center"
            sx={{ height: '100%' }}
            p={4}
            pb={{ xs: 4, lg: 8 }}
          >
            <EditTextWrapper
              label="Subtitle"
              defaultValue={subtitle}
              onSave={(v) => {
                setLocalData({ subtitle: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'features' })}
            >
              <Typography variant="h4" fontWeight={400} color={subtitle.color}>
                {subtitle.text}
              </Typography>
            </EditTextWrapper>
            <EditTextWrapper
              label="Description"
              defaultValue={description}
              onSave={(v) => {
                setLocalData({ description: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'description', sectionType: 'features' })}
            >
              <Typography
                variant="body1"
                fontWeight={400}
                color={description.color}
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                  textAlign: { xs: 'center', lg: 'start' },
                  mx: 1,
                }}
              >
                {description.text}
              </Typography>
            </EditTextWrapper>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
