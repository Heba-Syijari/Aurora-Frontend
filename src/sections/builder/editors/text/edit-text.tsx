import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { ItemMetadata, TextData } from '../../types';
import BaseEditWrapper from '../base-edit-wrapper';
import EditTextDialog from './edit-text-dialog';

type EditTextWrapperProps = {
  label: string;
  defaultValue: TextData;
  children: React.ReactNode;
  onSave: (v: TextData) => void;
  getMetadataInfo: () => ItemMetadata;
  editMode?: boolean;
  disableEditColor?: boolean;
};

export default function EditTextWrapper({
  label,
  defaultValue,
  children,
  onSave,
  getMetadataInfo,
  editMode,
  disableEditColor,
}: EditTextWrapperProps) {
  const dialog = useBoolean();

  if (!editMode) {
    return <>{children}</>;
  }

  return (
    <>
      <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>
      <EditTextDialog
        open={dialog.value}
        label={label}
        defaultValue={defaultValue}
        onCloseClicked={dialog.onFalse}
        onSave={(v) => {
          onSave(v);
          dialog.onFalse();
        }}
        getMetadataInfo={getMetadataInfo}
        disableEditColor={disableEditColor}
      />
    </>
  );
}
