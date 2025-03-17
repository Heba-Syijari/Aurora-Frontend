import { LoadingButton } from '@mui/lab';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { IMenu } from 'src/types/menu';
import { EditButtonWrapper } from '../../editors/button';
import { EditMenusWrapper } from '../../editors/menu';
import { EditSocialIconWrapper } from '../../editors/social-icon';
import { EditTextWrapper } from '../../editors/text';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterSevenData } from './types';

export type FooterSevenProps = {
  data: FooterSevenData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function FooterSeven({ data, menus, setLocalData, editMode }: FooterSevenProps) {
  const { copyRights, menusCongig, socialsConfig, button, projectDescription, projectName } = data;
  const backgroundColor = 'background.neutral';
  return (
    <Box
      sx={{
        pt: 5,
        mt: 5,
        bgcolor: backgroundColor,
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
          <Stack mt={0.5} alignItems="flex-start" spacing={0.5}>
            <EditTextWrapper
              label="Project Name"
              defaultValue={projectName}
              onSave={(v) => {
                setLocalData({ projectName: v });
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'projectName', sectionType: 'hero' })}
            >
              <Typography variant="h6" textTransform="capitalize" color={projectName.color}>
                {projectName.text}
              </Typography>
            </EditTextWrapper>
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
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                  textAlign: 'left',
                }}
                color={projectDescription.color}
              >
                {projectDescription.text}
              </Typography>
            </EditTextWrapper>
          </Stack>
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
          <Stack mt={0.5}>
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
                  padding: '10px 20px',
                  color: button.color,
                  backgroundColor: button.backgroundColor,
                  maxWidth: 150,
                  borderRadius: 8,
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
