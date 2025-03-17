import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'src/components/image/image';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { AboutSixData } from '../types';

export type AboutSixProps = {
  data: AboutSixData;
  setLocalData: (v: Partial<AboutSixData>) => void;
  editMode?: boolean;
};

export default function AboutSix({ data, setLocalData, editMode }: AboutSixProps) {
  const { descriptionOne, descriptionTwo, descriptionThree, image } = data;
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: 2,
        py: 8,
        backgroundColor: `${theme.palette.background.neutral}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center" rowGap={3} columnGap={2}>
          <Grid item xs={12} textAlign="center">
            <EditImageWrapper
              defaultValue={image}
              onSave={(v) => setLocalData({ image: v })}
              editMode={editMode}
            >
              <Image
                alt={image.alt}
                src={image.url}
                sx={{
                  maxWidth: { xs: '100%', sm: '75%', lg: '50%' },
                  maxHeight: '50%',
                }}
              />
            </EditImageWrapper>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Stack spacing={5}>
              <EditTextWrapper
                label="First Text"
                defaultValue={descriptionOne}
                onSave={(v) => {
                  setLocalData({ descriptionOne: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'descriptionOne', sectionType: 'about' })}
              >
                <Typography
                  variant="body1"
                  textAlign="center"
                  textTransform="capitalize"
                  color={descriptionOne.color}
                  lineHeight={2}
                >
                  {descriptionOne.text}
                </Typography>
              </EditTextWrapper>
              <EditTextWrapper
                label="Second Text"
                defaultValue={descriptionTwo}
                onSave={(v) => {
                  setLocalData({ descriptionTwo: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'descriptionTwo', sectionType: 'about' })}
              >
                <Typography
                  variant="body1"
                  lineHeight={2}
                  textAlign="center"
                  color={descriptionTwo.color}
                >
                  {descriptionTwo.text}
                </Typography>
              </EditTextWrapper>
              <EditTextWrapper
                label="Third Text"
                defaultValue={descriptionThree}
                onSave={(v) => {
                  setLocalData({ descriptionThree: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'descriptionThree', sectionType: 'about' })}
              >
                <Typography
                  variant="body1"
                  lineHeight={2}
                  textAlign="center"
                  color={descriptionThree.color}
                >
                  {descriptionThree.text}
                </Typography>
              </EditTextWrapper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
