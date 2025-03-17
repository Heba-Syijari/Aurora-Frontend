import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditOurSolutionConfig } from 'src/sections/builder/editors/our-solution';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { ImageData } from 'src/sections/builder/types';
import { OurSolutionComponentName, OurSolutionOneData } from '../types';
import OurSolutionOneItem from './our-solution-one-item';

export type OurSolutionOneProps = {
  data: OurSolutionOneData;
  setLocalData: (v: Partial<OurSolutionOneData>) => void;
  editMode?: boolean;
};

export default function OurSolutionOne({ data, editMode, setLocalData }: OurSolutionOneProps) {
  const { title, config, image } = data;

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
    <Box my={8}>
      <Box
        sx={{
          backgroundImage: `url('${image.url}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: 10,
          paddingY: { xs: 5, sm: 10, md: 8, lg: 15 },
          m: { xs: 2, lg: 4 },
          maxHeight: { xs: '13%', sm: '8%', md: '8%', lg: '100%' },
          mb: { xs: 20, sm: 25, md: 27, lg: 20 },
          mt: { xs: 6, sm: 6, md: 8, lg: 10 },
        }}
      >
        <Container>
          {renderEditBgImage}
          <Stack
            spacing={2.5}
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
              getMetadataInfo={() => ({ itemType: 'title', sectionType: 'our-solution' })}
            >
              <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
                {title.text}
              </Typography>
            </EditTextWrapper>
          </Stack>

          <Box sx={{ mt: 7 }}>
            <EditOurSolutionConfig
              name={OurSolutionComponentName.OUR_SOLUTION_ONE}
              defaultValue={config}
              editMode={editMode}
              onSave={(updatedConfig) => {
                setLocalData({ config: { ...config, ...updatedConfig } });
              }}
            >
              <Grid
                container
                columnSpacing={4}
                rowSpacing={7}
                justifyContent="center"
                sx={{
                  mb: { xs: -20, sm: -25, md: -20, lg: -30 },
                }}
              >
                {(config.items || []).map((item, i) => (
                  <Grid key={i} item xs={6} sm={4} md={4}>
                    <OurSolutionOneItem
                      data={item}
                      descriptionTextColor={config.descriptionColor}
                      iconColor={config.iconColor}
                      titleTextColor={config.titleColor}
                      key={i}
                    />
                  </Grid>
                ))}
              </Grid>
            </EditOurSolutionConfig>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
