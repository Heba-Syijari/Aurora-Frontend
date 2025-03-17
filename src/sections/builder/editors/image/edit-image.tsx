'use client';

import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import BaseEditWrapper from '../base-edit-wrapper';
import EditImageDialog from './edit-image-dialog';
import { ImageData } from '../../types';

type EditImageWrapperProps = {
  defaultValue: ImageData;
  children: React.ReactNode;
  onSave: (v: ImageData) => void;
  editMode?: boolean;
};

export default function EditImageWrapper({
  defaultValue,
  children,
  onSave,
  editMode,
}: EditImageWrapperProps) {
  const dialog = useBoolean();

  return editMode ? (
    <>
      <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>
      <EditImageDialog
        open={dialog.value}
        defaultValue={defaultValue}
        onCloseClicked={dialog.onFalse}
        onSave={(v) => {
          onSave(v);
          dialog.onFalse();
        }}
      />
    </>
  ) : (
    <>{children}</>
  );
}
