'use client';

import React from 'react';
import { Box, CircularProgress } from '@mui/material';

type ContentLoadingProps = {
  loading: boolean;
  children: React.ReactNode;
};

export const ContentLoading = ({ loading, children }: ContentLoadingProps) => (
  <>
    {loading ? (
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: (theme) => theme.zIndex.drawer + 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffffb3',
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
        {children}
      </Box>
    ) : (
      children
    )}
  </>
);
