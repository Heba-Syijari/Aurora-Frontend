import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditTextWrapper } from 'src/sections/builder/editors/text';

import Image from 'src/components/image';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { ImageData } from 'src/sections/builder/types';
import { GalleryFiveData } from '../types';

export type GalleryFiveProps = {
  data: GalleryFiveData;
  editMode?: boolean;
  setLocalData: (v: Partial<GalleryFiveData>) => void;
};

export default function GalleryFive({ data, setLocalData, editMode }: GalleryFiveProps) {
  const { images, title } = data;

  return (
    <Box sx={{ py: 11 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Gallery" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              setLocalData({ title: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'gallery' })}
          >
            <Typography
              variant="h2"
              fontWeight={700}
              color={title.color}
              letterSpacing="-0.02em"
              maxWidth={970}
            >
              {title.text}
            </Typography>
          </EditTextWrapper>
        </Stack>

        <Box sx={{ mt: 7 }}>
          <Grid
            container
            columnSpacing={1}
            rowSpacing={1}
            justifyContent="center"
            alignItems="center"
          >
            {(images || []).map((item, i) => (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={4}
                alignSelf="stretch"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <EditImageWrapper
                  defaultValue={item}
                  onSave={(v) => {
                    const updatedImages: ImageData[] = images;
                    updatedImages[i] = v;
                    setLocalData({ images: updatedImages });
                  }}
                  editMode={editMode}
                >
                  <Image
                    alt={item.alt}
                    src={item.url}
                    sx={{
                      height: 1,
                      width: 1,
                      maxHeight: 263,
                      objectFit: 'cover',
                      borderRadius: '2px',
                    }}
                  />
                </EditImageWrapper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
