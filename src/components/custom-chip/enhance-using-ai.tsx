import React from 'react';
import { Chip, SxProps } from '@mui/material';
import Iconify from '../iconify/iconify';

type EnhanceUsingAIChipProps = {
  onClick: () => void;
  disabled?: boolean;
  sx?: SxProps;
};

export default function EnhanceUsingAIChip({ onClick, disabled, sx }: EnhanceUsingAIChipProps) {
  return (
    <Chip
      icon={<Iconify icon="ic:outline-change-circle" width={24} />}
      label="Enhance using AI"
      variant="outlined"
      sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 99,
        borderRadius: (theme) => theme.spacing(3),
        ...(sx ?? {}),
      }}
      onClick={onClick}
      disabled={disabled}
    />
  );
}
