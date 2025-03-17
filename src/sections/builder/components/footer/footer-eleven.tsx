import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { darken, lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import Iconify from 'src/components/iconify';
import { LogoType } from 'src/sections/generator/view/types';
import { IMenu } from 'src/types/menu';
import { EditButtonWrapper } from '../../editors/button';
import { getPaletteColorsMap } from '../../editors/common/colors';
import { EditMenusWrapper } from '../../editors/menu';
import { EditSocialIconWrapper } from '../../editors/social-icon';
import { EditTextWrapper } from '../../editors/text';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterElevenData } from './types';

export type FooterElevenProps = {
  data: FooterElevenData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
  logoType: LogoType;
  logoValue: string;
};

export default function FooterEleven({
  data,
  menus,
  logoType,
  logoValue,
  setLocalData,
  editMode,
}: FooterElevenProps) {
  const { button, title, subtitle, copyRights, menusCongig, socialsConfig } = data;

  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap[button.color];
  const lighterColor = lighten(baseColor, 0.6);
  const backgroundColor = 'background.neutral';
  const bgColor = paletteColorsMap[backgroundColor];
  const darkenColor = darken(bgColor, 0.05);
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
          style={{ display: 'block', height: 70, objectFit: 'cover' }}
        />
      )}
    </>
  );
  return (
    <Box
      position="relative"
      sx={{
        py: 5,

        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '1',
          left: 0,
          width: '100%',
          height: '400px',
          backgroundColor: 'background.secondary',
          borderTopLeftRadius: '30%',
          borderTopRightRadius: '30%',
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
          <Stack
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{
              p: 2,
              borderRadius: 6,
              width: '70%',
              backgroundColor: 'secondary.main',
              // background: `linear-gradient(135deg,${lighterColor}, ${baseColor})`,
            }}
          >
            <EditTextWrapper
              label="Title"
              defaultValue={title}
              onSave={(v) => {
                setLocalData({ title: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'title', sectionType: 'hero' })}
            >
              <Typography variant="h5" textTransform="capitalize" color={title.color}>
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
              getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'hero' })}
            >
              <Typography variant="body1" textTransform="capitalize" color={subtitle.color}>
                {subtitle.text}
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
                endIcon={<Iconify icon={button.icon} color={button.color} />}
                sx={{
                  padding: '10px 28px',
                  borderRadius: '6px',
                  width: 200,
                  backgroundColor: button.backgroundColor,
                  fontSize: 18,
                  '&:hover': {
                    backgroundColor: button.backgroundColor,
                  },
                }}
              >
                <Typography
                  sx={{
                    background: `linear-gradient(135deg, ${baseColor}, ${lighterColor})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {button.text}
                </Typography>
              </Button>
            </EditButtonWrapper>
          </Stack>

          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{renderLogo}</Box>

          <EditMenusWrapper
            defaultValue={menusCongig}
            onSave={(v) => {
              setLocalData({ menusCongig: v });
            }}
            editMode={editMode}
          >
            <FooterMenus
              menus={menus}
              menusCongig={menusCongig}
              isExpanded={false}
              // backgroundColor={backgroundColor}
            />
          </EditMenusWrapper>

          <EditSocialIconWrapper
            defaultValue={socialsConfig}
            onSave={(v) => {
              setLocalData({ socialsConfig: v });
            }}
            editMode={editMode}
          >
            <Socials
              socialsItems={socialsConfig.socials}
              socialIconsColor={darkenColor}
              editMode={editMode}
              isRectanguler
            />
          </EditSocialIconWrapper>
          <EditTextWrapper
            label="Copy Rights"
            defaultValue={copyRights}
            onSave={(v) => {
              setLocalData({ copyRights: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'copyRights', sectionType: 'footer' })}
          >
            <Typography
              variant="body2"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 4,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: 'center',
                mx: 1,
                maxWidth: 600,
              }}
              color={copyRights.color}
            >
              {copyRights.text}
            </Typography>
          </EditTextWrapper>
        </Stack>
      </Container>
    </Box>
  );
}
