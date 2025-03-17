import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import Iconify from 'src/components/iconify';
import { LogoType } from 'src/sections/generator/view/types';
import { IMenu } from 'src/types/menu';
import { EditButtonWrapper } from '../../editors/button';
import { getPaletteColorsMap } from '../../editors/common/colors';
import { EditImageWrapper } from '../../editors/image';
import { EditTextWrapper } from '../../editors/text';
import { FooterTenData } from './types';

export type FooterTenProps = {
  data: FooterTenData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
  logoType: LogoType;
  logoValue: string;
};

export default function FooterTen({
  data,
  menus,
  logoType,
  logoValue,
  setLocalData,
  editMode,
}: FooterTenProps) {
  const { button, image, projectDescription } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap[button.backgroundColor];
  const lighterColor = lighten(baseColor, 0.6);

  const renderLogo = (
    <>
      {logoType === 'text' && (
        <Typography variant="h6" component="span" fontWeight={600} color="common.white">
          {logoValue}
        </Typography>
      )}

      {logoType === 'image' && (
        <img
          src={logoValue}
          alt="logo"
          style={{ display: 'block', height: 35, objectFit: 'cover' }}
        />
      )}
    </>
  );
  return (
    <Box
      position="relative"
      sx={{
        py: 5,
        mt: 5,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${image.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(60%)',
          zIndex: 0,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          spacing={3}
          justifyContent="center"
          alignItems="center"
          direction="column"
          textAlign="center"
          minHeight={300}
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
                <Typography variant="body1" color="common.white">
                  Edit Background Image
                </Typography>
              </Box>
            </EditImageWrapper>
          )}

          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{renderLogo}</Box>

          <EditTextWrapper
            label="Project Description"
            defaultValue={projectDescription}
            onSave={(v) => {
              setLocalData({ projectDescription: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'projectDescription', sectionType: 'hero' })}
          >
            <Typography variant="body1" textTransform="capitalize" color={projectDescription.color}>
              {projectDescription.text}
            </Typography>
          </EditTextWrapper>
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
              endIcon={<Iconify icon={button.icon} />}
              sx={{
                padding: '10px 28px',
                borderRadius: '6px',
                color: button.color,
                background: `linear-gradient(135deg, ${baseColor}, ${lighterColor})`,
                fontSize: 18,
                '&:hover': {
                  background: `linear-gradient(135deg, ${baseColor}, ${lighterColor})`,
                },
              }}
            >
              {button.text}
            </Button>
          </EditButtonWrapper>
        </Stack>
      </Container>
    </Box>
  );
}
