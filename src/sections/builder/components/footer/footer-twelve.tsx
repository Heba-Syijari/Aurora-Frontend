import { Box, Button, Container, Divider, Stack, TextField, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
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
import { FooterTwelveData } from './types';

export type FooterTwelveProps = {
  data: FooterTwelveData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
  logoType: LogoType;
  logoValue: string;
};

export default function FooterTwelve({
  data,
  logoType,
  logoValue,
  menus,
  setLocalData,
  editMode,
}: FooterTwelveProps) {
  const { button, title, subtitle, copyRights, menusCongig, socialsConfig } = data;

  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap[button.backgroundColor];
  const lighterColor = lighten(baseColor, 0.6);
  const backgroundColor = 'common.black';

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
      sx={{
        pt: 5,
        pb: 2,
        mt: 5,
        backgroundColor,
        // overflow: 'hidden',
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          spacing={2}
          justifyContent="center"
          alignItems="center"
          direction="column"
          textAlign="center"
          minHeight={300}
        >
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{renderLogo}</Box>
          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              setLocalData({ title: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'hero' })}
          >
            <Typography
              variant="h5"
              textTransform="capitalize"
              color={title.color}
              sx={{
                maxWidth: 550,
              }}
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
            getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'hero' })}
          >
            <Typography variant="body2" textTransform="capitalize" color={subtitle.color}>
              {subtitle.text}
            </Typography>
          </EditTextWrapper>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              padding: '6px',
              width: '100%',
              maxWidth: 500,
            }}
          >
            <TextField
              placeholder="Your Mail"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                flex: 1,
                marginLeft: '8px',
              }}
            />
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
                  padding: '5px 28px',
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
        </Stack>
      </Container>
      <Stack>
        <Divider
          variant="middle"
          sx={{
            bgcolor: 'common.white',
            height: '1px',
            width: 1,
            mt: 2,
            mx: 'auto',
            opacity: 0.2,
          }}
        />
        <Stack paddingY={1} paddingX={3} alignItems="center">
          <Stack direction="row" justifyContent="space-between" width={1} alignItems="center">
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
                isRectanguler
              />
            </EditSocialIconWrapper>
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
          </Stack>
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
                opacity: 0.5,
              }}
              color={copyRights.color}
            >
              {copyRights.text}
            </Typography>
          </EditTextWrapper>
        </Stack>
      </Stack>
    </Box>
  );
}
