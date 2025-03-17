import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditTextWrapper } from 'src/sections/builder/editors/text';

import Image from 'src/components/image';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { ImageData } from 'src/sections/builder/types';
import { GalleryThreeData } from '../types';

export type GalleryThreeProps = {
  data: GalleryThreeData;
  editMode?: boolean;
  setLocalData: (v: Partial<GalleryThreeData>) => void;
};

export default function GalleryThree({ data, setLocalData, editMode }: GalleryThreeProps) {
  const { description, title, images } = data;
  const renderImage = (i: number, item: ImageData) => (
    <Grid key={i} item xs={12} sm={6} md={2.4} alignSelf="stretch">
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
          sx={{ width: 1, height: 1, objectFit: 'cover', borderRadius: '2px' }}
        />
      </EditImageWrapper>
    </Grid>
  );

  const renderDescription = (
    <Grid item xs={12} sm={12} md={2.4} alignSelf="stretch">
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'common.neutral',
        }}
        height={1}
        p={2}
      >
        <EditTextWrapper
          label="Description"
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
            }}
          >
            {description.text}
          </Typography>
        </EditTextWrapper>
      </Stack>
    </Grid>
  );
  return (
    <Box sx={{ py: 11 }}>
      <Container>
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
            justifyContent="center"
            alignItems="center"
            rowSpacing={{ md: 0, sm: 2, xs: 2 }}
            columnSpacing={{ md: 0, sm: 2, xs: 2 }}
            alignSelf="stretch"
          >
            {(images || []).map((item, i) => renderImage(i, item))}
            {renderDescription}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
