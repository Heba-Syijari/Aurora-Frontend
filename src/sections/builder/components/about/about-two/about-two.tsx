import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material';
import Image from 'src/components/image';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditSocialIconWrapper } from 'src/sections/builder/editors/social-icon';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import Socials from '../../common/socials/socials';
import { AboutTwoData } from '../types';

export type AboutTwoProps = {
  data: AboutTwoData;
  setLocalData: (v: Partial<AboutTwoData>) => void;
  editMode?: boolean;
};

export default function AboutTwo({ data, setLocalData, editMode }: AboutTwoProps) {
  const { title, description, subtitle, button, socialsConfig, image } = data;

  return (
    <Box my={5}>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Chip label="About" />
      </Box>

      <Grid container columnSpacing={4} rowSpacing={1}>
        <Grid item xs={12} md={6}>
          <Stack
            spacing={3}
            alignItems={{ xs: 'center', lg: 'start' }}
            justifyContent="center"
            sx={{ height: '100%' }}
            p={4}
            px={6}
            width={{ xs: '100%', lg: '80%' }}
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
                fontWeight={400}
                color={title.color}
                textAlign={{ xs: 'center', lg: 'start' }}
              >
                {title.text}
              </Typography>
            </EditTextWrapper>
            <EditTextWrapper
              label="Subtitle"
              defaultValue={subtitle}
              onSave={(v) => {
                setLocalData({ subtitle: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'features' })}
            >
              <Typography
                variant="h4"
                fontWeight={400}
                color={subtitle.color}
                textAlign={{ xs: 'center', lg: 'start' }}
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
              getMetadataInfo={() => ({ itemType: 'description', sectionType: 'features' })}
            >
              <Typography
                variant="body1"
                fontWeight={400}
                color={description.color}
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                  textAlign: { xs: 'center', lg: 'start' },
                  mx: 1,
                }}
              >
                {description.text}
              </Typography>
            </EditTextWrapper>
            <EditSocialIconWrapper
              defaultValue={socialsConfig}
              onSave={(v) => {
                setLocalData({ socialsConfig: v });
              }}
              editMode={editMode}
            >
              <Socials
                socialsItems={socialsConfig.socials}
                socialIconsColor={socialsConfig.socialIconsColor}
                editMode={editMode}
                isCenter
              />
            </EditSocialIconWrapper>
            <EditButtonWrapper
              defaultValue={button}
              onSave={(v) => {
                setLocalData({ button: v });
              }}
              editMode={editMode}
            >
              <Button
                variant="text"
                href={button.linkTo}
                sx={{
                  padding: '16px 25px',
                  borderRadius: '6px',
                  color: button.color,
                  backgroundColor: button.backgroundColor,
                  fontSize: 18,
                }}
              >
                {button.text}
              </Button>
            </EditButtonWrapper>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack alignItems="end">
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
                // sx={{
                //   height: '100%',
                //   width: '100%',
                //   objectFit: 'cover',
                //   borderRadius: '0px !important',
                // }}
              />
            </EditImageWrapper>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
