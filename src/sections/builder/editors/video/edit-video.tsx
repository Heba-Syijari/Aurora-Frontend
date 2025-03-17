'use client';

import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useBoolean } from 'src/hooks/use-boolean';
import BaseEditWrapper from '../base-edit-wrapper';
import { VideoData } from '../../types';
import EditVideoURL from './edit-video-url';

type EditVideoWrapperProps = {
  defaultValue: VideoData;
  children: React.ReactNode;
  onSave: (v: VideoData) => void;
  editMode?: boolean;
};

export default function EditVideoWrapper({
  defaultValue,
  children,
  onSave,
  editMode,
}: EditVideoWrapperProps) {
  const dialog = useBoolean();

  useEffect(() => {
    if (!editMode) {
      dialog.onFalse();
    }
  }, [dialog, editMode]);

  return editMode ? (
    <>
      <BaseEditWrapper onEditClick={dialog.onToggle}>
        <Box sx={{ position: 'relative' }}>
          {children}
          {dialog.value && (
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 99,
                padding: (theme) => theme.spacing(1),
                backgroundColor: (theme) => theme.palette.background.neutral,
              }}
            >
              <EditVideoURL
                url={defaultValue}
                onSave={(v) => {
                  onSave(v);
                  dialog.onFalse();
                }}
              />
            </Box>
          )}
        </Box>
      </BaseEditWrapper>
      {/* <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper> */}
      {/* <EditVideoDialog
        open={dialog.value}
        defaultValue={defaultValue}
        onCloseClicked={dialog.onFalse}
        onSave={(v) => {
          onSave(v);
          dialog.onFalse();
        }}
      /> */}
    </>
  ) : (
    <>{children}</>
  );
}
