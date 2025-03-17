import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import Iconify from 'src/components/iconify/iconify';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { LogoType } from 'src/sections/generator/view/types';
import { IMenu } from 'src/types/menu';
import HeaderDrawer from './header-drawer';
import HeaderMenus from './header-menus';

type Props = {
  logoType: LogoType;
  logoValue: string;
  menus: IMenu[];
};

export default function HeaderTwo({ logoType, logoValue, menus }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const NAV_HIGHT = 60;
  const offsetTop = useOffSetTop(NAV_HIGHT);

  const renderLogo = (
    <>
      {logoType === 'text' && (
        <Typography variant="h6" component="span" fontWeight={600} color="#010101">
          {logoValue}
        </Typography>
      )}

      {logoType === 'image' && (
        <img
          src={logoValue}
          alt="logo"
          style={{ display: 'block', height: 40, objectFit: 'cover' }}
        />
      )}
    </>
  );

  return (
    <>
      <AppBar
        position="relative"
        sx={{
          // WebkitBackdropFilter: 'blur(12px)',
          // backdropFilter: 'blur(12px)',
          background: 'none',
          // backgroundColor: 'red',
          color: 'text.primary',
          p: 5,
          ...(menus.length > 0 && offsetTop
            ? {
                bgcolor: 'common.white',
                borderRadius: 6,
                width: '98%',
                mt: 2,
                left: '50%',
                transform: 'translateX(-50%)',
              }
            : {
                py: 1,
              }),
        }}
        elevation={menus.length > 0 && offsetTop ? 3 : 0}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              // bgcolor: 'red',
              justifyContent: 'space-between',
              padding: { xs: 0, lg: '0 16px' },
              height: NAV_HIGHT,
            }}
          >
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{renderLogo}</Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none', sm: menus.length > 0 ? 'initial' : 'none' },
                color: 'background.neutral',
              }}
            >
              <Iconify icon="mdi:menu" color="primary.main" />
            </IconButton>

            <HeaderMenus menus={menus} />

            {/* <Button size="small" sx={{ textTransform: 'uppercase' }}>
              button
            </Button> */}
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <HeaderDrawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          menus={menus}
          logo={renderLogo}
        />
      </nav>
    </>
  );
}
