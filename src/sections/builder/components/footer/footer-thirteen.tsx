import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { darken, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import Iconify from 'src/components/iconify';
import { LogoType } from 'src/sections/generator/view/types';
import { IMenu } from 'src/types/menu';
import { getPaletteColorsMap } from '../../editors/common/colors';
import { EditMenusWrapper } from '../../editors/menu';
import { EditSocialIconWrapper } from '../../editors/social-icon';
import { EditTextWrapper } from '../../editors/text';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterThirteenData } from './types';

export type FooterThirteenProps = {
  data: FooterThirteenData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
  logoType: LogoType;
  logoValue: string;
};

export default function FooterThirteen({
  data,
  menus,
  setLocalData,
  editMode,
  logoType,
  logoValue,
}: FooterThirteenProps) {
  const { title, subtitle, copyRights, menusCongig, socialsConfig } = data;

  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const secondary = paletteColorsMap['secondary.main'];
  const darkenSecondary = darken(secondary, 0.75);
  const primary = paletteColorsMap['primary.main'];
  const darkenPrimary = darken(primary, 0.75);
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
          style={{ display: 'block', height: 30, objectFit: 'cover' }}
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
        background: darkenSecondary,
        overflow: 'hidden',
      }}
    >
      <Container>
        <Stack
          spacing={3}
          justifyContent="center"
          alignItems="center"
          direction="column"
          textAlign="center"
          minHeight={300}
        >
          <Grid
            width={1}
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            maxWidth={900}
          >
            <Grid
              item
              sm={12}
              md={8}
              alignSelf="stretch"
              sx={{
                p: 1,
                display: 'flex',
                justifyContent: { lg: 'start', md: 'start ', sm: 'center' },
              }}
            >
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
                  isExpanded
                  // backgroundColor={backgroundColor}
                />
              </EditMenusWrapper>
            </Grid>

            <Grid item sm={12} md={4} alignSelf="stretch">
              <Stack
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{
                  mx: 'auto',
                  p: 2,
                  width: 338,
                  height: 258,
                  borderRadius: 6,
                  background: darkenPrimary,
                  // display: 'flex',
                  // justifyContent: 'center',
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
                  <Typography variant="body1" textTransform="capitalize" color={title.color}>
                    {title.text}
                  </Typography>
                </EditTextWrapper>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    padding: '1px',
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
                  <IconButton
                    sx={{
                      padding: '10px 10px',
                      borderRadius: '6px',
                      bgcolor: darkenSecondary,
                      color: 'common.white',
                    }}
                  >
                    <Iconify icon="mingcute:arrow-right-line" />
                  </IconButton>
                </Stack>
                <EditTextWrapper
                  label="Subtitle"
                  defaultValue={subtitle}
                  onSave={(v) => {
                    setLocalData({ subtitle: v });
                  }}
                  editMode={editMode}
                  getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'hero' })}
                >
                  <Typography variant="caption" textTransform="capitalize" color={subtitle.color}>
                    {subtitle.text}
                  </Typography>
                </EditTextWrapper>
              </Stack>
            </Grid>
          </Grid>
          <Divider
            variant="middle"
            sx={{
              bgcolor: 'common.white',
              height: '1px',
              width: 1,
              mt: 2,
            }}
          />
          <Stack direction="row" alignItems="center" width={1} justifyContent="space-between">
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{renderLogo}</Box>

            <EditSocialIconWrapper
              defaultValue={socialsConfig}
              onSave={(v) => {
                setLocalData({ socialsConfig: v });
              }}
              editMode={editMode}
            >
              <Socials
                socialsItems={socialsConfig.socials}
                socialIconsColor={darkenSecondary}
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
        </Stack>
      </Container>
    </Box>
  );
}
