import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { darken, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { IMenu } from 'src/types/menu';
import { getPaletteColorsMap } from '../../editors/common/colors';
import { EditMenusWrapper } from '../../editors/menu';
import { EditSocialIconWrapper } from '../../editors/social-icon';
import { EditTextWrapper } from '../../editors/text';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterOneData } from './types';

export type FooterOneProps = {
  data: FooterOneData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function FooterOne({ data, menus, setLocalData, editMode }: FooterOneProps) {
  const { copyRights, menusCongig, projectDescription, socialsConfig } = data;
  const backgroundColor = 'background.neutral';
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const bgColor = paletteColorsMap[backgroundColor];

  return (
    <Box sx={{ pt: 5, mt: 25, bgcolor: backgroundColor }}>
      <Container>
        <Stack spacing={3} alignItems="center" textAlign={{ xs: 'center', md: 'left' }}>
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
              backgroundColor={backgroundColor}
            />
          </EditMenusWrapper>
          <Divider
            variant="middle"
            sx={{
              bgcolor: 'common.white',
              height: '1px',
              width: 1,
            }}
          />
          <EditTextWrapper
            label="Project Description"
            defaultValue={projectDescription}
            onSave={(v) => {
              setLocalData({ projectDescription: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'projectDescription', sectionType: 'hero' })}
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
              color={projectDescription.color}
            >
              {projectDescription.text}
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
            />
          </EditSocialIconWrapper>
        </Stack>
      </Container>
      <Box sx={{ py: 2, mt: 4, bgcolor: darken(bgColor, 0.1) }}>
        <Stack alignItems="center" textAlign={{ xs: 'center', md: 'left' }}>
          <EditTextWrapper
            label="Project Description"
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
  );
}
