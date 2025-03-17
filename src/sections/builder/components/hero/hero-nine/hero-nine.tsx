import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { ButtonData } from 'src/sections/builder/types';
import { HeroNineData } from '../types';
import { HeroNineImage } from './hero-nine-image';
import { HeroNineTitle } from './hero-two-title';

type Props = {
  data: HeroNineData;
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function HeroNine({ data, editMode, setLocalData }: Props) {
  const { buttons, description, title, image } = data;

  return (
    <Box
      sx={{
        bgcolor: 'background.nuetral',
        height: { xs: 550, md: 700 },
        maxHeight: 700,
        mb: { lg: 10, sm: 6, xs: 8 },
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          py: 2,
          px: { xs: 1, md: 4, sm: 4, lg: 4 },
        }}
      >
        <Grid
          container
          columnSpacing={4}
          rowSpacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <EditTextWrapper
                label="Title"
                defaultValue={title}
                onSave={(v) => {
                  setLocalData({ title: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'title', sectionType: 'hero' })}
              >
                <HeroNineTitle title={title} />
              </EditTextWrapper>

              <EditTextWrapper
                label="Description"
                defaultValue={description}
                onSave={(v) => {
                  setLocalData({ description: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'description', sectionType: 'hero' })}
              >
                <Typography
                  variant="body1"
                  sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    textOverflow: 'ellipsis',
                    overflowY: 'hidden',
                    textAlign: 'start',
                  }}
                  color={description.color}
                >
                  {description.text}
                </Typography>
              </EditTextWrapper>
              <Stack direction="row" spacing={2}>
                <EditButtonWrapper
                  defaultValue={buttons[0]}
                  onSave={(v) => {
                    const updatedButtons: ButtonData[] = buttons;
                    updatedButtons[0] = v;
                    setLocalData({ buttons: updatedButtons });
                  }}
                  editMode={editMode}
                >
                  <Button
                    variant="text"
                    href={buttons[0].linkTo}
                    startIcon={<Iconify icon={buttons[0].icon} color={buttons[0].color} />}
                    sx={{
                      padding: '10px 28px',
                      borderRadius: '6px',
                      color: buttons[0].color,
                      backgroundColor: buttons[0].backgroundColor,
                      fontSize: 18,
                    }}
                  >
                    {buttons[0].text}
                  </Button>
                </EditButtonWrapper>
                <EditButtonWrapper
                  defaultValue={buttons[1]}
                  onSave={(v) => {
                    const updatedButtons: ButtonData[] = buttons;
                    updatedButtons[1] = v;
                    setLocalData({ buttons: updatedButtons });
                  }}
                  editMode={editMode}
                >
                  <Button
                    variant="text"
                    href={buttons[1].linkTo}
                    sx={{
                      padding: '10px 28px',
                      borderRadius: '6px',
                      color: buttons[1].color,
                      backgroundColor: buttons[1].backgroundColor,
                      fontSize: 18,
                      border: '1px solid',
                      borderColor: buttons[1].color,
                    }}
                  >
                    {buttons[1].text}
                  </Button>
                </EditButtonWrapper>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} display={{ xs: 'none', md: 'grid' }}>
            <Box maxWidth={600} maxHeight={598}>
              <EditImageWrapper
                defaultValue={image!}
                onSave={(v) => {
                  setLocalData({ image: v });
                }}
                editMode={editMode}
              >
                {image.url !==
                'https://canvas-blocks.b-cdn.net/images/icon/2025-01/1738234707099.jpg' ? (
                  <Image
                    alt={image?.alt}
                    src={image?.url}
                    sx={{
                      height: 1,
                      width: 1,
                      objectFit: 'cover',
                      borderRadius: '5px',
                    }}
                  />
                ) : (
                  <HeroNineImage />
                )}
              </EditImageWrapper>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
