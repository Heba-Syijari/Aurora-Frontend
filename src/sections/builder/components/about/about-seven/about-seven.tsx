import { Box, Container, Grid, List, Stack, Typography } from '@mui/material';
import Image from 'src/components/image/image';
import { EditAboutConfig } from 'src/sections/builder/editors/about/edit-about-config';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { AboutComponentName, AboutSevenData } from '../types';
import AboutSevenItem from './about-seven-item';

export type AboutSevenProps = {
  data: AboutSevenData;
  setLocalData: (v: Partial<AboutSevenData>) => void;
  editMode?: boolean;
};

export default function AboutSeven({ data, setLocalData, editMode }: AboutSevenProps) {
  const { image, description, config } = data;

  return (
    <Box
      sx={{
        padding: 2,
        paddingY: 5,
        // backgroundColor: theme.palette.background.neutral,
      }}
    >
      <Container maxWidth="xl">
        <Grid container justifyContent="center" alignItems="center" rowGap={7} columnGap={3}>
          <Grid item sm={12} md={4} lg={4} textAlign="center" alignSelf="stretch">
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
                  maxWidth: '90% ',
                  maxHeight: '100%',
                }}
              />
            </EditImageWrapper>
          </Grid>
          <Grid item sm={12} md={6} lg={6} textAlign="center">
            <Stack
              spacing={2}
              direction="row"
              textAlign="center"
              justifyContent="center"
              alignItems="center"
              // paddingBottom={2}
            >
              <EditTextWrapper
                label="description"
                defaultValue={description}
                onSave={(v) => {
                  setLocalData({ description: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'description', sectionType: 'our-solution' })}
              >
                <Typography
                  variant="h5"
                  textAlign="start"
                  color={description.color}
                  letterSpacing="-0.02em"
                  textTransform="capitalize"
                  fontWeight={300}
                >
                  {description.text}
                </Typography>
              </EditTextWrapper>
            </Stack>

            <EditAboutConfig
              name={AboutComponentName.ABOUT_SEVEN}
              defaultValue={config}
              editMode={editMode}
              onSave={(updatedConfig) => {
                setLocalData({ config: { ...config, ...updatedConfig } });
              }}
            >
              <Stack spacing={3} sx={{ marginX: 1 }}>
                <List
                  sx={{
                    listStyle: 'none', // Remove default list styling
                    paddingLeft: 0, // Remove default padding
                    '& .MuiListItem-root': {
                      display: 'flex', // Use flexbox to align items
                      alignItems: 'flex-start', // Align items to the top
                      '&::before': {
                        content: '"\\2022"', // Unicode for bullet point
                        color: config.textColor, //  bullet color
                        marginRight: '8px', // space between bullet and text
                        fontSize: '1.2em', // bullet size if needed
                      },
                    },
                  }}
                >
                  {(config.items || []).map((item, i) => (
                    <AboutSevenItem data={item} textColor={config.textColor} key={i} />
                  ))}
                </List>
              </Stack>
            </EditAboutConfig>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
