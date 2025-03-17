import React from 'react';
import { Skeleton, Stack } from '@mui/material';

export default function NotificationSkeleton() {
  return (
    <Stack direction="row">
      <Stack
        spacing={2}
        flexGrow={1}
        sx={{ p: 3, borderBottom: (theme) => `dashed 1px ${theme.palette.divider}` }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Skeleton variant="circular" sx={{ width: 40, height: 40 }} />
          <Skeleton sx={{ width: 24, height: 12 }} />
        </Stack>

        <Skeleton sx={{ width: 1, height: 10 }} />
        <Skeleton sx={{ width: `calc(100% - 40px)`, height: 10 }} />
      </Stack>
    </Stack>
  );
}
