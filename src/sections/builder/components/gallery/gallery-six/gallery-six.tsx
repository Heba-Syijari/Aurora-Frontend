import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';

import Image from 'src/components/image';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { ImageData } from 'src/sections/builder/types';
import { GallerySixData } from '../types';

export type GallerySixProps = {
  data: GallerySixData;
  editMode?: boolean;
  setLocalData: (v: Partial<GallerySixData>) => void;
};

export default function GallerySix({ data, setLocalData, editMode }: GallerySixProps) {
  const { images, title } = data;

  return (
    <Box sx={{ py: 11 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Gallery" />
        </Box>

        <Box sx={{ mt: 7 }}>
          <Grid
            container
            columnSpacing={2}
            rowSpacing={2}
            justifyContent="center"
            alignItems="center"
            direction={{ lg: 'row', xs: 'column-reverse' }}
          >
            <Grid item container direction="column" md={12} lg={6}>
              <Grid item container xs={12} sm={6}>
                <Grid item xs={12} sm={6}>
                  <Stack
                    spacing={2}
                    width={1}
                    height={1}
                    alignItems="flex-end"
                    justifyContent="center"
                    pb={{ sm: 0, xs: 2 }}
                    px={editMode ? 2 : 0}
                  >
                    <EditImageWrapper
                      defaultValue={images[5]}
                      onSave={(v) => {
                        const updatedImages: ImageData[] = images;
                        updatedImages[5] = v;
                        setLocalData({ images: updatedImages });
                      }}
                      editMode={editMode}
                    >
                      <Image
                        alt={images[5].alt}
                        src={images[5].url}
                        sx={{
                          width: { sm: '60%', xs: 1 },
                          height: { sm: '40%', xs: 1 },
                          minWidth: 150,
                          minHeight: 150,
                          objectFit: 'cover',
                          borderRadius: 5,
                        }}
                      />
                    </EditImageWrapper>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="flex-start"
                  >
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
                          width: { sm: '70%', xs: 1 },
                          height: { sm: '70%', xs: 1 },
                          minWidth: 150,
                          minHeight: 150,
                          objectFit: 'cover',
                          borderRadius: 5,
                        }}
                      />
                    </EditImageWrapper>

                    <EditImageWrapper
                      defaultValue={images[4]}
                      onSave={(v) => {
                        const updatedImages: ImageData[] = images;
                        updatedImages[4] = v;
                        setLocalData({ images: updatedImages });
                      }}
                      editMode={editMode}
                    >
                      <Image
                        alt={images[4].alt}
                        src={images[4].url}
                        sx={{
                          width: { sm: '60%', xs: 1 },
                          height: { sm: '60%', xs: 1 },
                          minWidth: 150,
                          minHeight: 150,
                          objectFit: 'cover',
                          borderRadius: 5,
                          ml: 'auto',
                        }}
                      />
                    </EditImageWrapper>
                  </Stack>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack
                  mt={{ sm: 'aute', xs: 2 }}
                  height={1}
                  width={1}
                  alignItems="center"
                  justifyContent="flex-end"
                >
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
            <Grid item container direction="column" columnSpacing={2} rowSpacing={4} md={12} lg={6}>
              <Grid item xs={12} sm={6}>
                <Stack
                  flexDirection={{ sm: 'row', xs: 'column' }}
                  alignItems={{ sm: 'flex-end', xs: 'center' }}
                  justifyContent="center"
                  spacing={{ lg: 5, md: 2, sm: 1, xs: 2 }}
                >
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
                      sx={{
                        width: { sm: '90%', xs: 1 },
                        height: { sm: '90%', xs: 1 },
                        minWidth: 150,
                        minHeight: 150,
                        objectFit: 'cover',
                        borderRadius: 5,
                      }}
                    />
                  </EditImageWrapper>
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
                      sx={{
                        width: 1,
                        height: 1,
                        objectFit: 'cover',
                        minHeight: 280,
                        minWidth: 280,
                        borderRadius: 5,
                      }}
                    />
                  </EditImageWrapper>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack
                  flexDirection="row"
                  alignItems="flex-end"
                  justifyContent="center"
                  spacing={2}
                >
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
                        width: { sm: '45%', xs: 1 },
                        height: { sm: '45%', xs: 1 },
                        minWidth: 150,
                        minHeight: 150,
                        objectFit: 'cover',
                        borderRadius: 5,
                      }}
                    />
                  </EditImageWrapper>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
