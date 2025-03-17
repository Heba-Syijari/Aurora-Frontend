import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { ImageData } from 'src/sections/builder/types';
import { OurSolutionFourData } from '../types';

export type OurSolutionFourProps = {
  data: OurSolutionFourData;
  setLocalData: (v: Partial<OurSolutionFourData>) => void;
  editMode?: boolean;
};

export default function OurSolutionFour({ data, editMode, setLocalData }: OurSolutionFourProps) {
  const { title, description, image, solutions_1, solutions_2, solutions_3, solutions_4 } = data;

  const theme = useTheme();

  // const baseColor1 = theme.palette.primary.main;
  // const baseColor2 = theme.palette.primary.light;
  const primaryColor = lighten(theme.palette.primary.main, 0.5);
  const secondaryColor = lighten(theme.palette.secondary.light, 0.5);
  // const lighterColor1 = lighten(baseColor1, 0.3);
  // const lighterColor2 = lighten(baseColor2, 0.99);

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
        <Stack spacing={2.5} alignItems="center" textAlign="center" margin={1}>
          <Typography variant="body1" fontSize={20} color={title.color} maxWidth={920}>
            Edit Background Image
          </Typography>
        </Stack>
      )}
    </EditImageWrapper>
  );

  const renderTxt = (
    <Stack
      spacing={0.5}
      // direction="row"
      textAlign="start"
      justifyContent="center"
      paddingBottom={5}
    >
      <EditTextWrapper
        label="Title"
        defaultValue={title}
        onSave={(v) => {
          setLocalData({ title: v });
        }}
        editMode={editMode}
        getMetadataInfo={() => ({ itemType: 'title', sectionType: 'our-solution' })}
      >
        <Typography
          variant="h2"
          fontWeight={500}
          color={title.color}
          letterSpacing="-0.02em"
          sx={{
            maxWidth: '90%',
          }}
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
        getMetadataInfo={() => ({ itemType: 'description', sectionType: 'our-solution' })}
      >
        <Typography
          variant="body1"
          color={description.color}
          letterSpacing="-0.02em"
          sx={{
            maxWidth: { lg: '500px' },
          }}
        >
          {description.text}
        </Typography>
      </EditTextWrapper>
    </Stack>
  );
  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.background.neutral}`,

        // marginY: 5,
        backgroundImage: `url('${image.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        maxHeight: '100%',
        maxWidth: '100%',
        my: 8,
      }}
    >
      <Box
        sx={{
          width: 1,
          paddingY: { lg: 10, xs: 10 },
        }}
      >
        <Container>
          {renderEditBgImage}
          <Grid container justifyContent="space-between">
            <Grid item xs={12} sm={6} md={6} lg={6} display="flex" alignItems="center">
              {renderTxt}
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              {/* {renderTxt} */}
              <EditTextWrapper
                label="Solutions 1"
                defaultValue={solutions_1}
                onSave={(v) => {
                  setLocalData({ solutions_1: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'solutions_1', sectionType: 'our-solution' })}
              >
                <Typography
                  variant="body2"
                  fontWeight={400}
                  color={solutions_1.color}
                  letterSpacing="-0.02em"
                  textAlign="start"
                  sx={{
                    borderRadius: 5,
                    background: `linear-gradient(to left, ${primaryColor}, ${secondaryColor})`,
                    maxWidth: '400px',
                    padding: 3,
                    marginLeft: 8,
                    marginY: 2,
                  }}
                >
                  {solutions_1.text}
                </Typography>
              </EditTextWrapper>
              <EditTextWrapper
                label="Solutions 2"
                defaultValue={solutions_2}
                onSave={(v) => {
                  setLocalData({ solutions_2: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'solutions_2', sectionType: 'our-solution' })}
              >
                <Typography
                  variant="body2"
                  fontWeight={400}
                  color={solutions_2.color}
                  letterSpacing="-0.02em"
                  textAlign="start"
                  sx={{
                    borderRadius: 5,
                    background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                    maxWidth: '400px',
                    padding: 3,
                    marginLeft: 0,
                    marginY: 2,
                  }}
                >
                  {solutions_2.text}
                </Typography>
              </EditTextWrapper>
              <EditTextWrapper
                label="Solutions 3"
                defaultValue={solutions_3}
                onSave={(v) => {
                  setLocalData({ solutions_3: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'solutions_3', sectionType: 'our-solution' })}
              >
                <Typography
                  variant="body2"
                  fontWeight={400}
                  color={solutions_3.color}
                  letterSpacing="-0.02em"
                  textAlign="start"
                  sx={{
                    borderRadius: 5,
                    background: `linear-gradient(to left, ${primaryColor}, ${secondaryColor})`,
                    maxWidth: '400px',
                    padding: 3,
                    marginLeft: 8,
                    marginY: 2,
                  }}
                >
                  {solutions_3.text}
                </Typography>
              </EditTextWrapper>
              <EditTextWrapper
                label="Solutions 4"
                defaultValue={solutions_4}
                onSave={(v) => {
                  setLocalData({ solutions_4: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'solutions_4', sectionType: 'our-solution' })}
              >
                <Typography
                  variant="body2"
                  fontWeight={400}
                  color={solutions_4.color}
                  letterSpacing="-0.02em"
                  textAlign="start"
                  sx={{
                    borderRadius: 5,
                    background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                    maxWidth: '400px',
                    padding: 3,
                    marginLeft: 0,
                    marginY: 2,
                  }}
                >
                  {solutions_4.text}
                </Typography>
              </EditTextWrapper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
