import { Box, IconButton, SxProps, Tooltip } from '@mui/material';
import React from 'react';
import Iconify from 'src/components/iconify/iconify';

type BaseEditWrapperProps = {
  children: React.ReactNode;
  onEditClick: () => void;
  hideBorder?: boolean;
  sx?: SxProps;
  tooltipTitle?: string;
  disabled?: boolean;
};

export default function BaseEditWrapper({
  children,
  onEditClick,
  hideBorder,
  sx,
  tooltipTitle,
  disabled,
}: BaseEditWrapperProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        outline: hideBorder ? 'none' : '1px solid #DC9457',
        outlineOffset: '2px',
        borderRadius: 1,
      }}
    >
      <Tooltip title={tooltipTitle} arrow placement="right">
        <IconButton
          onClick={onEditClick}
          disabled={disabled}
          sx={{
            position: 'absolute',
            zIndex: 999,
            top: -4,
            right: -26,
            padding: 0,
            color: (theme) => theme.palette.secondary.main,
            ...(sx ?? {}),
          }}
        >
          <Iconify icon="ic:outline-change-circle" />
        </IconButton>
      </Tooltip>

      {children}
    </Box>
  );
}
