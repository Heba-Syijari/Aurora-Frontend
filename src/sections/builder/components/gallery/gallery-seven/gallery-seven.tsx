import { Box, Container, Stack, Typography } from '@mui/material';
import Carousel, { useCarousel } from 'src/components/carousel';
import CarouselBottomArrows from 'src/components/carousel/Carousel-bottom-arrows';
import { EditGallerySevenConfig } from 'src/sections/builder/editors/gallery';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { ImageData } from 'src/sections/builder/types';
import { GallerySevenConfig, GallerySevenData } from '../types';
import GallerySevenItem from './gallery-seven-item';

export type GallerySevenProps = {
  data: GallerySevenData;
  setLocalData: (v: Partial<GallerySevenData>) => void;
  editMode?: boolean;
};

export default function OurSolutionOne({ data, editMode, setLocalData }: GallerySevenProps) {
  const { title, config, image } = data;
  const carousel = useCarousel({
    slidesToShow: 3,
    // ...CarouselDots({
    //   rounded: true,
    //   sx: { mt: 1 },
    // }),
    arrows: false,
    centerMode: true,
    centerPadding: '5px',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '20px' },
      },
    ],
  });

  const renderEditBgImage = (
    <EditImageWrapper
      defaultValue={image}
      onSave={(v) => {
        let updatedImages: ImageData = image;
        updatedImages = v;
        setLocalData({ image: updatedImages });
      }}
      editMode={editMode}
    >
      {editMode && (
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography variant="body1" fontSize={20} color={title.color} maxWidth={920}>
            Edit Background Image
          </Typography>
        </Stack>
      )}
    </EditImageWrapper>
  );
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url('${image.url}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: 7,
          paddingY: { xs: 5, sm: 10, md: 8, lg: 8 },
          m: { xs: 2, lg: 4 },
          height: { xs: '200px', sm: '300px', md: '300px', lg: '350px' },
          mb: { xs: 45, sm: 37, md: 37, lg: 35 },
          mt: { xs: 6, sm: 6, md: 8, lg: 10 },
        }}
      >
        <Container maxWidth="xl">
          {renderEditBgImage}
          <Stack
            spacing={0.5}
            alignItems="center"
            textAlign="center"
            sx={{
              '&::after': {
                content: "' '",
                opacity: 0.8,
                backgroundColor: title.color,
                width: '100px',
                height: '3px',
                borderRadius: 5,
              },
            }}
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
              <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
                {title.text}
              </Typography>
            </EditTextWrapper>
          </Stack>

          <Stack sx={{ paddingX: 0, position: 'relative' }}>
            <EditGallerySevenConfig
              defaultValue={config}
              editMode={editMode}
              onSave={(updatedConfig) => {
                setLocalData({ config: { ...config, ...updatedConfig } as GallerySevenConfig });
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                }}
              >
                <CarouselBottomArrows
                  filled
                  icon="ooui:previous-rtl"
                  onNext={carousel.onPrev}
                  onPrev={carousel.onNext}
                  sx={{
                    paddingX: 0,
                  }}
                >
                  <Carousel
                    ref={carousel.carouselRef}
                    {...carousel.carouselSettings}
                    className="slider-container"
                  >
                    {(config.slides || []).map((item, i) => (
                      <GallerySevenItem
                        {...config}
                        data={item}
                        currentIndex={carousel.currentIndex}
                        index={i}
                      />
                    ))}
                  </Carousel>
                </CarouselBottomArrows>
              </Box>
            </EditGallerySevenConfig>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
