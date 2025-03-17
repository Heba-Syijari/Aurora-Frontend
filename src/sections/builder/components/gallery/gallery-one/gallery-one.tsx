import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditTextWrapper } from 'src/sections/builder/editors/text';

import Image from 'src/components/image';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { ImageData } from 'src/sections/builder/types';
import { GalleryOneData } from '../types';

export type GalleryOneProps = {
  data: GalleryOneData;
  editMode?: boolean;
  setLocalData: (v: Partial<GalleryOneData>) => void;
};

export default function GalleryOne({ data, setLocalData, editMode }: GalleryOneProps) {
  const { subtitle, images, title } = data;

  return (
    <Box sx={{ py: 11, position: 'relative' }}>
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

          <EditTextWrapper
            label="Subtitle"
            defaultValue={subtitle}
            onSave={(v) => {
              setLocalData({ subtitle: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'Gallery' })}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              color={subtitle.color}
              letterSpacing="-0.02em"
              maxWidth={970}
            >
              {subtitle.text}
            </Typography>
          </EditTextWrapper>
        </Stack>

        <Box sx={{ mt: 7, position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              top: '15%',
              left: '-10%',
              width: { lg: '120%', md: '100%' },
              height: '70%',
              bgcolor: 'common.neutral',
              zIndex: 1,
              borderRadius: '2px',
              display: { xs: 'none', md: 'block', sm: 'block' },
            }}
          />
          <Grid
            container
            columnSpacing={2}
            rowSpacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              position: 'relative',
              zIndex: 2,
            }}
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
