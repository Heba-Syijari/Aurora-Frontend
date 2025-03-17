import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { darken, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import Iconify from 'src/components/iconify';
import { IMenu } from 'src/types/menu';
import { getPaletteColorsMap } from '../../editors/common/colors';
import { EditMenusWrapper } from '../../editors/menu';
import { EditSocialIconWrapper } from '../../editors/social-icon';
import { EditTextWrapper } from '../../editors/text';
import { TextData } from '../../types';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterThreeData } from './types';

export type FooterThreeProps = {
  data: FooterThreeData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function FooterTwo({ data, menus, setLocalData, editMode }: FooterThreeProps) {
  const { copyRights, menusCongig, address, email, number, socialsConfig } = data;
  const backgroundColor = 'background.neutral';
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const bgColor = paletteColorsMap[backgroundColor];
  const contactInfo = (icon: string, info: TextData, label: string, itemType: string) => (
    <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
      <Iconify icon={icon} width={15} color="text.secondary" />
      <EditTextWrapper
        label={label}
        defaultValue={info}
        onSave={(v) => {
          setLocalData({ itemType: v });
        }}
        editMode={editMode}
        getMetadataInfo={() => ({ itemType, sectionType: 'footer' })}
      >
        <Typography variant="body2" color={info.color} textAlign="left" minWidth={100}>
          {info.text}
        </Typography>
      </EditTextWrapper>
    </Stack>
  );
  return (
    <>
      <Box sx={{ px: 2, pb: 0, pt: 2, bgcolor: 'primary.main', mt: 5 }}>
        <Stack
          alignItems="center"
          spacing={4}
          justifyContent="space-between"
          direction={{ xs: 'column', lg: 'row', md: 'row', sm: 'row' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Typography variant="body2" color="common.white" mt={-1}>
            Get connected with us on social networks!
          </Typography>
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
            />
          </EditSocialIconWrapper>
        </Stack>
      </Box>
      <Box sx={{ pt: 5, bgcolor: backgroundColor }}>
        <Container>
          <Stack
            spacing={3}
            justifyContent="center"
            alignItems="flex-start"
            direction="row"
            textAlign="center"
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
                backgroundColor={backgroundColor}
                underLineColor="primary.main"
              />
            </EditMenusWrapper>
            <Stack alignItems="flex-start" spacing={2} justifyContent="center">
              <Button
                sx={{
                  color: menusCongig.headingColor,
                  textAlign: 'left',
                  ml: -1.3,
                  position: 'relative',
                  display: 'inline-block',
                }}
                variant="text"
              >
                Contact
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '-1px',
                    width: '50%',
                    height: '2px',
                    backgroundColor: 'primary.main',
                  }}
                />
              </Button>
              {contactInfo('maki:home', address, 'Address', 'address')}
              {contactInfo('mdi:email', email, 'Email', 'email')}
              {contactInfo('entypo:phone', number, 'Number', 'number')}
            </Stack>
          </Stack>
        </Container>
        <Box sx={{ pb: 2, mt: 2, bgcolor: darken(bgColor, 0.1) }}>
          <Stack alignItems="center" textAlign={{ xs: 'center', md: 'left' }}>
            <EditTextWrapper
              label="Copy rights"
              defaultValue={copyRights}
              onSave={(v) => {
                setLocalData({ copyRights: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'copyRights', sectionType: 'footer' })}
            >
              <Typography
                variant="body2"
                mt={2}
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
        </Box>
      </Box>
    </>
  );
}
