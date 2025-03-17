import { Box, Container, Grid, List, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import Image from 'src/components/image/image';
import { EditAboutConfig } from 'src/sections/builder/editors/about/edit-about-config';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { AboutComponentName, AboutFiveData } from '../types';
import AboutFiveItem from './about-five-item';

export type AboutFiveProps = {
  data: AboutFiveData;
  setLocalData: (v: Partial<AboutFiveData>) => void;
  editMode?: boolean;
};

export default function AboutFive({ data, setLocalData, editMode }: AboutFiveProps) {
  const { image, postTitle, title, config } = data;

  return (
    <Box
      sx={{
        padding: 2,
        paddingY: 4,
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
              paddingBottom={2}
            >
              <Iconify icon="mdi:stars" width={30} height={30} color="primary.main" />

              <EditTextWrapper
                label="Post Title"
                defaultValue={postTitle}
                onSave={(v) => {
                  setLocalData({ postTitle: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'postTitle', sectionType: 'our-solution' })}
              >
                <Typography
                  variant="h2"
                  color={postTitle.color}
                  letterSpacing="-0.02em"
                  textTransform="capitalize"
                >
                  {postTitle.text}
                </Typography>
              </EditTextWrapper>
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
                  fontWeight={700}
                  color={title.color}
                  letterSpacing="-0.02em"
                >
                  {title.text}
                </Typography>
              </EditTextWrapper>
            </Stack>
            <EditAboutConfig
              name={AboutComponentName.ABOUT_FIVE}
              defaultValue={config}
              editMode={editMode}
              onSave={(updatedConfig) => {
                setLocalData({ config: { ...config, ...updatedConfig } });
              }}
            >
              <Stack spacing={3} sx={{}}>
                <List
                  sx={{
                    listStyleType: 'disc',
                    mx: 'auto',
                    '& .MuiListItem-root': {
                      display: 'list-item',
                      '&::marker': {
                        color: config.textColor,
                      },
                    },
                  }}
                >
                  {(config.items || []).map((item, i) => (
                    <AboutFiveItem data={item} textColor={config.textColor} key={i} />
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
