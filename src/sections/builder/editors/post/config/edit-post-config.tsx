import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { IPostConfig } from 'src/sections/builder/components/blogs/types';
import BaseEditWrapper from '../../base-edit-wrapper';
import { EditPostConfigDialog } from './edit-post-config-dialog';

type EditPostConfigProps = {
  defaultValue: IPostConfig;
  children: React.ReactNode;
  onSave: (v: IPostConfig) => void;
  editMode?: boolean;
};

export default function EditPostConfig({
  defaultValue,
  children,
  onSave,
  editMode,
}: EditPostConfigProps) {
  const dialog = useBoolean();

  return editMode ? (
    <>
      <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>
      <EditPostConfigDialog
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
