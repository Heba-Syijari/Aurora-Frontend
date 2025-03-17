import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import BaseEditWrapper from '../base-edit-wrapper';
import EditButtonDialog from './edit-button-dialog';
import { ButtonData } from '../../types';

type EditButtonWrapperProps = {
  defaultValue: ButtonData;
  children: React.ReactNode;
  onSave: (v: ButtonData) => void;
  editMode?: boolean;
};

export default function EditButtonWrapper({
  defaultValue,
  children,
  onSave,
  editMode,
}: EditButtonWrapperProps) {
  const dialog = useBoolean();

  if (!editMode) {
    return <>{children}</>;
  }

  return (
    <>
      <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>
      <EditButtonDialog
        open={dialog.value}
        defaultValue={defaultValue}
        onCloseClicked={dialog.onFalse}
        onSave={(v) => {
          onSave(v);
          dialog.onFalse();
        }}
      />
    </>
  );
}
