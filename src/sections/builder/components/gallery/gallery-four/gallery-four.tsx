import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';

import Image from 'src/components/image';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { ImageData } from 'src/sections/builder/types';
import { GalleryFourData } from '../types';

export type GalleryFourProps = {
  data: GalleryFourData;
  editMode?: boolean;
  setLocalData: (v: Partial<GalleryFourData>) => void;
};

export default function GalleryFour({ data, setLocalData, editMode }: GalleryFourProps) {
  const { images, title } = data;
  const renderTopSection = (
    <Grid container columnSpacing={1} rowSpacing={1} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={4} alignSelf="stretch">
        <EditImageWrapper
          defaultValue={images[0]}
          onSave={(v) => {
            const updatedImages: ImageData[] = images;
            updatedImages[0] = v;
            setLocalData({ images: updatedImages });
          }}
          editMode={editMode}
        >
          <Image
            alt={images[0].alt}
            src={images[0].url}
            sx={{ height: 1, width: 1, maxHeight: 300, objectFit: 'cover', borderRadius: '2px' }}
          />
        </EditImageWrapper>
      </Grid>
      <Grid item xs={12} sm={7} alignSelf="stretch">
        <EditImageWrapper
          defaultValue={images[1]}
          onSave={(v) => {
            const updatedImages: ImageData[] = images;
            updatedImages[1] = v;
            setLocalData({ images: updatedImages });
          }}
          editMode={editMode}
        >
          <Image
            alt={images[1].alt}
            src={images[1].url}
            sx={{ height: 1, width: 1, maxHeight: 300, objectFit: 'cover', borderRadius: '2px' }}
          />
        </EditImageWrapper>
      </Grid>
      <Grid
        item
        sx={{
          display: { xs: 'none', sm: 'none', md: 'grid' },
        }}
        sm={1}
        alignSelf="stretch"
      />
    </Grid>
  );
  const renderTitleSection = (
    <Grid
      container
      direction={{ xs: 'row', sm: 'column', md: 'column' }}
      item
      xs={12}
      sm={6}
      alignSelf="stretch"
    >
      <Grid item container xs={12} sm={6} alignSelf="stretch">
        <Grid
          item
          sx={{
            display: { xs: 'none', sm: 'grid', md: 'grid' },
          }}
          sm={6}
          xs={12}
          alignSelf="stretch"
        />
        <Grid item xs={12} sm={6} alignSelf="stretch">
          <EditImageWrapper
            defaultValue={images[3]}
            onSave={(v) => {
              const updatedImages: ImageData[] = images;
              updatedImages[3] = v;
              setLocalData({ images: updatedImages });
            }}
            editMode={editMode}
          >
            <Image
              alt={images[3].alt}
              src={images[3].url}
              sx={{
                width: 1,
                height: 1,
                objectFit: 'cover',
                borderRadius: '2px',
              }}
            />
          </EditImageWrapper>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} alignSelf="stretch">
        <Stack alignItems="center" justifyContent="flex-end" height={1} p={2}>
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
      </Grid>
    </Grid>
  );
  const renderBottomSection = (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={1}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {renderTitleSection}
      <Grid item xs={12} sm={6} alignSelf="stretch">
        <EditImageWrapper
          defaultValue={images[2]}
          onSave={(v) => {
            const updatedImages: ImageData[] = images;
            updatedImages[2] = v;
            setLocalData({ images: updatedImages });
          }}
          editMode={editMode}
        >
          <Image
            alt={images[2].alt}
            src={images[2].url}
            sx={{
              height: 1,
              width: 1,
              objectFit: 'cover',
              borderRadius: '2px',
            }}
          />
        </EditImageWrapper>
      </Grid>
    </Grid>
  );
  return (
    <Box sx={{ py: 11 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Gallery" />
        </Box>
        <Box sx={{ mt: 7 }}>
          <Stack spacing={1} alignItems="center" textAlign="center">
            {renderTopSection}
            {renderBottomSection}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
