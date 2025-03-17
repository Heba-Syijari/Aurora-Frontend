import { Box, Button, Menu, MenuItem } from '@mui/material';
import { useCallback, useState } from 'react';
import Iconify from 'src/components/iconify/iconify';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { IMenu } from 'src/types/menu';
import { useIFrameContext } from '../../sections/iframe/iframe-context';

type Props = {
  menus: IMenu[];
};

export default function HeaderMenus({ menus }: Props) {
  const NAV_HIGHT = 60;
  const offsetTop = useOffSetTop(NAV_HIGHT);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (menus.length === 0) return <></>;
  return (
    <Box
      sx={{
        position: 'relative',
        display: { xs: 'none', md: 'flex' },
        gap: 1,
        ...(!offsetTop
          ? {
              background: 'white',
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              mx: 2,
              p: 2,
              mt: -1.5,
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: '-16px',
                width: '0',
                height: '0',
                borderStyle: 'solid',
                zIndex: 1,
              },
              '&::before': {
                left: '-10px',
                top: 0,
                borderWidth: '20px 16px 16px 16px',
                borderColor: 'white transparent transparent transparent',
              },
              '&::after': {
                right: '-10px',
                top: 0,
                borderWidth: '20px 16px 16px 16px',
                borderColor: 'white transparent transparent transparent',
              },
            }
          : {}),
      }}
    >
      {menus.map((menu) => (
        <NavMenuItem key={menu.id} menu={menu} />
      ))}
    </Box>
  );
}

type NavMenuItemProps = {
  menu: IMenu;
};

function NavMenuItem({ menu }: NavMenuItemProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { contentRef } = useIFrameContext();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = useCallback(
    (id: string) => {
      if (!contentRef?.contentWindow?.document) return;
      const iframeDoc = contentRef.contentWindow.document;
      const myElement = iframeDoc.getElementById(id);
      if (myElement) myElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [contentRef]
  );

  if (!menu.children || menu.children.length === 0) {
    return (
      <Button onClick={() => scrollToSection(menu.section!)} variant="text">
        {menu.label}
      </Button>
    );
  }

  return (
    <>
      <Button
        id={`basic-button-${menu.id}`}
        aria-controls={open ? `basic-menu-${menu.id}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<Iconify icon="mdi:keyboard-arrow-down" />}
        variant="text"
      >
        {menu.label}
      </Button>

      <Menu
        id={`basic-menu-${menu.id}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': `basic-button-${menu.id}`,
          sx: { minWidth: 128, borderRadius: '4px' },
        }}
      >
        {menu.children.map((submenu) => (
          <MenuItem key={submenu.id} component="a" onClick={() => scrollToSection(menu.section!)}>
            {submenu.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
