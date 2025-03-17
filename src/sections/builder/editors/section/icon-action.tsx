import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';

type IconActionProps = {
  tooltipTitle: string;
  icon: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

export default function IconAction({ tooltipTitle, icon, onClick, disabled }: IconActionProps) {
  return (
    <Tooltip title={tooltipTitle} arrow placement="right">
      <Box component="div">
        <IconButton
          onClick={onClick}
          disabled={disabled}
          sx={{
            '&:disabled': {
              cursor: 'not-allowed',
              pointerEvents: 'all !important',
            },
          }}
        >
          {icon}
        </IconButton>
      </Box>
    </Tooltip>
  );
}
