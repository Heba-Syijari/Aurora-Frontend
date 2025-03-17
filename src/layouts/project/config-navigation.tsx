import { useMemo } from 'react';
import Iconify from 'src/components/iconify/iconify';
import { useParams } from 'src/routes/hook';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export function useNavData() {
  const { projectId } = useParams();

  const projectPath = paths.project(projectId);

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: 'overview',
        items: [
          {
            title: 'analytics',
            path: projectPath.root,
            icon: <Iconify icon="solar:chart-bold-duotone" width={24} />,
          },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'management',
        items: [
          // WEBSITE
          // ----------------------------------------------------------------------
          {
            title: 'website',
            path: projectPath.website.root,
            icon: <Iconify icon="solar:monitor-bold-duotone" width={24} />,
            children: [
              { title: 'domain', path: projectPath.website.domain.root },
              { title: 'info', path: projectPath.website.info },
              {
                title: 'intellectual property',
                path: projectPath.website.intellectualProperty,
              },
              {
                title: 'design',
                path: projectPath.website.design,
              },
              {
                title: 'contact messages',
                path: projectPath.website.contactMessages,
              },
              {
                title: 'navigation',
                path: projectPath.website.navigation,
              },
            ],
          },

          // CONTENT
          // ----------------------------------------------------------------------
          {
            title: 'content',
            path: projectPath.content.root,
            icon: <Iconify icon="solar:file-bold-duotone" width={24} />,
            children: [
              { title: 'content settings', path: projectPath.content.contentSettings },
              { title: 'pages', path: projectPath.content.pages },
              { title: 'blog', path: projectPath.content.blogs },
              { title: 'media', path: projectPath.content.media },
              { title: 'integrations', path: projectPath.content.integrations },
            ],
          },
        ],
      },
    ],
    [projectPath]
  );

  return data;
}
