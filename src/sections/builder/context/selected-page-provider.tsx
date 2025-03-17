'use client';

import { useEffect, useMemo, useState } from 'react';
import { useProjectContext } from 'src/providers/project/project-context';
import { useSearchParams } from 'src/routes/hook';
// eslint-disable-next-line import/no-cycle
import { Page, Post } from '../sections';
import { IPageOption } from '../types';
import { SelectedPageContext } from './selected-page-context';

export function SelectedPageProvider({ children }: { children: React.ReactNode }) {
  const { isLoading, project } = useProjectContext();
  const searchParams = useSearchParams();
  const pageId = searchParams.get('pageId');

  const pages: IPageOption[] = useMemo(() => {
    const projectPages = project.pages.map((page) => ({
      id: page.id,
      label: page.title,
      type: 'page',
      uid: `page-${page.id}`,
      component: <Page pageId={page.id} />,
    }));

    const projectPosts = project.posts.map((post) => ({
      id: post.id,
      label: `Post - ${post.title}`,
      type: 'post',
      uid: `post-${post.id}`,
      component: <Post post={post} relatedPosts={project.posts} />,
    }));

    return [
      ...projectPages.sort((a, b) => a.id - b.id),
      ...projectPosts.sort((a, b) => a.label.localeCompare(b.label)),
    ];
  }, [project]);

  const [selectedPageUid, setSelectedPageUid] = useState<string>(pages[0]?.uid);

  useEffect(() => {
    if (pageId) {
      const page = pages.find(({ id, type }) => id === +pageId && type === 'page');
      if (page) {
        setSelectedPageUid(page.uid);
      }
    }
  }, [pageId, pages]);

  const selectedPage = useMemo(
    () => pages.find(({ uid }) => uid === selectedPageUid),
    [pages, selectedPageUid]
  );

  const value = useMemo(
    () => ({ project, isLoading, selectedPageUid, setSelectedPageUid, selectedPage, pages }),
    [selectedPageUid, selectedPage, pages, project, isLoading]
  );

  return <SelectedPageContext.Provider value={value}>{children}</SelectedPageContext.Provider>;
}
