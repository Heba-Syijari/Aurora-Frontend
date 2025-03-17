'use client';

import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

type CircularLoadingProps = {
  open: boolean;
};

export const CircularLoading = ({ open }: CircularLoadingProps) => (
  <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
    <CircularProgress color="inherit" />
  </Backdrop>
);
