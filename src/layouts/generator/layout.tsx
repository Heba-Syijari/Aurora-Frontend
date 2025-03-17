// @mui
import { Box } from '@mui/material';
// hooks
// components
//
import Header from './header';
import Main from './main';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function GeneratorLayout({ children }: Props) {
  const renderContent = <Main>{children}</Main>;

  return (
    <>
      <Header />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {renderContent}
      </Box>
    </>
  );
}
