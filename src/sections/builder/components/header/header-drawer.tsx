import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useCallback, useState } from 'react';
import Iconify from 'src/components/iconify/iconify';
import { IMenu } from 'src/types/menu';
import { useIFrameContext } from '../../sections/iframe/iframe-context';

type Props = {
  open: boolean;
  onClose: () => void;
  menus: IMenu[];
  logo: React.ReactNode;
};

export default function HeaderDrawer({ open, onClose, menus, logo }: Props) {
  const { container } = useIFrameContext(); // this is only needed here because I'm rendering it inside the iframe

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { sm: 'block', md: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
      }}
    >
      <Box sx={{ textAlign: 'center', position: 'relative' }}>
        <IconButton sx={{ position: 'absolute', right: '1rem', top: '0.5rem' }} onClick={onClose}>
          <Iconify icon="mdi:close" />
        </IconButton>
        <Box sx={{ my: 2 }}>{logo}</Box>
        <Divider />
        <List>
          {menus.map((menu) => (
            <MenuListItem key={menu.id} menu={menu} onClose={onClose} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

type MenuListItemProps = {
  menu: IMenu;
  onClose: () => void;
};

function MenuListItem({ menu, onClose }: MenuListItemProps) {
  const [open, setOpen] = useState(false);
  const { contentRef } = useIFrameContext();
  const handleClick = () => {
    setOpen(!open);
  };

  const scrollToSection = useCallback(
    (id: string) => {
      if (!contentRef?.contentWindow?.document) return;
      const iframeDoc = contentRef.contentWindow.document;
      const myElement = iframeDoc.getElementById(id);
      onClose();
      if (myElement) myElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [contentRef, onClose]
  );

  const renderListItem = (
    <ListItem disablePadding>
      <ListItemButton onClick={() => scrollToSection(menu.section!)}>
        <ListItemText primary={menu.label} />
      </ListItemButton>
    </ListItem>
  );

  const renderNestedListItem = (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={menu.label} />
          {open ? <Iconify icon="mdi:expand-less" /> : <Iconify icon="mdi:expand-more" />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menu.children.map((submenu) => (
            <ListItem key={submenu.id} disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => scrollToSection(menu.section!)}>
                <ListItemText primary={submenu.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );

  return <>{menu.children?.length > 0 ? renderNestedListItem : renderListItem}</>;
}
