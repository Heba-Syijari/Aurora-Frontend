import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';

import BaseEditWrapper from '../base-edit-wrapper';

import { CopyWriteConfig } from '../../components/copy-writes/types';
import { EditCopyWriteConfigDialog } from './edit-copy-wite-dialog';

type Props = {
  defaultValue: CopyWriteConfig;
  children: React.ReactNode;
  onSave: (v: CopyWriteConfig) => void;
  editMode?: boolean;
};

export function EditCopyWriteConfig({ defaultValue, children, onSave, editMode }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditCopyWriteConfigDialog
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

  return children;
}
