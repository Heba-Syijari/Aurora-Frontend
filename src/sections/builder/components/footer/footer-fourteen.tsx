import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LogoType } from 'src/sections/generator/view/types';
import { IMenu } from 'src/types/menu';
import { EditMenusWrapper } from '../../editors/menu';
import { EditSocialIconWrapper } from '../../editors/social-icon';
import { EditTextWrapper } from '../../editors/text';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterFourteenData } from './types';

export type FooterFourteenProps = {
  data: FooterFourteenData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
  logoType: LogoType;
  logoValue: string;
};

export default function FooterFourteen({
  data,
  menus,
  setLocalData,
  editMode,
  logoType,
  logoValue,
}: FooterFourteenProps) {
  const { copyRights, menusCongig, socialsConfig } = data;
  const backgroundColor = 'background.neutral';
  const theme = useTheme();

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
          style={{
            display: 'block',
            height: 60,
            objectFit: 'fill',
          }}
        />
      )}
    </>
  );

  return (
    <Box
      sx={{
        p: 5,
        mt: 5,
        background: theme.palette.background.secondary,
      }}
    >
      <Container>
        <Stack
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          textAlign="center"
        >
          <Box>
            {renderLogo}
            <Stack
            // alignItems="baseline"
            // textAlign={{ xs: 'left', md: 'left' }}
            >
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
                  mt={1}
                  marginLeft={0}
                  sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    textOverflow: 'ellipsis',
                    overflowY: 'hidden',
                    textAlign: 'center',
                    mx: { lg: -8, sm: -18 },
                    maxWidth: 600,
                  }}
                  color={copyRights.color}
                >
                  {copyRights.text}
                </Typography>
              </EditTextWrapper>
            </Stack>
          </Box>
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
              // flexDirection="column"
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
        {/* <Divider
          variant="middle"
          sx={{
            bgcolor: 'common.white',
            height: '1px',
            width: 1,
            mt: 2,
          }}
        /> */}
      </Container>
      {/* <Box sx={{ pb: 2 }}>
        <Stack
        // alignItems="baseline"
        // textAlign={{ xs: 'left', md: 'left' }}
        >
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
              mt={1}
              marginLeft={0}
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 4,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: 'center',
                mx: { lg: -8, sm: -18 },
                maxWidth: 600,
              }}
              color={copyRights.color}
            >
              {copyRights.text}
            </Typography>
          </EditTextWrapper>
        </Stack>
      </Box> */}
    </Box>
  );
}
