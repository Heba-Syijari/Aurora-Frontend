// @mui
import { Box } from '@mui/material';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
import { useParams } from 'src/routes/hook';
// components
import { useSettingsContext } from 'src/components/settings';
// privders
import { ProjectProvider } from 'src/providers/project/project-provider';
//
import Main from './main';
import Header from './header';
import NavMini from './nav-mini';
import NavVertical from './nav-vertical';
import NavHorizontal from './nav-horizontal';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ProjectLayout({ children }: Props) {
  const { projectId } = useParams();

  const settings = useSettingsContext();

  const lgUp = useResponsive('up', 'lg');

  const nav = useBoolean();

  const isHorizontal = settings.themeLayout === 'horizontal';

  const isMini = settings.themeLayout === 'mini';

  const renderNavMini = <NavMini />;

  const renderHorizontal = <NavHorizontal />;

  const renderNavVertical = (
    <Box sx={{ mt: 10 }}>
      <NavVertical openNav={nav.value} onCloseNav={nav.onFalse} />
    </Box>
  );

  const renderContent = <Main>{children}</Main>;

  if (isHorizontal) {
    return (
      <ProjectProvider id={projectId}>
        <Header onOpenNav={nav.onTrue} />

        {lgUp ? renderHorizontal : renderNavVertical}

        {renderContent}
      </ProjectProvider>
    );
  }

  if (isMini) {
    return (
      <ProjectProvider id={projectId}>
        <Header onOpenNav={nav.onTrue} />

        <Box
          sx={{
            minHeight: 1,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {lgUp ? renderNavMini : renderNavVertical}

          {renderContent}
        </Box>
      </ProjectProvider>
    );
  }

  return (
    <ProjectProvider id={projectId}>
      <Header onOpenNav={nav.onTrue} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {renderNavVertical}

        {renderContent}
      </Box>
    </ProjectProvider>
  );
}
