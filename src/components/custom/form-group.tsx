import { Stack, SxProps, Typography } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
  label: string;
  labelFor?: string;
  sx?: SxProps;
  required?: boolean;
};

export function FormGroup({ children, label, labelFor, sx, required }: Props) {
  return (
    <Stack spacing={1} sx={sx}>
      <Typography variant="body2" component="label" htmlFor={labelFor} fontWeight={500}>
        {required && (
          <Typography variant="body2" component="span" color="red">
            *{' '}
          </Typography>
        )}

        {label}
      </Typography>

      {children}
    </Stack>
  );
}
