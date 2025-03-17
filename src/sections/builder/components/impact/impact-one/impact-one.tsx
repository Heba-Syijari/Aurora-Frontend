import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'src/components/image';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditImpactConfig } from 'src/sections/builder/editors/impact';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { ImpactOneData } from '../types';
import ImpactOneItem from './impact-one-item';

export type ImpactOneProps = {
  data: ImpactOneData;
  setLocalData: (v: Partial<ImpactOneData>) => void;
  editMode?: boolean;
};

export default function ImpactOne({ data, editMode, setLocalData }: ImpactOneProps) {
  const { title, description, image, config } = data;

  return (
    <Box sx={{ pt: 11, pb: { xs: 6, md: 11 } }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2} alignItems="flex-start">
              <Chip label="Impact or individual’s lives" />

              <EditTextWrapper
                label="Title"
                defaultValue={title}
                onSave={(v) => {
                  setLocalData({ title: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'title', sectionType: 'impact' })}
              >
                <Typography
                  variant="h2"
                  fontWeight={700}
                  color={title.color}
                  letterSpacing="-0.02em"
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
                getMetadataInfo={() => ({ itemType: 'description', sectionType: 'impact' })}
              >
                <Typography variant="body1" fontSize={20} color={description.color}>
                  {description.text}
                </Typography>
              </EditTextWrapper>
            </Stack>
          </Grid>

          <Grid item xs={6} display={{ xs: 'none', md: 'block' }}>
            <EditImageWrapper
              defaultValue={image}
              onSave={(v) => {
                setLocalData({ image: v });
              }}
              editMode={editMode}
            >
              <Image
                alt={image.alt}
                src={image.url}
                sx={{
                  maxHeight: 312,
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '24px',
                }}
              />
            </EditImageWrapper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <EditImpactConfig
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } });
            }}
          >
            <Grid container spacing={4}>
              {(config.impacts || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <ImpactOneItem
                    data={item}
                    index={i + 1}
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
