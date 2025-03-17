import { LoadingButton } from '@mui/lab';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { darken, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { IMenu } from 'src/types/menu';
import { EditButtonWrapper } from '../../editors/button';
import { getPaletteColorsMap } from '../../editors/common/colors';
import { EditMenusWrapper } from '../../editors/menu';
import { EditSocialIconWrapper } from '../../editors/social-icon';
import { EditTextWrapper } from '../../editors/text';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterFiveData } from './types';

export type FooterFiveProps = {
  data: FooterFiveData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function FooterFive({ data, menus, setLocalData, editMode }: FooterFiveProps) {
  const { copyRights, menusCongig, button, subtitle, title, socialsConfig } = data;
  const backgroundColor = 'background.neutral';
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const bgColor = paletteColorsMap[backgroundColor];
  const renderTopSerction = (
    <Stack
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          pb: 2,
          mt: 2,
          borderTopRightRadius: '5px',
          borderTopLeftRadius: '5px',
          height: 100,
          boxShadow: '0px 1px 9px rgba(0, 0, 0, 0.1)',
        }}
      />
      <Box
        sx={{
          bgcolor: darken(bgColor, 0.1),
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 24px',
          maxWidth: '900px',
          width: '70%',
          position: 'absolute',
          bottom: -50,
          left: '50%',
          transform: 'translateX(-50%)',
          boxShadow: '-18px -20px 0px rgba(0, 0, 0, 0.6)',
        }}
      >
        <Box>
          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              setLocalData({ title: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'footer' })}
          >
            <Typography
              variant="h6"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: 'left',
              }}
              color={title.color}
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
            getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'footer' })}
          >
            <Typography
              variant="body1"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: 'left',
              }}
              color={subtitle.color}
            >
              {subtitle.text}
            </Typography>
          </EditTextWrapper>
        </Box>
        <EditButtonWrapper
          defaultValue={button}
          onSave={(v) => {
            setLocalData({ button: v });
          }}
          editMode={editMode}
        >
          <LoadingButton
            variant="contained"
            type="submit"
            sx={{
              padding: '10px 5px',
              color: button.color,
              backgroundColor: button.backgroundColor,
              maxWidth: 150,
              '&:hover': {
                backgroundColor: button.color,
                color: button.backgroundColor,
                outline: `1px solid`,
                outlineColor: button.backgroundColor,
                outlineOffset: -1,
              },
              width: '100%',
            }}
          >
            {button.text}
          </LoadingButton>
        </EditButtonWrapper>
      </Box>
    </Stack>
  );
  return (
    <>
      {renderTopSerction}
      <Box sx={{ pt: 10, pb: 5, bgcolor: backgroundColor }}>
        <Container>
          <Stack
            spacing={3}
            justifyContent="center"
            alignItems="flex-start"
            direction="row"
            textAlign="center"
          >
            {/* <Stack alignItems="center" textAlign={{ xs: 'center', md: 'left' }}> */}
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
                variant="body1"
                mt={0.7}
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                  textAlign: 'center',
                  mx: 1,
                  maxWidth: 100,
                  textTransform: 'capitalize',
                }}
                color={copyRights.color}
              >
                {copyRights.text}
              </Typography>
            </EditTextWrapper>
            {/* </Stack> */}
            <EditMenusWrapper
              defaultValue={menusCongig}
              onSave={(v) => {
                setLocalData({ menusCongig: v });
              }}
              editMode={editMode}
            >
              <FooterMenus menus={menus} menusCongig={menusCongig} isExpanded />
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
                Follow US
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
        </Container>
      </Box>
    </>
  );
}
