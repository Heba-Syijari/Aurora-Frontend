import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { ImpactConfig } from 'src/sections/builder/components/impact/types';
import BaseEditWrapper from '../base-edit-wrapper';
import { EditImpactConfigDialog } from './edit-impact-config-dialog';

type Props = {
  defaultValue: ImpactConfig;
  children: React.ReactNode;
  onSave: (v: ImpactConfig) => void;
  editMode?: boolean;
};

export function EditImpactConfig({ defaultValue, children, onSave, editMode }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditImpactConfigDialog
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
