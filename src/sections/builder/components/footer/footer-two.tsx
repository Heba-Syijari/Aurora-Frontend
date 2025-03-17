import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IMenu } from 'src/types/menu';
import { EditMenusWrapper } from '../../editors/menu';
import { EditSocialIconWrapper } from '../../editors/social-icon';
import { EditTextWrapper } from '../../editors/text';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterTwoData } from './types';

export type FooterTwoProps = {
  data: FooterTwoData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function FooterTwo({ data, menus, setLocalData, editMode }: FooterTwoProps) {
  const { copyRights, menusCongig, socialsConfig } = data;
  const backgroundColor = 'background.neutral';
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: 5,
        mt: 5,
        // background: `linear-gradient(to left, ${baseColor}, ${lighterColor1}, ${lighterColor2})`,
        // background: 'background.secondary',
        background: theme.palette.background.secondary,
      }}
    >
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
            />
          </EditMenusWrapper>
          <Stack>
            <Button
              sx={{
                color: menusCongig.headingColor,
              }}
              variant="text"
            >
              Follow Us
            </Button>
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
        </Stack>
        <Divider
          variant="middle"
          sx={{
            bgcolor: 'common.white',
            height: '1px',
            width: 1,
            mt: 2,
          }}
        />
      </Container>
      <Box sx={{ pb: 2 }}>
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
