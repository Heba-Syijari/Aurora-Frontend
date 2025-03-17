import { IconButton, MenuItem, Typography } from '@mui/material';
import React from 'react';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import Iconify from 'src/components/iconify/iconify';

type ActionOptionType = {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  color?: string;
};

type PageActionsMenuProps = {
  onRegenerateClick: () => void;
  onEditClick: () => void;
  onDeleteClick?: () => void;
};

export default function PageActionsMenu({
  onEditClick,
  onRegenerateClick,
  onDeleteClick,
}: PageActionsMenuProps) {
  const popover = usePopover();

  const menus: ActionOptionType[] = [
    {
      label: 'Edit',
      icon: <Iconify icon="ri:edit-line" />,
      onClick: onEditClick,
    },
    {
      label: 'Regenerate',
      icon: <Iconify icon="ri:flashlight-line" />,
      onClick: onRegenerateClick,
    },
    {
      label: 'Delete',
      icon: <Iconify icon="ri:delete-bin-6-line" />,
      onClick: onDeleteClick,
      color: 'error.main',
    },
  ];

  return (
    <div>
      <IconButton color="inherit" onClick={popover.onOpen}>
        <Iconify icon="eva:more-horizontal-fill" width={24} />
      </IconButton>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        onClick={popover.onClose}
        arrow="top-right"
      >
        {menus
          .filter((menu) => !!menu.onClick)
          .map((menu, i) => (
            <MenuItem key={i} onClick={menu.onClick}>
              {menu.icon}
              <Typography variant="body1" fontWeight={500}>
                {menu.label}
              </Typography>
            </MenuItem>
          ))}
      </CustomPopover>
    </div>
  );
}
