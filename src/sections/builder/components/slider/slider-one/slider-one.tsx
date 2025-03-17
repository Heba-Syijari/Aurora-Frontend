import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import Carousel, { CarouselArrows, CarouselDots, useCarousel } from 'src/components/carousel';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { EditSliderConfig } from 'src/sections/builder/editors/slider';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { SilderOneConfig, SliderComponentName, SliderOneData } from '../types';
import SliderOneDataItem from './slider-item';
import SliderOneImage from './slider-one-image';

export type SliderOneProps = {
  data: SliderOneData;
  editMode?: boolean;
  setLocalData: (v: Partial<SliderOneData>) => void;
};

export default function SliderOne({ data, setLocalData, editMode }: SliderOneProps) {
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const bgColor = paletteColorsMap['background.neutral'];
  const lightBackground = lighten(bgColor, 0.8);
  const { config, title } = data;
  const carousel = useCarousel({
    slidesToShow: 1,
    ...CarouselDots({
      rounded: true,
      sx: { mt: 1 },
    }),
    arrows: true,
    centerMode: true,
    centerPadding: '5px',
  });
  return (
    <Box py={15} bgcolor={lightBackground}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Slider" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              setLocalData({ title: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'Feature' })}
          >
            <Typography
              variant="h2"
              fontWeight={700}
              color={title.color}
              letterSpacing="-0.02em"
              maxWidth={970}
              textTransform="capitalize"
            >
              {title.text}
            </Typography>
          </EditTextWrapper>
        </Stack>

        <Box sx={{ mt: 7, position: 'relative' }}>
          <Box sx={{ position: 'absolute', right: 50 }}>
            <SliderOneImage />
          </Box>
          <EditSliderConfig
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } as SilderOneConfig });
            }}
            name={SliderComponentName.SLIDER_ONE}
          >
            <Box
              sx={{
                overflowX: 'hidden',
                position: 'relative',
              }}
            >
              <CarouselArrows
                filled
                icon="ooui:previous-rtl"
                onNext={carousel.onPrev}
                onPrev={carousel.onNext}
              >
                <Carousel
                  ref={carousel.carouselRef}
                  {...carousel.carouselSettings}
                  className="slider-container"
                >
                  {(config.slides || []).map((item, i) => (
                    <SliderOneDataItem {...config} data={item} />
                  ))}
                </Carousel>
              </CarouselArrows>
            </Box>
          </EditSliderConfig>
        </Box>
      </Container>
    </Box>
  );
}
