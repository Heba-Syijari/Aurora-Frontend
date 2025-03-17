import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { IMenu } from 'src/types/menu';
import { EditMenusWrapper } from '../../editors/menu';
import { EditSocialIconWrapper } from '../../editors/social-icon';
import { EditTextWrapper } from '../../editors/text';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterNineData } from './types';

export type FooterNineProps = {
  data: FooterNineData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function FooterNine({ data, menus, setLocalData, editMode }: FooterNineProps) {
  const { copyRights, menusCongig, socialsConfig, projectDescription } = data;
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
          <Stack alignItems="flex-start" spacing={0.5}>
            <Typography variant="h6" color="common.white" textTransform="capitalize">
              About
            </Typography>

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
                  WebkitLineClamp: 6,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                  textAlign: 'left',
                  maxWidth: 400,
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
      <Box sx={{ py: 2 }}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          textAlign={{ xs: 'center', md: 'left' }}
          px={5}
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
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: 'center',
                mx: 1,
                maxWidth: 400,
              }}
              color={copyRights.color}
            >
              {copyRights.text}
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
      </Box>
    </Box>
  );
}
