import { Box } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useGetProjectMenus } from 'src/api/project';
import { useProjectContext } from 'src/providers/project/project-context';
import HeaderOne from '../../components/header/header-one';
import { filterHeaderMenu } from '../../components/header/utils';
import BuilderThemeProvider from '../../theme/provider';
import { IFrame } from '../iframe';

type Props = {
  previewWidth: string | number;
  PageComponent: React.ReactNode;
  pageId: number;
};

export default function ContentEdit({ previewWidth, PageComponent, pageId }: Props) {
  const [previewHeight, setPreviewHeight] = useState<string | number>('100vh');

  const {
    project: { id, settings, pages },
  } = useProjectContext();
  const { menus } = useGetProjectMenus(id);
  const headerMenu = useCallback(
    () => filterHeaderMenu({ menus, pageId, pages }),
    [menus, pageId, pages]
  );

  return (
    <Box
      sx={{
        height: previewHeight,
        maxWidth: previewWidth,
        margin: 'auto',
        outline: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <IFrame onContentHeightChange={setPreviewHeight}>
        <Box component="div" id="iframe-content">
          <BuilderThemeProvider fontFamily={settings.fontFamily} palette={settings.palette}>
            <HeaderOne
              logoType={settings.logoType}
              logoValue={settings.logoValue}
              menus={headerMenu()}
            />
            {PageComponent}
          </BuilderThemeProvider>
        </Box>
      </IFrame>
    </Box>
  );
}
