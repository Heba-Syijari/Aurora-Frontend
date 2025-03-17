import { Box, Container, Stack, Typography } from '@mui/material';
import { IMenu } from 'src/types/menu';
import { EditMenusWrapper } from '../../editors/menu';
import { EditSocialIconWrapper } from '../../editors/social-icon';
import { EditTextWrapper } from '../../editors/text';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterEightData } from './types';

export type FooterEightProps = {
  data: FooterEightData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function FooterEight({ data, menus, setLocalData, editMode }: FooterEightProps) {
  const { copyRights, menusCongig, socialsConfig, projectName } = data;
  const backgroundColor = 'background.neutral';
  return (
    <Box
      sx={{
        py: 5,
        mt: 5,
        bgcolor: backgroundColor,
      }}
    >
      <Container>
        <Stack
          spacing={3}
          justifyContent="center"
          alignItems="center"
          direction="column"
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
              <Typography variant="h5" textTransform="capitalize" color={projectName.color}>
                {projectName.text}
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
              isExpanded={false}
              backgroundColor={backgroundColor}
            />
          </EditMenusWrapper>
          <Stack spacing={2}>
            <Typography variant="body2" fontWeight="bold" color="text.primary">
              Stay in touch
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
                WebkitLineClamp: 1,
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
