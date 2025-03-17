// @mui
import { Box } from '@mui/material';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
// components
import { useSettingsContext } from 'src/components/settings';
//
import Footer from './footer';
import Header from './header';
import Main from './main';
import NavHorizontal from './nav-horizontal';
import NavMini from './nav-mini';
import NavVertical from './nav-vertical';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const settings = useSettingsContext();

  const lgUp = useResponsive('up', 'lg');

  const nav = useBoolean();

  const isHorizontal = settings.themeLayout === 'horizontal';

  const isMini = settings.themeLayout === 'mini';

  const renderNavMini = <NavMini />;

  const renderHorizontal = <NavHorizontal />;

  const renderNavVertical = <NavVertical openNav={nav.value} onCloseNav={nav.onFalse} />;

  const renderContent = <Main>{children}</Main>;

  // if (isHorizontal) {
  //   return (
  //     <>
  //       <Header onOpenNav={nav.onTrue} />

  //       {lgUp ? renderHorizontal : renderNavVertical}

  //       {renderContent}

  //       <Footer />
  //     </>
  //   );
  // }

  // if (isMini) {
  //   return (
  //     <>
  //       <Header onOpenNav={nav.onTrue} />

  //       <Box
  //         sx={{
  //           minHeight: 1,
  //           display: 'flex',
  //           flexDirection: { xs: 'column', md: 'row' },
  //         }}
  //       >
  //         {lgUp ? renderNavMini : renderNavVertical}

  //         {renderContent}
  //       </Box>

  //       <Footer />
  //     </>
  //   );
  // }

  return (
    <>
      <Header onOpenNav={nav.onTrue} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* {renderNavVertical} */}

        {renderContent}
      </Box>

      <Footer />
    </>
  );
}
