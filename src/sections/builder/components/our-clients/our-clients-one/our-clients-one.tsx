import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// import { EditFeatureConfig } from 'src/sections/builder/editors/team';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditOurClientsConfig } from 'src/sections/builder/editors/our-clients/edit-our-clients-config';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { OurClientsConfig, OurClientsOneData } from '../types';
import { OurClientsOneItem } from './our-clients-one-item';

export type OurClientsOneProps = {
  data: OurClientsOneData;
  editMode?: boolean;
  setLocalData: (v: Partial<OurClientsOneData>) => void;
};

export default function OurClientsOne({ data, setLocalData, editMode }: OurClientsOneProps) {
  const { config, titlePartOne, titlePartTwo, image } = data;
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: 11,
        backgroundImage: `url('${image.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // minHeight: 385, // ? edit this if not ok

        // ? height: 385, // edit this if not ok
        maxHeight: 600, // edit this if not ok
        position: 'relative',
        '&::before': {
          content: "' '",
          position: 'absolute',
          opacity: 0.7,
          backgroundColor: theme.palette.background.neutral,

          // backgroundColor: 'background.neutral,', // edit this if not suitable
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
      }}
    >
      <Stack
        // direction="row"

        spacing={3}
        alignItems="center"
        justifyContent="center"
        // height="100%"
        sx={{
          // maxWidth: 385, // change it as much of the main Box hight
          // margin: 'auto',
          textAlign: 'center',
          height: 385, // edit this if not ok

          px: { xs: 1 },
          position: 'relative',
        }}
      >
        {editMode && (
          <EditImageWrapper
            defaultValue={image}
            onSave={(v) => {
              setLocalData({ image: v });
            }}
            editMode={editMode}
          >
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ color: 'white' }}>
                Edit Background Image
              </Typography>
            </Box>
          </EditImageWrapper>
        )}
        {/* // ? stak direction row */}
        <Stack direction="row">
          <EditTextWrapper
            label="Title Part One"
            defaultValue={titlePartOne}
            onSave={(v) => {
              setLocalData({ titlePartOne: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'titlePartOne', sectionType: 'Our Clients' })}
          >
            <Typography
              variant="h1"
              letterSpacing="-1.2px"
              fontWeight={450}
              fontSize={{ xs: 35, lg: 55 }}
              color={titlePartOne.color}
              sx={{
                textTransform: 'capitalize',
                marginRight: { lg: '10', xs: '5' },
                // make Neon effacte
              }}
            >
              {`${titlePartOne.text}`}
            </Typography>
          </EditTextWrapper>

          <EditTextWrapper
            label="Title Part Two"
            defaultValue={titlePartTwo}
            onSave={(v) => {
              setLocalData({ titlePartTwo: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'titlePartTwo', sectionType: 'Our Clients' })}
          >
            <Typography
              variant="h1"
              letterSpacing="-1.2px"
              fontWeight={450}
              fontSize={{ xs: 35, lg: 55 }}
              color={titlePartTwo.color}
              sx={{
                textTransform: 'capitalize',
              }}
            >
              {titlePartTwo.text}
            </Typography>
          </EditTextWrapper>
        </Stack>

        <EditOurClientsConfig
          defaultValue={config}
          editMode={editMode}
          onSave={(updatedConfig) => {
            setLocalData({ config: { ...config, ...updatedConfig } as OurClientsConfig });
          }}
        >
          <Box sx={{ mt: 1 }}>
            <Container>
              <Grid
                container
                columnSpacing={4}
                rowSpacing={3}
                justifyContent="center"
                alignItems="center"
              >
                {(config.clients || []).map((img) => (
                  <Grid
                    item
                    xs={24 / config.clients.length}
                    sm={16 / config.clients.length}
                    md={12 / config.clients.length}
                    lg={12 / config.clients.length}
                    // xl={12 / config.clients.length}
                  >
                    <OurClientsOneItem data={img} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </EditOurClientsConfig>
      </Stack>
    </Box>
  );
}
