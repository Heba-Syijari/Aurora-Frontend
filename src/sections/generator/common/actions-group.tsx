import React from 'react';
import { Stack } from '@mui/material';
import { BaseLoadingButton } from 'src/components/styled/button';

type ActionButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
  type?: 'submit' | 'button' | 'reset';
  loading?: boolean;
};

type ActionsGroupProps = {
  style?: React.CSSProperties;
  primaryButtonProps?: ActionButtonProps;
  secondaryButtonProps?: ActionButtonProps;
};

export default function ActionsGroup({
  style,
  primaryButtonProps: prProps,
  secondaryButtonProps: scProps,
}: ActionsGroupProps) {
  return (
    <Stack style={style} flexDirection="row" justifyContent="flex-end" gap={2} sx={{ mt: 5 }}>
      {scProps && (
        <BaseLoadingButton
          variant="outlined"
          disabled={scProps.disabled}
          loading={scProps.loading}
          onClick={scProps.onClick}
        >
          {scProps.text ?? 'Back'}
        </BaseLoadingButton>
      )}
      {prProps && (
        <BaseLoadingButton
          variant="contained"
          color="primary"
          disabled={prProps.disabled}
          loading={prProps.loading}
          onClick={prProps.onClick}
          type={prProps.type ?? 'button'}
        >
          {prProps.text ?? 'Next'}
        </BaseLoadingButton>
      )}
    </Stack>
  );
}
