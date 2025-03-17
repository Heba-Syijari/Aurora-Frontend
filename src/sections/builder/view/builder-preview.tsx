'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { paths } from 'src/routes/paths';
import { ProjectHasNoPagesView } from 'src/sections/error';

import { useSelectedPage } from '../context';
import { BuilderHeader, ContentPreview } from '../sections';

const SettingsDrawer = dynamic(() => import('../sections/settings/settings-drawer'), {
  ssr: false,
});

export default function BuilderPreview() {
  const settingsDrawer = useBoolean();

  const { project, isLoading, setSelectedPageUid, selectedPageUid, selectedPage, pages } =
    useSelectedPage();
  const [pageWidth, setPageWidth] = useState<string | number>('100%');

  if (!isLoading && project.pages.length < 1) {
    return <ProjectHasNoPagesView redirectURL={paths.project(project.id).content.pages} />;
  }

  return (
    <>
      <BuilderHeader
        isPreview
        projectName={project.name}
        onSettingsButtonClick={settingsDrawer.onTrue}
        onPreviewSizeChange={setPageWidth}
        pages={pages}
        onSelectedPageChange={setSelectedPageUid}
        selectedPageUid={selectedPageUid}
      />

      {selectedPage && (
        <ContentPreview previewWidth={pageWidth} pageId={selectedPage.id}>
          {selectedPage.component}
        </ContentPreview>
      )}

      {selectedPage && (
        <SettingsDrawer
          open={settingsDrawer.value}
          onCloseClicked={settingsDrawer.onFalse}
          selectedPageId={selectedPage.id}
        />
      )}
    </>
  );
}
