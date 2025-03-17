import { Box } from '@mui/material';
import React from 'react';
import Iconify from 'src/components/iconify/iconify';
import IconAction from '../section/icon-action';

type EditPostWrapperProps = {
  children: React.ReactNode;
  onEditClick: () => void;
  isPreview?: boolean;
};

export function EditPostWrapper({ children, onEditClick, isPreview }: EditPostWrapperProps) {
  const renderEditActions = (
    <Box
      sx={{
        position: 'absolute',
        top: 128,
        left: 0,
        zIndex: 99,
        padding: (theme) => theme.spacing(2),
      }}
    >
      <Box
        sx={{
          borderRadius: (theme) => theme.spacing(1),
          padding: (theme) => theme.spacing(1),
          backgroundColor: (theme) => theme.palette.background.default,
          boxShadow: (theme) => theme.shadows[6],
        }}
      >
        <IconAction
          tooltipTitle="Edit post"
          icon={<Iconify icon="ri:edit-line" width={24} />}
          onClick={onEditClick}
        />
      </Box>
    </Box>
  );

  return (
    <Box sx={{ position: 'relative' }}>
      {!isPreview && renderEditActions}

      {children}
    </Box>
  );
}
