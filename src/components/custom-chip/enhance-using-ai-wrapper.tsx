import React from 'react';
import { Box, SxProps } from '@mui/material';
import EnhanceUsingAIChip from './enhance-using-ai';

type EnhanceUsingAIChipWrapperProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  sx?: SxProps;
};

export default function EnhanceUsingAIChipWrapper({
  children,
  onClick,
  disabled,
  sx,
}: EnhanceUsingAIChipWrapperProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      {children}
      <EnhanceUsingAIChip onClick={onClick} disabled={disabled} sx={sx} />
    </Box>
  );
}
