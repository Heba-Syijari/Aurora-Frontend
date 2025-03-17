import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';

import { MenusConfig } from '../../components/footer/types';
import BaseEditWrapper from '../base-edit-wrapper';
import EditMenuDialog from './edit-menu-dialog';

type EditMenuWrapperProps = {
  defaultValue: MenusConfig;
  children: React.ReactNode;
  onSave: (v: MenusConfig) => void;
  editMode?: boolean;
};

export default function EditMenuWrapper({
  defaultValue,
  children,
  onSave,
  editMode,
}: EditMenuWrapperProps) {
  const dialog = useBoolean();

  if (!editMode) {
    return <>{children}</>;
  }

  return (
    <>
      <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>
      <EditMenuDialog
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
