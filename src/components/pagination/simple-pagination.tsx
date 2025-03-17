'use client';

import React from 'react';
import { Box, IconButton } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import Iconify from '../iconify/iconify';

type SimplePaginationProps = {
  onNextClick: () => void;
  onPrevClick: () => void;
  disabledNext?: boolean;
  disabledPrev?: boolean;
  sx?: SxProps<Theme> | undefined;
};

export default function SimplePagination({
  onNextClick,
  onPrevClick,
  disabledNext,
  disabledPrev,
  sx,
}: SimplePaginationProps) {
  return (
    <Box sx={{ display: 'inline-flex', gap: 1, ...sx }}>
      <IconButton
        sx={{ border: (theme) => `1px solid ${theme.palette.action.focus}` }}
        onClick={onPrevClick}
        disabled={disabledPrev}
      >
        <Iconify icon="ph:caret-left-bold" width={14} />
      </IconButton>
      <IconButton
        sx={{ border: (theme) => `1px solid ${theme.palette.action.focus}` }}
        onClick={onNextClick}
        disabled={disabledNext}
      >
        <Iconify icon="ph:caret-right-bold" width={14} />
      </IconButton>
    </Box>
  );
}
