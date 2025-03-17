import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { MapConfig } from '../../components/contact/types';
import BaseEditWrapper from '../base-edit-wrapper';
import EditMapDialog from './edit-map-dialog';

type EditMapWrapperProps = {
  defaultValue: MapConfig;
  children: React.ReactNode;
  onSave: (v: MapConfig) => void;
  editMode?: boolean;
};

export default function EditMapWrapper({
  defaultValue,
  children,
  onSave,
  editMode,
}: EditMapWrapperProps) {
  const dialog = useBoolean();

  if (!editMode) {
    return <>{children}</>;
  }

  return (
    <>
      <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>
      <EditMapDialog
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
