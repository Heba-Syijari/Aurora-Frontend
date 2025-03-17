import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditImpactConfig } from 'src/sections/builder/editors/impact';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { ImpactFourData } from '../types';
import { ImpactFourItem } from './impact-four-item';

export type ImpactFourProps = {
  data: ImpactFourData;
  setLocalData: (v: Partial<ImpactFourData>) => void;
  editMode?: boolean;
};

export default function ImpactFour({ data, editMode, setLocalData }: ImpactFourProps) {
  const { title, description, image, config } = data;

  return (
    <Box
      sx={{
        py: { xs: 6, md: 11 },
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.32) 100%), url('${image.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Impacts" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              setLocalData({ title: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'faq' })}
          >
            <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
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
            getMetadataInfo={() => ({ itemType: 'description', sectionType: 'faq' })}
          >
            <Typography variant="body1" fontSize={20} color={description.color} maxWidth={920}>
              {description.text}
            </Typography>
          </EditTextWrapper>
        </Stack>

        <Box sx={{ mt: 7 }}>
          <EditImpactConfig
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } });
            }}
          >
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
              {(config.impacts || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <ImpactFourItem
                    data={item}
                    titleTextColor={item.title}
                    descriptionTextColor={item.description}
                  />
                </Grid>
              ))}
            </Grid>
          </EditImpactConfig>
        </Box>
      </Container>
    </Box>
  );
}
