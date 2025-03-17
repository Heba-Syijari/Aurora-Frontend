import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditTextWrapper } from 'src/sections/builder/editors/text';

import Image from 'src/components/image';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { ImageData } from 'src/sections/builder/types';
import { GalleryTwoData } from '../types';

export type GalleryTwoProps = {
  data: GalleryTwoData;
  editMode?: boolean;
  setLocalData: (v: Partial<GalleryTwoData>) => void;
};

export default function GalleryTwo({ data, setLocalData, editMode }: GalleryTwoProps) {
  const { description, images, title } = data;
  const renderTopSection = (
    <Grid container columnSpacing={1} rowSpacing={1} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} alignSelf="stretch">
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
      <Grid item xs={12} sm={4} alignSelf="stretch">
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
    </Grid>
  );

  const renderTitleSection = (
    <Grid
      container
      columnSpacing={2}
      rowSpacing={1}
      mt={{ xs: 0.2, md: 0 }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={8} alignSelf="stretch">
        <Stack height={1} width={1} alignItems="center" justifyContent="center" textAlign="center">
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
      <Grid item xs={4} alignSelf="stretch">
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
              maxHeight: 150,
              maxWidth: 150,
              objectFit: 'cover',
              borderRadius: '2px',
            }}
          />
        </EditImageWrapper>
      </Grid>
    </Grid>
  );

  const renderBottomSection = (
    <Grid container justifyContent="flex-start" alignItems="flex-start">
      <Grid item xs={12} sm={4} alignSelf="stretch">
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
            sx={{ height: 1, width: 1, maxHeight: 300, objectFit: 'cover', borderRadius: '2px' }}
          />
        </EditImageWrapper>
      </Grid>
      <Grid item xs={12} sm={8} alignItems="center" alignSelf="stretch">
        <Stack
          spacing={2.5}
          height={1}
          width={1}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          {renderTitleSection}
          <EditTextWrapper
            label="description"
            defaultValue={description}
            onSave={(v) => {
              setLocalData({ description: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'description', sectionType: 'Gallery' })}
          >
            <Typography
              variant="caption"
              color={description.color}
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 4,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: 'center',
                mx: 1,
              }}
            >
              {description.text}
            </Typography>
          </EditTextWrapper>
        </Stack>
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
