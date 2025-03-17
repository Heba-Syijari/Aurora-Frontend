import { Box, Container, Stack, Typography } from '@mui/material';
import { IMenu } from 'src/types/menu';
import { EditMenusWrapper } from '../../editors/menu';
import { EditTextWrapper } from '../../editors/text';
import FooterMenus from './common/footer-menus';
import { FooterSixData } from './types';

export type FooterSixProps = {
  data: FooterSixData;
  menus: IMenu[];
  setLocalData: (v: Record<string, any>) => void;
  editMode?: boolean;
};

export default function FooterSix({ data, menus, setLocalData, editMode }: FooterSixProps) {
  const { copyRights, menusCongig, projectName } = data;
  const backgroundColor = 'background.neutral';

  return (
    <Box sx={{ py: 5, mt: 5, bgcolor: backgroundColor }}>
      <Container>
        <Stack
          spacing={5}
          direction={{ md: 'row', xs: 'column' }}
          alignItems="center"
          justifyContent="center"
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
              isExpanded={false}
              backgroundColor={backgroundColor}
            />
          </EditMenusWrapper>
          <EditTextWrapper
            label="Project Name"
            defaultValue={projectName}
            onSave={(v) => {
              setLocalData({ projectName: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'projectName', sectionType: 'hero' })}
          >
            <Typography variant="h6" color={projectName.color}>
              {projectName.text}
            </Typography>
          </EditTextWrapper>
          <EditTextWrapper
            label="Copy Rights"
            defaultValue={copyRights}
            onSave={(v) => {
              setLocalData({ copyRights: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'copyRights', sectionType: 'footer' })}
          >
            <Typography variant="body2" color={copyRights.color}>
              {copyRights.text}
            </Typography>
          </EditTextWrapper>
        </Stack>
      </Container>
    </Box>
  );
}
