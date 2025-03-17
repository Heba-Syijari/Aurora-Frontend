import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import Image from 'src/components/image/image';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { AboutFourData } from '../types';

export type AboutFourProps = {
  data: AboutFourData;
  setLocalData: (v: Partial<AboutFourData>) => void;
  editMode?: boolean;
};

export default function AboutFour({ data, setLocalData, editMode }: AboutFourProps) {
  const {
    title,
    description,
    subtitle,
    image,
    cardOneDescription,
    cardOneImage,
    cardOneTitle,
    cardTwoTitle,
    cardTwoImage,
    cardTwoDescription,
  } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const primaryColor = paletteColorsMap['primary.main'];
  const secondaryColor = paletteColorsMap['secondary.main'];
  const lighterColorPrimary = lighten(primaryColor, 0.9);

  const renderTitle = (
    <Stack
      textAlign="center"
      alignItems="center"
      sx={{
        '&::after': {
          content: "' '",
          opacity: 0.8,
          background: `linear-gradient(to left, ${primaryColor}, ${secondaryColor})`,
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
        getMetadataInfo={() => ({ itemType: 'title', sectionType: 'features' })}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          color={title.color}
          maxWidth={{ xs: 1, lg: 150 }}
          textAlign="center"
          sx={{
            maxWidth: '1000px',
          }}
        >
          {title.text}
        </Typography>
      </EditTextWrapper>
    </Stack>
  );

  const renderUpSection = (
    <Grid container justifyContent="center" alignItems="center" rowGap={5}>
      <Grid item xs={12} lg={6} textAlign="center">
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
              // width: 64,
              // height: 64,
              maxWidth: { lg: '100%', md: '80%', sm: '80%', xs: '100%' },
              borderRadius: '6px',
            }}
          />
        </EditImageWrapper>
      </Grid>
      <Grid item xs={12} lg={6} textAlign="center" p={3}>
        <Stack spacing={3}>
          <EditTextWrapper
            label="Subtitile"
            defaultValue={subtitle}
            onSave={(v) => {
              setLocalData({ subtitle: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'about' })}
          >
            <Typography
              variant="h4"
              letterSpacing="-1.2px"
              textAlign="start"
              textTransform="capitalize"
              color={subtitle.color}
              sx={{
                background: `linear-gradient(to right, ${primaryColor}, ${lighterColorPrimary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {subtitle.text}
            </Typography>
          </EditTextWrapper>
          <EditTextWrapper
            label="Description"
            defaultValue={description}
            onSave={(v) => {
              setLocalData({ description: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'description', sectionType: 'about' })}
          >
            <Typography
              variant="body2"
              // letterSpacing="-1.2px"
              // fontWeight={700}
              textAlign="start"
              // fontSize={{ xs: 48, lg: 60 }}
              color={description.color}
            >
              {description.text}
            </Typography>
          </EditTextWrapper>
        </Stack>
      </Grid>
    </Grid>
  );

  const renderCardOne = (
    <Card
      sx={{
        mx: 3,
        minHeight: 300,
        // bgcolor: theme.palette.common.neutral,
        // background: `linear-gradient(to left, ${primaryColor}, ${secondaryColor})`,
        background: lighten(primaryColor, 0.5),
        borderRadius: 4,
        // position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center" justifyContent="center" p={1}>
          <Box
            sx={{
              mb: 2,
              borderRadius: 2,
              // color: 'common.white',
              display: 'grid',
              placeItems: 'center',
            }}
            width={{ xs: 200, sm: 200, md: 250 }}
            height={{ xs: 200, sm: 200, md: 250 }}
          >
            <EditImageWrapper
              defaultValue={cardOneImage}
              onSave={(v) => {
                setLocalData({ cardOneImage: v });
              }}
              editMode={editMode}
            >
              <Image
                alt={cardOneImage.alt}
                src={cardOneImage.url}
                sx={{
                  // width: 64,
                  // height: 64,
                  maxWidth: '100%',
                  borderRadius: '6px',
                }}
              />
            </EditImageWrapper>
          </Box>

          <EditTextWrapper
            label="Card One Title"
            defaultValue={cardOneTitle}
            onSave={(v) => {
              setLocalData({ cardOneTitle: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'cardOneTitle', sectionType: 'features' })}
          >
            <Typography
              variant="h3"
              color={cardOneTitle.color}
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textTransform: 'capitalize',
              }}
            >
              {cardOneTitle.text}
            </Typography>
          </EditTextWrapper>

          <EditTextWrapper
            label="Description"
            defaultValue={cardOneDescription}
            onSave={(v) => {
              setLocalData({ cardOneDescription: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'cardOneDescription', sectionType: 'features' })}
          >
            <Typography
              variant="body1"
              color={cardOneDescription.color}
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: 'center',
              }}
            >
              {cardOneDescription.text}
            </Typography>
          </EditTextWrapper>
        </Stack>
      </CardContent>
    </Card>
  );
  const renderCardTwo = (
    <Card
      sx={{
        mx: 3,
        minHeight: 300,
        // bgcolor: theme.palette.common.neutral,
        // background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
        background: lighten(secondaryColor, 0.5),
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center" justifyContent="center" p={1}>
          <Box
            sx={{
              mb: 2,
              // background: `linear-gradient(to left, ${primaryColor}, ${lighterColorPrimary})`,
              borderRadius: 2,
              color: 'common.white',
              display: 'grid',
              placeItems: 'center',
            }}
            width={{ xs: 200, md: 250 }}
            height={{ xs: 200, md: 250 }}
          >
            <EditImageWrapper
              defaultValue={cardTwoImage}
              onSave={(v) => {
                setLocalData({ cardTwoImage: v });
              }}
              editMode={editMode}
            >
              <Image
                alt={cardTwoImage.alt}
                src={cardTwoImage.url}
                sx={{
                  // width: 64,
                  // height: 64,
                  maxWidth: '100%',
                  borderRadius: '6px',
                  objectFit: 'none',
                }}
              />
            </EditImageWrapper>
          </Box>

          <EditTextWrapper
            label="Card One Title"
            defaultValue={cardTwoTitle}
            onSave={(v) => {
              setLocalData({ cardTwoTitle: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'cardTwoTitle', sectionType: 'features' })}
          >
            <Typography
              variant="h3"
              color={cardTwoTitle.color}
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textTransform: 'capitalize',
              }}
            >
              {cardTwoTitle.text}
            </Typography>
          </EditTextWrapper>

          <EditTextWrapper
            label="Description"
            defaultValue={cardTwoDescription}
            onSave={(v) => {
              setLocalData({ cardTwoDescription: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'cardTwoDescription', sectionType: 'features' })}
          >
            <Typography
              variant="body1"
              color={cardTwoDescription.color}
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: 'center',
              }}
            >
              {cardTwoDescription.text}
            </Typography>
          </EditTextWrapper>
        </Stack>
      </CardContent>
    </Card>
  );

  return (
    <Container>
      <Stack
        sx={{
          padding: 2,
        }}
        spacing={{ xs: 5, md: 8, lg: 10 }}
      >
        {renderTitle}
        {renderUpSection}
        <Grid container justifyContent="center" alignItems="center" rowGap={3}>
          <Grid item xs={12} sm={6} md={6} lg={6} textAlign="center">
            {renderCardOne}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} textAlign="center">
            {renderCardTwo}
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
